const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Volunteer = require('./models/volunteer')
// connect and display the status 
mongoose.connect('mongodb+srv://Admin:svBIILHuZBJZRHyr@clusterone.kvo3q.mongodb.net/VolDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

//mongodb+srv://joselyn:volunteers@it6203-opjba.mongodb.net/test?retryWrites=true&w=majority

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});


app.get('/volunteers', (req, res, next) => {
  //call mongoose method find (MongoDB db.Volunteers.find())
  Volunteer.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  }); 
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /volunteers
app.post('/volunteers', (req, res, next) => {
  console.log(req.body.donation)
  const volunteer = new Volunteer({
    volunteerID:  req.body.volunteerID,
    firstName:  req.body.firstName,
    lastName:  req.body.lastName,
    street:  req.body.street,
    city:  req.body.city,
    state:  req.body.state,
    zip:  req.body.zip,
    phone:  req.body.phone,
    email: req.body.email,
    emergencyContactName:  req.body.emergencyContactName,
    emergencyContactPhone:  req.body.emergencyContactPhone,
    days:  req.body.days,
    startTime: req.body.startTime,
    endTime:  req.body.endTime,
    projectInterest: req.body.projectInterest,
    donationDate: req.body.donationDate,
    donationAmount: req.body.donationAmount,

  });
  //send the document to the database
  volunteer.save()
  //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
});

 // serve incoming put requests to /volunteers
 app.put('/volunteers/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Volunteer.findOneAndUpdate({_id: req.params.id},
      {$set:{
          volunteerID:  req.body.volunteerID,
          firstName:  req.body.firstName,
          lastName:  req.body.lastName,
          street:  req.body.street,
          city:  req.body.city,
          state:  req.body.state,
          zip:  req.body.zip,
          phone:  req.body.phone,
          email: req.body.email,
          emergencyContactName:  req.body.emergencyContactName,
          emergencyContactPhone:  req.body.emergencyContactPhone,
          days:  req.body.days,
          startTime: req.body.startTime,
          endTime:  req.body.endTime,
          projectInterest: req.body.projectInterest,
          donationDate: req.body.donationDate,
          donationAmount: req.body.donationAmount,
      }},{new:true}) 
     .then((volunteer) => {
        if (volunteer) { //what was updated
          console.log(volunteer.donationDate);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }
  
});  
 
 app.delete("/volunteers/:id", (req, res, next) => {
  Volunteer.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


//to use this middleware in other parts of the application
module.exports=app;
