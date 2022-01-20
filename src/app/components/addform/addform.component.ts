
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
  providers: [DatePipe],
 
})


export class AddformComponent  {

  showw = 0;

  public answers: any[] = [{
    id: 1,
    answer: '',
   
  }];


  addAnswer() {
    this.answers.push({
      id: this.answers.length + 1,
      answer: '',
   
    });
    this.showw = this.showw + 1;
  }
  
  removeAnswer(i: number) {
    console.log(this.addAnswer.length);
    this.showw = this.showw - 1;
    this.answers.splice(i, 1);
  }

  logValue() {
    console.log(this.answers);
  }


  selected = 'option3';
  show = 'option3';
  option1(){
    this.show = this.selected;
    console.log(this.show);
  }
  option2(){
    this.show = this.selected;
    console.log(this.show);
  }
  option3(){
    this.show = this.selected;
    console.log(this.show);
  }
  option4(){
    this.show = this.selected;
    console.log(this.show);
  }
  option5(){
    this.show = this.selected;
    console.log(this.show);
  }
  question = new FormControl('', [Validators.required, Validators.minLength(1)]);
  constructor(private formBuilder:FormBuilder, private router: Router, public datepipe: DatePipe){}
  matcher = new MyErrorStateMatcher();

  
  getErrorMessage() {
    if (this.question.hasError('required')) {
      return 'required';
    }

    return ''
  }


  profileForm = this.formBuilder.group({
    title:[''],
    formDescription:[''],
    
   
  });

  
  
  saveForm(){
    let date=new Date();
    console.log('Form data is ques ',this.question.value)

    console.log(this.answers.values)
    let ans = this.answers.values
    console.log('Form data is ', this.profileForm.value.title);
    
    let latest_date =this.datepipe.transform(date, 'dd-MM-yyyy');
    console.log('Date:',latest_date)

    let idnum = localStorage.getItem('Forms');
    
    if (idnum !== null) {
      let form_id = JSON.parse(idnum);
      this.router.navigate(['/question-builder'], 
      { state: {id: form_id.length+1 , title:  this.profileForm.value.title ,
        descrip:  this.profileForm.value.formDescription , 
        question: this.question.value, answers: this.answers,
        createdDate: latest_date, updateDate: '' } });
   
    } else {
      this.router.navigate(['/question-builder'], 
      { state: {id:1, title:  this.profileForm.value.title ,
        descrip:  this.profileForm.value.formDescription , 
        question: this.question.value, answers: this.answers,
        createdDate: latest_date, updateDate: '' } });
    }

    // this.router.navigate(['/question-builder'], 
    // { state: { title:  this.profileForm.value.title ,
    //   descrip:  this.profileForm.value.formDescription , 
    //   question: this.question.value, answers: this.answers,
    //   createdDate: latest_date } });

  }

 
  

}

function indo(indo: any) {
  throw new Error('Function not implemented.');
}

