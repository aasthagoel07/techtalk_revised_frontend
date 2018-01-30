app.controller('eventdetailsController', function ($scope, $http, $routeParams) {
    var eid="";
    
   var uid="";
 var isdisabled="false";
 //var date=new date();

            $scope.eventDetails = function () {
                $scope.id = $routeParams.id;

                $http.get('http://localhost:51047/api/event/GetAllEventsbyID/'+ $scope.id)
                    .then(function successCallback(response) {
                        console.log("Success");
                        $scope.res = response.data;
                        console.log(response.data[0].eventid);
                        eid=response.data[0].eventid;
                        console.log($scope.res);
                    }, function errorCallback(response) {
                        console.log("Unable to perform get request");
                    });

            }

            $scope.userInterested=function(){
               // $scope.id = $routeParams.id;
            var data=JSON.parse(localStorage.getItem('key'));
            var user={
                
                username:data.username,
                password:data.password
            };
            

            $http.post('http://localhost:51047/api/event/getusername', user)
             .then(function successCallback(response) {
                        console.log(response);
                        uid=response.data;

                         }, function errorCallback(response) {
                        console.log("Unable to perform get request");
                    });
            console.log(uid);
            var x ={
                     eventID : eid,
                    userID : uid
                    }
           
              console.log(eid);
               console.log(uid);
               $http.post('http://localhost:51047/api/event/PostEventUser',x)
                    .then(function successCallback() {
                        alert("Success");
                    }, function errorCallback() {
                        alert("Failure");
                    });
            }

        });


