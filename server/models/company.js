'use strict';

module.exports = function (mongoose, userSchema) {
  // define the schema for our user model
  var companySchema = mongoose.Schema({
    name:   String,
    adress: String,
    zip:    String,
    city:   String,
    tax:    String,
    phone:  String,
    fax:    String,
    email:  String,
    www:    String,
    users:  [userSchema]
  });

  return mongoose.model('Company', companySchema);
}
