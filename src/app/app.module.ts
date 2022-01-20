import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { EditdataComponent } from './components/editdata/editdata.component';
import { AddformComponent } from './components/addform/addform.component';
import { CheckComponent } from './components/check/check.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdateComponent } from './components/update/update.component';


const appRoutes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'login/forgot-password', component: ForgotpassComponent},
  {path: 'question-builder', component: HomepageComponent},
  {path: 'question-builder/details', component: EditdataComponent},
  {path: 'question-builder/create', component: AddformComponent},
  {path: 'check', component: CheckComponent},
  {path: 'question-builder/update', component: UpdateComponent},
  {path: '**',  component: LoginComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpassComponent,
    HomepageComponent,
    EditdataComponent,
    AddformComponent,
    CheckComponent,
    UpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatIconModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
