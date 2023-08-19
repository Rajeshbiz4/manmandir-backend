// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  Address: { type: String },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var customer = mongoose.model("customer", customerSchema);

// make this available to our users in our Node applications
module.exports = customer;
