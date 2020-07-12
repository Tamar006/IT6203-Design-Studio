const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const volunteerSchema = new mongoose.Schema({
    volunteerID:  { type: String, required: true},
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true},
    street:  { type: String, required: true},
    city:  { type: String, required: true},
    state:  { type: String, required: true},
    zip:  { type: String, required: true},
    phone:  { type: String, required: true},
    email:  { type: String, required: true},
    emergencyContactName:  { type: String, required: true},
    emergencyContactPhone:  { type: String, required: true},
    days:  { type: String, required: true},
    startTime:  { type: String, required: true},
    endTime:  { type: String, required: true},
    projectInterest:  { type: String, required: true}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Volunteer', volunteerSchema,'Volunteers');
//note capital V in the collection name
