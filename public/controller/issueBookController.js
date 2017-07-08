var myApp=angular.module('issueBook',[]);
myApp.controller('issueBookController',function($scope,$http,$location,libraryService){
  $scope.issueNewBook={};

  $scope.issueMyBook=function(){
libraryService.issueBookService($scope.issueNewBook).success(function(data,status){
	alert(status);
}).error(function(err){
	alert('err'+err);
})
  }
})
