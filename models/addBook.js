var mongoose=require('mongoose');

var db=require("./db_config")

		var Books=mongoose.Schema({

			REFNO:String,
			BOOKNAME:String,
			AUTHNAME:String,
			COPIES:Number,
			PUBLICATIONYEAR:String,
			PUBLISHEDBY:String,
			STREAM:String,
			RACKNO:String,
			EMPID:String,
			EMPNAME:String,
			ADDDATE:{ type: Date}
		},{ collection: 'Books' })

		var addBook = mongoose.model('addBook', Books);

		    exports.saveNewBooks=function(req,res){

		        var bookData=new addBook(req.body);

		         bookData.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })
		    }


		    exports.findBookDetails=function(req,res){

					if(req.body.BOOKNAME==null && req.body.AUTHNAME==null && req.body.STREAM==null){

						addBook.find({},function(err,data){

						if(!err){

							res.send(data);
						}

								})
					}
					else if(req.body.BOOKNAME==null && req.body.AUTHNAME==null){
		  				addBook.find({STREAM:req.body.STREAM},function(err,data){

		    		if(!err){
						if(data==''){

						res.sendStatus(400);
						}
						else
						{
							res.send(data);
						}

		  	    	  }
		  	        })
		  	       }
		  	    	else{

		    	  addBook.find({$and:[{STREAM:req.body.STREAM},{BOOKNAME:req.body.BOOKNAME},{AUTHNAME:req.body.AUTHNAME}]},function(err,data){
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
		    }
