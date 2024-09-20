const mongoose = require('mongoose');

// Assistance Schema
const assistanceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: [{ type: String, required: true }]
});

const AssistanceModel = mongoose.model('legalassistances', assistanceSchema);

const lawyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  contact: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String }  // If you want to add image URLs later
});

const LawyerModel = mongoose.model('advocates', lawyerSchema);

const representationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: [{ type: String, required: true }],
});

const RepresentationModel = mongoose.model('legalrepresentations', representationSchema);




// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('users', userSchema);

module.exports = {LawyerModel,UserModel, AssistanceModel,RepresentationModel };
