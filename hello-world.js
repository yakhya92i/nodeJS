// Task 1
console.log("Hello, World!");


// Task 2
var http = require('http');
http.createServer(function (req, res){
    res.write('Hello Node!!!!');
    res.end();
}).listen(3000);


// Task 3
const fs = require ('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File Created Succesfully');
});


// Task 4
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);


// Task 5
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
}
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});