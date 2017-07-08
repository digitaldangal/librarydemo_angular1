		var express         =  require('express');
		var bodyParser      =  require('body-parser');
		var emailExistence  =  require('email-existence');
		var mongoose        =  require('mongoose');
		var cookieParser    =  require('cookie-parser')
		var parse           =  require('jsonparse');
		var session         =  require('express-session');
		var passport        =  require('passport');
		var passportLocal   =  require('passport-local').Strategy;
		var app=express();
		var addBook         =  require("./models/addBook");
		var issueBook       =  require("./models/issueBook");
		var returnBook      =  require("./models/returnBook");
		var users           =  require("./models/users");

		app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({ extended: true }));
        var port=Number(process.env.PORT || 4000);
        app.use(express.static('public'));
				app.listen(port);
				console.log('server started');
				app.post('/email',function(req,response){
				emailExistence.check(req.body.EMAIL,function(err,res){
				if(!err){
					response.send(res);
					}
				else{
					response.send(err);
					console.log(err);
				}
			})
		});

		app.post('/addBook',addBook.saveNewBooks);
		app.post('/issueBook',issueBook.issueBookDetails);
		app.post('/returnBook',returnBook.returnBookDetails);
		app.post('/signup',users.saveUserDetails);
		app.post('/login',users.loginDetails);
		app.post('/findBook',addBook.findBookDetails);
		
