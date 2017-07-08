var mongoose=require('mongoose');

var db=require("./db_config")

		var IssueBooks=mongoose.Schema({

			REFNO:String,
			BOOKNAME:String,
			AUTHNAME:String,
			COPIES:Number,
			STUDENTNAME:String,
			REGISTRATION:String,
			ISSUEDATE:Date,
			RETURNDATE:Date,
			ISSUEDEMPID:String
			
		},{ collection: 'IssueBooks' })

		var issue = mongoose.model('issue', IssueBooks);

		    exports.issueBookDetails=function(req,res){
		     		    
		        var issueData=new issue(req.body);

		         issueData.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })
		    }
