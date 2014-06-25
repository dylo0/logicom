'use strict';

module.exports = function (mongoose, userSchema) {
    // define the schema for our user model
    var companySchema = mongoose.Schema({
        name: 'Logicom',
        logicomId: '12312312312',
        adress: 'Rybnicka 32A/2',
        zip: '44-200',
        city: 'Gliwice',
        tax: '635-12-53-11',
        phone: '32 123 456',
        fax: '32 123 457',
        email: 'biuro@logicom.pl',
        www: 'www.logicom.pl',
        users: [{}]
      });

    return mongoose.model('Company', companySchema);
}

 