// const mongoose = require('mongoose');



// const ProfileSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
//   company: { type: String },
//   website: { type: String },
//   location: { type: String },
//   status: { type: String, required: true },
//   skills: { type: [String], required: true },
//   bio: { type: String },
//   githubusername: { type: String },
//   experience: [
//     {
//       title: { type: String, required: true },
//       company: { type: String, required: true },
//       location: { type: String },
//       from: { type: Date, required: true },
//       to: { type: Date },
//       current: { type: Boolean, default: false },
//       description: { type: String },
//     },
//   ],
//   education: [
//     {
//       school: { type: String, required: true },
//       degree: { type: String, required: true },
//       fieldofstudy: { type: String, required: true },
//       from: { type: Date, required: true },
//       to: { type: Date },
//       current: { type: Boolean, default: false },
//       description: { type: String },
//     },
//   ],
//   social: {
//     youtube: { type: String },
//     twitter: { type: String },
//     facebook: { type: String },
//     linkedin: { type: String },
//     instagram: { type: String },
//     reddit: { type: String },
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = Profile = mongoose.model('profile', ProfileSchema);




const mongoose = require('mongoose');

// Set strictQuery to false to prepare for the change in Mongoose 7
mongoose.set('strictQuery', false);

// Or set strictQuery to true to suppress the warning
// mongoose.set('strictQuery', true);

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  company: { type: String },
  website: { type: String },
  location: { type: String },
  status: { type: String, required: true },
  skills: { type: [String], required: true },
  bio: { type: String },
  githubusername: { type: String },
  experience: [
    {
      title: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String },
    },
  ],
  education: [
    {
      school: { type: String, required: true },
      degree: { type: String, required: true },
      fieldofstudy: { type: String, required: true },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String },
    },
  ],
  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    reddit: { type: String },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
