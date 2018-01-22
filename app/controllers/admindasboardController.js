app.controller('admindashboardController', function($scope, $http, $location){
    
    $scope.startFun = function (){
        alert("WORKING");
    }
    
    $scope.gotToAddUser = function(){
        console.log("Clicked");
        $location.path('/addUser');
    }
    
    $scope.gotToAddEvent = function(){
        console.log("Clicked");
        $location.path('/addEvent');
    }
    
    
    //Get all events
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvent')
            .then(function successCallback(response) {
             console.log("Success");   
             $scope.rows = response.data;
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    
});