app.controller('addeventController', function ($scope, $http) {
    
    //Get list of users
    $scope.getAllusers = function(){
        
         $http.get('http://localhost:51047/api/user/getUsers')
            .then(function successCallback(response) {
             console.log(response);   
             $scope.rows = response.data;
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    //test function
    $scope.testfun = function(){
        
        console.log($scope.selectedUserID);
    }
    
    
    
    
    

    $scope.registerEvent = function () {

        var EventObj = {
            ename: $scope.ename,
            edescription: $scope.edes,
            scheduledOn: $scope.edate,
            userID: $scope.selectedUserID
        };
        
        

        
            var condit = confirm("Upload Data?");
            if (condit == true) {
                $http.post('http://localhost:51047/api/event/PostEventTable', EventObj)
                    .then(function successCallback() {
                        alert("Success");
                    }, function errorCallback() {
                        alert("Failure");
                    });

            } else
                alert("Upload Canceled");
        
    }

});