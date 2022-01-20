import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})




export class CheckComponent {
  name = new FormControl('Sakib');

  x = 'Sakib Khan';
  constructor(private router: Router){}

  updateName() {
    this.name.setValue(this.name.value);
  }
  update() {
    this.router.navigate(['/update'], 
    { state: { title:  this.name.value } });
  }
  // show = 0;

  // public answers: any[] = [{
  //   id: 1,
  //   answer: '',
   
  // }];
  


  ngOnInit() {

  }

  // addAnswer() {
  //   this.answers.push({
  //     id: this.answers.length + 1,
  //     answer: '',
   
  //   });
  //   this.show = this.show + 1;
  // }
  
  // removeAnswer(i: number) {
  //   console.log(this.addAnswer.length);
  //   this.show = this.show - 1;
  //   this.answers.splice(i, 1);
  // }

  // logValue() {
  //   console.log(this.answers);
  // }

}
