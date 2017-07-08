var myApp=angular.module('addBook',['service']);
myApp.controller('addBookController',function($scope,$http,$location,libraryService){
  $scope.addNewBook={};

  $scope.addBook=function(){

libraryService.addBookService($scope.addNewBook).success(function(data,status){
	alert(status);
}).error(function(err){
	alert('err'+err);
})
  }
})
