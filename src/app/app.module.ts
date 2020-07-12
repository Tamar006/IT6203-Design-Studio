import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerService } from './volunteer.service';
import { NewVolunteerFormComponent } from './new-volunteer-form/new-volunteer-form.component';  
import { MatFormFieldModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatInputModule, MatButtonModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ListVolunteersComponent } from './list-volunteers/list-volunteers.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListVolunteersComponent
 },       {
   path: 'addVolunteer',         //when volunteer added 
   component: NewVolunteerFormComponent
 },       
 {
  path: 'editVolunteer/:_id',         //when volunteer edited 
  component: NewVolunteerFormComponent
},

 {
   path: 'listVolunteers',       //when volunteers listed
   component: ListVolunteersComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NewVolunteerFormComponent,
    NavigationMenuComponent,
    ListVolunteersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
