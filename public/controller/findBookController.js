var myApp=angular.module('findBook',[]);
myApp.controller('findBookController',function($scope,$http,$location,libraryService){
  $scope.findBook={};
  		$scope.findMyBook=function(){
  				libraryService.findBookService($scope.findBook).success(function(data,status){

  					$('#response').show();

  					$scope.data=data;

  				}).error(function(err){
  					alert('err'+err);
  				})

  		}



})
