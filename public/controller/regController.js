var myApp=angular.module('reg',[]);
myApp.controller('registration',function($scope,$http,$location,libraryService){
    $scope.reg={};
      var mailResponse;
         $scope.register=function(){
                var mail=new RegExp(/\S+@\S+\.\S+/);
               var patt = new RegExp(/[A-za-z0-9][@|#|$|&]/);
	            var email=mail.test($scope.reg.EMAIL);
	            var pass = patt.test($scope.reg.PASSWORD);

	                if(email==true){

	                  $('#mail').hide();

	                } else{
	                  $('#mail').show();
	                }
	                if(pass==true){
	                  $('#pass').hide();
	              }
	              else{
	              $('#pass').show();
	            }
	            if(email==true){

              libraryService.signupService($scope.reg).success(function(data){
               if(data=='OK'){
                $location.path('/login');
               }
               else{

                 $('#emailExist').show();
                 setTimeout(function(){

            $('#emailExist').hide();
            },2000);

               }
              }).error(function(err){
                alert(err);
              })
                }
                else{

          $('#confirm').show();
          setTimeout(function(){
            $('#confirm').hide();
          },2000);

                   $location.path('/signup');
                }
      }
      	$scope.emailCheck=function(){

              libraryService.myMailService($scope.reg.EMAIL).success(function(data){
                alert(data);
                  mailResponse=data;
                     if(data==true){

                      $('#check').hide();

                     }
                    else{
                      $('#check').show();
                    }
                    }).error(function(err){
                      alert('err'+err);
                    })

         }



})
