import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { getErrorMessages, getLoginForm, Login } from 'src/app/models/login.model';
import { FirebaseAuthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public error_messages = getErrorMessages();
  public loginForm: FormGroup;
  public successMsg: string = '';
  public errorMsg: string = '';

  constructor(
    private router: Router,
    private authService: FirebaseAuthService,
    public loadingController: LoadingController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(getLoginForm());
  }

  async onClickSignIn(loginForm: Login){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.authService.signinUser(loginForm)
    .then((response) => {
      loading.dismiss();
      console.log(response)
      this.errorMsg = "";
      this.router.navigateByUrl('home');
    }, error => {
      loading.dismiss();
      this.errorMsg = error.message;
      this.successMsg = "";
    });
  }

}
