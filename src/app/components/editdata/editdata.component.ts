import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  
  constructor(private router: Router){}

  name = history.state.name;

  title = JSON.stringify(history.state.name['title']);
  id = JSON.stringify(history.state.name['id']);
  descrip = JSON.parse(JSON.stringify(history.state.name['descrip']));
  c_date = JSON.parse(JSON.stringify(history.state.name['createdDate']));
  question = JSON.parse(JSON.stringify(history.state.name['question']));
  up_date = JSON.parse(JSON.stringify(history.state.name['updateDate']));
  
  ntitle = JSON.parse(this.title);
  f_id = JSON.parse(this.id)
  arr = history.state.arr;

  

  
  
  ngOnInit(): void {
    //console.log(this.data);
    if (this.up_date === '') {
      this.up_date = this.c_date;
    } else {
      this.up_date = this.up_date;
    }
   

  }

}
