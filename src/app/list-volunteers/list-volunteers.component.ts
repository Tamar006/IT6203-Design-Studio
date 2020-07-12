import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-list-volunteers',
  templateUrl: './list-volunteers.component.html',
  styleUrls: ['./list-volunteers.component.css']
})
export class ListVolunteersComponent implements OnInit 
{
  public volunteers;

        constructor(private _myService: VolunteerService) { }
        ngOnInit() 
        {
          this.getVolunteers();
        }
        //method called OnInit
        getVolunteers() 
        {
            this._myService.getVolunteers().subscribe(
              //read data and assign to public variable volunteers
              data => { this.volunteers = data},
              err => console.error(err),
              () => console.log('finished loading')
              );
        }

        onDelete(volunteer_id: string) 
        {
          this._myService.deleteVolunteer(volunteer_id);
        }
}

