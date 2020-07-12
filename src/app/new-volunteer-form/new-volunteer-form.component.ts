import { Component, OnInit, Input } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import {Router} from '@angular/router';  
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-volunteer-form',
  templateUrl: './new-volunteer-form.component.html',
  styleUrls: ['./new-volunteer-form.component.css']
})
export class NewVolunteerFormComponent implements OnInit {
  @Input() volunteerID: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() street: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zip: string;
  @Input() phone: string;
  @Input() email: string;
  @Input() emergencyContactName: string; 
  @Input() emergencyContactPhone: string;
  @Input() days: string;
  @Input() startTime: string;
  @Input() endTime: string;
  @Input() projectInterest: string;

  private mode = 'Add'; //default mode
  private id: string; //student ID

  constructor(private _myService: VolunteerService, private router:Router, public route: ActivatedRoute) { }

  onSubmit()
  {
    console.log("You submitted: " + this.volunteerID + " " + this.firstName + " " + this.lastName + " " + this.street + " " +
    this.city + " " + this.state + " " + this.zip + " " + this.phone + " " + this.email + " " +
    this.emergencyContactName + " " + this.emergencyContactPhone + " " + this.days + " " + this.startTime + " " +
    this.endTime + " " + this.projectInterest + " ");
   
    if(this.mode == 'Add')
    this._myService.addVolunteers(this.volunteerID, this.firstName, this.lastName, this.street, this.city, this.state, this.zip,
      this.phone, this.email, this.emergencyContactName, this.emergencyContactPhone, this.days, this.startTime, this.endTime, this.projectInterest);
    if(this.mode == 'Edit')
    this._myService.updateVolunteer(this.id, this.volunteerID, this.firstName, this.lastName, this.street, this.city, this.state, this.zip,
      this.phone, this.email, this.emergencyContactName, this.emergencyContactPhone, this.days, this.startTime, this.endTime, this.projectInterest);
    this.router.navigate(['/listVolunteers']);
  }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'Edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'Add';
           this.id = null; }
     });
  }
  

}
