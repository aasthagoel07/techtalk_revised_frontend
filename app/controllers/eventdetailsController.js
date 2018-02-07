app.controller('eventdetailsController', function ($scope, $http, $routeParams) {
    var eid="";
    
    var pid="";
    var uid="";
    $scope.btn="true";
    var date=new Date();
    date=moment(date).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
    var eventdate="";
    $scope.dis=false;

    $scope.eventDetails = function () {
        $scope.id = $routeParams.id;

        $http.get('http://localhost:51047/api/event/GetAllEventsbyID/'+ $scope.id)
        .then(function successCallback(response) {
            console.log("Success");
            $scope.res = response.data;
            console.log($scope.res);
            console.log(date);
            console.log(response.data[0].eventid);
            eid=response.data[0].eventid;
            eventdate=response.data[0].edate;
            pid=response.data[0].userid;
            $scope.puser();
            console.log(eventdate);
            $scope.btn=moment(date).isAfter(eventdate);
            
        }, function errorCallback(response) {
        console.log("Unable to perform get request");
    });
        // $http.get('http://localhost:51047/api/user/getUsersById/' + pid)
        //     .then(function successCallback(response){
        //         console.log(response.data);
        //         $scope.presenter=response.data;
        //     },function errorCallback(response){
        //         console.log("Error coming...");
        //     });

    };

    $scope.puser=function(){
            $http.get('http://localhost:51047/api/user/getUsersById/'+pid)
            .then(function successCallback(response){
                console.log(response.data);
                $scope.presenter=response.data;
            },function errorCallback(response){
                console.log("Error coming...");
            });

    };

    // $scope.ispass=function(){

    //     $scope.btn=moment(eventdate).isAfter(date);
    //         //     if (eventdate>date) {

    //         //        $scope.btn="false";
    //         //    }
    //         //    else
    //         //     $scope.btn="true";            
    //          }

    $scope.userInterested=function(){
        $scope.dis=true;
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
                $scope.in()

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
            console.log(uid);
            

         
     }
     $scope.in=function(){
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


