import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Holiday, loadLocalData } from 'src/app/models/holiday.model';
import { HolidaysService } from 'src/app/services/holidays.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {

  code: string;
  holidays: Holiday[];
  constructor(private route: ActivatedRoute,
    private holidaysService: HolidaysService,
    public loadingController: LoadingController,
    public toastController: ToastController) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.getHolidaysByCountry();
    });
  }

  async getHolidaysByCountry() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.holidaysService.getHolidays(this.code).subscribe(response => {
      loading.dismiss();
      this.holidays = response.holidays;
    }, async error => {
      loading.dismiss();
      const toast = await this.toastController.create({
        message: 'An error ocurred while loading holidays... Loading local data',
        duration: 5000
      });
      toast.present();
      this.holidays = loadLocalData();
    });
  }

}
