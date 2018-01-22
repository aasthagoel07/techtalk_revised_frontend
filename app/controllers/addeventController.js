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

        var fileInput = document.getElementById("filePPT");
        //presentationURL: fileInput

        var EventObj = {
            ename: $scope.ename,
            edescription: $scope.edes,
            scheduledOn: $scope.edate,
            userID: $scope.selectedUserID
        };
        
        

        if (fileInput.files.length == 0) {
            var condit = confirm("Upload Data without a presentation?");
            if (condit == true) {
                $http.post('http://localhost:51047/api/event/PostEventTable', EventObj)
                    .then(function successCallback() {
                        alert("Success");
                    }, function errorCallback() {
                        alert("Failure");
                    });

            } else
                alert("Upload Canceled");
        } else {
            $http.post('http://localhost:51047/api/event/PostEventTable', EventObj)
                .then(function successCallback() {
                    alert("Success");
                }, function errorCallback() {
                    alert("Failure");
                });
            var file = fileInput.files[0];
            var payload = new FormData();
            payload.append("file", file);
            //Uploading file data
            $http.post('', payload,{
                transformRequest : angular.identity,
                headers : {"Content-Type": undefined}
            }).then(function(data){
                
            }, function(error){
                
            });

        }

    }

});