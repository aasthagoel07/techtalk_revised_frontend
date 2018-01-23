app.controller('removeeventController', function($scope, $http, $rootScope){
    
    $scope.childMethod = function(){
                $rootScope.$emit("CallgetAPI", {});
        }
    
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             console.log("Success");   
             $scope.rows = response.data;
             
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
   
    $scope.deleteEvent = function (eventID) {
        var idPara = $.param({
            id: eventID
        });
        console.log(idPara);
        $http.delete('http://localhost:51047/api/event/DeleteEventTable?' + idPara)
            .then(function successCallback(response) {
                $scope.getAllEvents();
                console.log("deleted");
            }, function errorCallback(){
            alert("Error Occured!");
        }
                 );
            
        };
    
    
});