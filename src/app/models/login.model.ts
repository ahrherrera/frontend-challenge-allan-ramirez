import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Login{
    public email: string;
    public password: string;

    constructor(
        email: string,
        password: string
    ){
        this.email = email;
        this.password = password;
    }
}

export function getErrorMessages(): any {
  return  {
      'email': [
        { 
          type: 'required', 
          message: 'Provide email' 
        },
        { 
          type: 'pattern', 
          message: 'Email is not valid' 
        }
      ],
      'password': [
        { 
          type: 'required', 
          message: 'Password is required' 
        },
        { 
          type: 'minlength', 
          message: 'Password length should be 6 characters long' 
        }
      ]
    };
}

export function getLoginForm(): any {
    return  {
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    }
}