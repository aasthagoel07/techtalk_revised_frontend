app.controller('admindashboardController', function($scope, $http, $location){
    
    $scope.startFun = function (){
        alert("WORKING");
    }
    
    $scope.gotToAddUser = function(){
        console.log("Clicked");
        $location.path('/addUser');
    }
    
});