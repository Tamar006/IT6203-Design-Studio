import { Component, OnInit } from '@angular/core';
import { FundsService } from '../funds.service';
import {VolunteerService} from '../volunteer.service';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.css']
})
export class ListFundsComponent implements OnInit {
    public volunteers;
  
          constructor(private _myService: FundsService) { }
          ngOnInit() 
          {
            this.getVolunteers();
          }

          getVolunteers()
          {
            this._myService.getVolunteers().subscribe(
              //read data and assign to public variable volunteers
              data => {
                console.log(data);
                this.volunteers = data
              },
              err => console.error(err),
              () => console.log('finished loading')
            );
          }

        onDeleteDonation(_id: string, volunteer){
          this._myService.deleteDonation(_id, volunteer.volunteerI, volunteer.firstName, volunteer.lastName, volunteer.street, volunteer.
            city, volunteer.state, volunteer.zip, volunteer.phone, volunteer.email, volunteer.emergencyContactName, volunteer.
            emergencyContactPhone, volunteer.days, volunteer.startTime, volunteer.endTime, volunteer.projectInterest, null, null);
        }
  }
  
