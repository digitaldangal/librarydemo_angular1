var myApp=angular.module('myapp',['ui.router','reg','login','addBook','issueBook','returnBook','findBook','service']);

 myApp.config( function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
          $stateProvider.
            state('home', {
              url:'/home',
               templateUrl: 'home.html'
            }).
            state('login', {
              url:'/login',
               templateUrl: 'login.html'
            }).

            state('signup', {
              url:'/signup',
               templateUrl: 'registration.html'

            }).
             state('newbook', {
              url:'/newbook',
               templateUrl: 'newBook.html'

            }).
             state('issuebook',{
              url:'/issuebook',
              templateUrl:'bookIssue.html'
             }).
             state('returnbook',{
              url:'/returnbook',
              templateUrl:'bookReturn.html'
             }).
            state('find',{
              url:'/find',
              templateUrl:'findBook.html'
            })

         });
