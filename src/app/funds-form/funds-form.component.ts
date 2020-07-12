import { Component, OnInit, Input } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import {Router} from '@angular/router';  
import {ActivatedRoute, ParamMap } from '@angular/router';
import { FundsService } from '../funds.service';

@Component({
  selector: 'app-funds-form',
  templateUrl: './funds-form.component.html',
  styleUrls: ['./funds-form.component.css']
})
export class FundsFormComponent implements OnInit {
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
  @Input() donationDate: string;
  @Input() donationAmount: string;

  mode = 'Add'; //default mode
  private id: string; //student ID
  volunteer;

  constructor(private _myService: FundsService, private router:Router, public route: ActivatedRoute) { }

  ngOnInit(){

  }

  onSubmit()
  {
    console.log("You submitted: " + this.volunteerID + " " + this.firstName + " " + this.lastName + " " + this.street + " " +
      this.city + " " + this.state + " " + this.zip + " " + this.phone + " " + this.email + " " + this.donationDate + " " +
      this.donationAmount + " ");

    this._myService.addVolunteer(this.volunteerID, this.firstName, this.lastName, this.street, this.city, this.state, this.zip,
    this.phone, this.email, '', '', '', '',
      '', '',
      this.donationDate, this.donationAmount);

  }


}
