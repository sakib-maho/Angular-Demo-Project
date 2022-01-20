import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators }  from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  passFormControl= new FormControl('', [Validators.required,   Validators.minLength(1)]);


  matcher = new MyErrorStateMatcher();

  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private formBuilder:FormBuilder){}
 
  profileForm = this.formBuilder.group({
   
  });
 
  saveForm(){
    console.log('Form email is ', this.email.value);
    console.log('Form pass is ', this.passFormControl.value);
    if (this.email.value === 'sakib@gmail.com' && this.passFormControl.value === '1234') {
      console.log('Permited')
    }
    else{
      console.log('Not permited')
    }
  }


}
