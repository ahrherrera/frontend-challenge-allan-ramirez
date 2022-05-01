import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Country, loadLocalData } from 'src/app/models/country.model';
import { FirebaseAuthService } from 'src/app/services/firebaseauth.service';
import { HolidaysService } from 'src/app/services/holidays.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public countries: Country[];

  constructor(private holidaysService: HolidaysService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private authService: FirebaseAuthService,
    private router: Router) {}

  ngOnInit(){
    console.log('On Init');
    
    this.loadCountries();
  }

  async loadCountries() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    this.holidaysService.getCountries().subscribe(response => {
      loading.dismiss();
      this.countries = response.countries;
    }, async error => {
      console.log(error);
      loading.dismiss();
      const toast = await this.toastController.create({
        message: 'An error ocurred while loading countries... Loading local data',
        duration: 5000
      });
      toast.present();
      this.countries = loadLocalData();
    });
  }

  async onLogoutClick() {
    const loading = await this.loadingController.create({
      message: 'Signing Out...'
    });
    await loading.present();
    this.authService.signoutUser().then(response => {
      loading.dismiss();
      this.router.navigateByUrl('login');
    });
  }

  showItem(country: Country) {
    this.router.navigate(['/holidays', country.code]);
  }

}
