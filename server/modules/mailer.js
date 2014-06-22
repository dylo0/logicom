'use strict';

//
// Module responsible for sending emails to users
// 

var nodemailer = require("nodemailer"),
	config = require("../config/logicomConfig.js");


var smtpTransport = nodemailer.createTransport("SMPT",{
	service: "Gmail",
    auth: {
      user: config.email,
      pass: config.emailPassword
    }
});

module.exports = {
	sendEmail: function (receiver, title, message, htmlContent) {
		// receiver accepts string based list i.e.
		// "bar@blurdybloop.com, baz@blurdybloop.com"
		var mailOptions = {
	    from: config.emailSender,
	    to: receiver,
	    subject: title,
	    text: message,
	    html: htmlContent
		};

		// send mail with defined transport object
		smtpTransport.sendMail(mailOptions, function(error, response){
		    if(error){
		        console.log(error);
		    }else{
		        console.log("Message sent: " + response.message);
		    }

		    // if you don't want to use this transport object anymore, uncomment following line
		    //smtpTransport.close(); // shut down the connection pool, no more messages
		});


	}
}