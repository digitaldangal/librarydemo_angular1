var mongoose=require('mongoose');
var db=require("./db_config")

		var UsersData=mongoose.Schema({
			FIRSTNAME:String,
			LASTNAME:String,
			EMAIL:String,
			PASSWORD:String
		},{ collection: 'UsersData' })

		var UserData = mongoose.model('userDate', UsersData);

		    exports.saveUserDetails=function(req,res){

		        var user=new UserData(req.body);

		         user.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })

		     }

		  exports.loginDetails=function(req,res){

		  		UserData.find({$and:[{EMAIL:req.body.EMAIL,PASSWORD:req.body.PASSWORD}]},function(err,data){
					if(!err){
						if(data==''){

						res.sendStatus(400);
						}
						else
						{
							res.send(data);
						}


					}
					else{
							res.send(err);
					}
				})
		  }
