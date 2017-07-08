var mongoose=require('mongoose');

var db=require("./db_config")

		var ReturnBooks=mongoose.Schema({

			REFNO:String,
			BOOKNAME:String,
			AUTHNAME:String,
			COPIES:Number,
			STUDENTNAME:String,
			REGISTRATION:String,
			RETURNDATE:Date,
			ISSUEDEMPID:String
			
		},{ collection: 'ReturnBooks' })

		var returnBook = mongoose.model('returnBook', ReturnBooks);

		    exports.returnBookDetails=function(req,res){
		     		    
		        var retBook=new returnBook(req.body);

		         retBook.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })
		    }
