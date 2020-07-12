import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class VolunteerService {
 
    constructor(private http:HttpClient) {}
    // Uses http.post() to post data 
    addVolunteers(volunteerID:string, firstName: string, lastName: string, street:string, 
        city:string, state:string, zip:string, phone:string, email:string, emergencyContactName:string, 
        emergencyContactPhone:string, days:string, startTime:string, endTime:string, projectInterest:string)
     {
        this.http.post('http://localhost:8000/volunteers',{ volunteerID, firstName, lastName, street,
        city, state, zip, phone, email, emergencyContactName, emergencyContactPhone, days, startTime, endTime, projectInterest})
    .subscribe((responseData) => {
        console.log(responseData);
    });
    location.reload(); 
    }

    // Uses http.get() to load data 
    getVolunteers() {
        return this.http.get('http://localhost:8000/volunteers');
    }

    updateVolunteer(_id: string, volunteerID:string, firstName: string, lastName: string, street:string, 
        city:string, state:string, zip:string, phone:string, email:string, emergencyContactName:string, 
        emergencyContactPhone:string, days:string, startTime:string, endTime:string, projectInterest:string) {
        //request path http://localhost:8000/volunteers/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/volunteers/" 
                + _id, {_id, volunteerID, firstName, lastName, street,
                    city, state, zip, phone, email, emergencyContactName, 
                    emergencyContactPhone, days, startTime, endTime, projectInterest})
              .subscribe(() => {
                  console.log('Updated: ' + _id);
              });
              location.reload();
        }
    
    deleteVolunteer(volunteerid: string) {
        this.http.delete("http://localhost:8000/volunteers/" + volunteerid)
          .subscribe(() => {
              console.log('Deleted: ' + volunteerid);
          });
          location.reload();
      }
    
}
