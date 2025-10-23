/**
 * Copyright (c) 2025 sakib-maho
 * Licensed under the MIT License
 * See LICENSE file for details
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  
})




export class HomepageComponent implements OnInit {

  constructor(private router: Router){}
  forms : any = []
  

  ngOnInit(): void {   
    this.addForms();
    
  }

  
  addForms(){
    const olddata = localStorage.getItem('Forms');
    
    if (olddata !== null){
      const data_list = JSON.parse(olddata);
      this.forms = [history.state, ...data_list];
      
    }else{
      this.forms = [history.state]
      
    }
    
    if (JSON.stringify(history.state).length > 20) {
      localStorage.setItem('Forms', JSON.stringify(this.forms));
    }

    const dataa = localStorage.getItem("Forms");
    if (dataa !== null) {
      const ndata = JSON.parse(dataa);
      for (let step = 0; step < ndata.length; step++) {
        const da: any= {
          position: step+1,
          Name: ndata[step].title,
          CreatedOn: ndata[step].createdDate,
         
        }
        ELEMENT_DATA[step] = da;
      }
      
    }
    
    
  }
  refresh(): void {
    window.location.reload();
  
}
  
  dataset = localStorage.getItem('Forms');
  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Name', 'CreatedOn'];
  expandedElement!: PeriodicElement | null;

  clickdata(title: any){
    console.log(title);
    let dataToShow = []
    let ans = []
    const dataa = localStorage.getItem("Forms");
    if (dataa !== null) {
      const ndata = JSON.parse(dataa);
      for (let step = 0; step < ndata.length; step++) {
        if (title === ndata[step].title) {
          
          dataToShow.push(ndata[step]); 
          for (let i=0; i<ndata[step].answers.length; i++){
            ans.push(ndata[step].answers[i].answer);
          }
          break;
        }
      }
    }
    
    console.log(ans);
    this.router.navigate(['/question-builder/details'], { state: {name: dataToShow[0], arr: ans} });


  }
  
  

}

export interface PeriodicElement {
  Name: string;
  position: number;
  CreatedOn: number;
  
}


const ELEMENT_DATA: PeriodicElement[] = [
  
];



