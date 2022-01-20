import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators }  from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  

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
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute,
    private router: Router){}
 
  profileForm = this.formBuilder.group({
   
  });
 
  saveForm(){
    console.log('Form email is ', this.email.value);
    console.log('Form pass is ', this.passFormControl.value);
    if (this.email.value === 'sakib@gmail.com' && this.passFormControl.value === '1234') {
      console.log('Permited')
      this.router.navigate(['/question-builder'])
      
    }
    else{
      console.log('Not permited')
    }
  }

}
