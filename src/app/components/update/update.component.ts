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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [DatePipe],
})
export class UpdateComponent implements OnInit {

  name = history.state.name;
  arr = history.state.arr;
  ftitle = history.state.title;
  fdes = history.state.fdes;
  fques = history.state.qus;
  foptn = history.state.opt;
  f_id = history.state.id;
  c_date = history.state.c_date;
  
  showw = this.foptn.length;
  //showw = 0;
  //question = ',jl,jl';

  public answers: any[] = [];

  ngOnInit(): void {
    console.log(history.state);
   
    for (let step = 0; step < this.foptn.length; step++) {
      // Runs 5 times, with values of step 0 through 4.
      console.log(this.foptn[step]);
      this.answers.push({
        id: step+1,
        answer: this.foptn[step],
      })
    }
   

  }


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
    //this.answers.pop();
  }

  logValue() {
    console.log(this.answers);
  }


  selected = 'option3';
  show = 'option3';
  option1(){
    this.show = this.selected
    console.log(this.show)
  }
  option2(){
    this.show = this.selected
    console.log(this.show)
  }
  option3(){
    this.show = this.selected
    console.log(this.show)
  }
  option4(){
    this.show = this.selected
    console.log(this.show)
  }
  option5(){
    this.show = this.selected
    console.log(this.show)
  }
  question = new FormControl(this.fques, [Validators.required, Validators.minLength(1)]);
  constructor(private formBuilder:FormBuilder, private router: Router, public datepipe: DatePipe){}
  matcher = new MyErrorStateMatcher();

  
  getErrorMessage() {
    if (this.question.hasError('required')) {
      return 'required';
    }

    return ''
  }


  profileForm = this.formBuilder.group({
    title:[this.ftitle],
    formDescription:[this.fdes],
    
   
  });

  
  
  saveForm(){
    console.log(localStorage.getItem('Forms'));

    //jhjhj

    let yourData = localStorage.getItem("Forms");
    let yourNewData = []
    if (yourData !== null) {
      let data = JSON.parse(yourData);
      for(let i=0; i<data.length; i++) 
      { 
          if(data[i].id !== this.f_id)
              {
                  yourNewData.push(data[i]);
              }
      }
      localStorage.setItem("Forms", JSON.stringify(yourNewData))
      console.log('new-->>',yourNewData);
    }

    

   



    //kjkkl
    let date=new Date();
    //console.log('Form data is ques ',this.question.value)

    //console.log(this.answers.values)
    let ans = this.answers.values;
    console.log('Form data is ', this.profileForm.value.title);
    
    let latest_date =this.datepipe.transform(date, 'dd-MM-yyyy');
    //console.log('Date:',latest_date)

    this.router.navigate(['/question-builder'], 
      { state: {id: this.f_id, title:  this.profileForm.value.title ,
        descrip:  this.profileForm.value.formDescription , 
        question: this.question.value, answers: this.answers,
        createdDate: this.c_date, updateDate: latest_date } });

    // this.router.navigate(['/question-builder'], 
    // { state: { title:  this.profileForm.value.title ,
    //   descrip:  this.profileForm.value.formDescription , 
    //   question: this.question.value, answers: this.answers,
    //   updateDate: latest_date } });

  }

 
  

}
