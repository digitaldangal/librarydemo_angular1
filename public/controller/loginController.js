var myApp=angular.module('login',[]);
myApp.controller('loginController',function($scope,$http,$location,libraryService){
  $scope.log={};

  $scope.login=function(){
libraryService.loginService($scope.log).success(function(data,status){
	alert(status);
	$location.path('/home');
}).error(function(err){
	alert('err'+err);
})
  }
})
