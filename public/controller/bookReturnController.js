var myApp=angular.module('returnBook',[]);
myApp.controller('bookReturnController',function($scope,$http,$location,libraryService){
  $scope.returnBook={};

  $scope.returnMyBook=function(){
libraryService.returnBookService($scope.returnBook).success(function(data,status){
	alert(status);
}).error(function(err){
	alert('err'+err);
})
  }
})
