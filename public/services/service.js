 var myApp=angular.module('service',[]);

        myApp.factory('libraryService',function($http){
                var factory={};
                factory.myMailService=function(mail){
                    var json={};
                    json['EMAIL']=mail;
                    var formJson=JSON.stringify(json);

                    return $http.post('/email',formJson)
                }
                factory.addBookService=function(rec){

                    return $http.post('/addBook',rec)
                }
                factory.signupService=function(rec){
                    return $http.post('/signup',rec)
                }
                factory.loginService=function(rec){
                    return $http.post('/login',rec)
                }
                factory.issueBookService=function(rec){
                   return $http.post('/issueBook',rec)
                }
                factory.returnBookService=function(rec){
                  return $http.post('/returnBook',rec)
                }

                 factory.findBookService=function(rec){
                  return $http.post('/findBook',rec)
                }

              
               return factory;

        })

      myApp.factory('storeService',function(libraryService){
            var factory={};
            factory.findStore=function(){

            }
        return factory;
      })
