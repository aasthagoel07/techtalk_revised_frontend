app.controller('updateeventController', function($scope, $http){
   
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             console.log("Success");   
             $scope.rows = response.data;
             
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    $scope.updateEvent = function(){
        console.log($scope.fileurl);
    }
    
    
    
   
    
    
    
});