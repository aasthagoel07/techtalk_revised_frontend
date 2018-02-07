app.controller('userdashboardController', ['$scope', '$http', 'uiCalendarConfig', '$location','$mdDialog', function($scope, $http, $rootScope, $location, uiCalendarConfig ,$mdDialog){
    
    //Get all events
    $scope.options = [
    {
      name: 'Interested'
    },
    {
      name: 'Attended'
    },
    {
      name: 'Upcoming'
    }];
    var uid;
    
    $scope.selectedUserIndex = undefined;
    $scope.selectUserIndex = function (index) {
      if ($scope.selectedUserIndex !== index) {
        $scope.selectedUserIndex = index;
      }
      else {
        $scope.selectedUserIndex = undefined;
      }
    };
    
    $scope.pageChange = function(eventid){
        console.log(eventid);
        $location.path("/eventDetails/"+eventid);   
    }
    
    var todaysDate = moment(new Date()).format('YYYY MM DD');
    //calendar calls
    
    $scope.SelectedEvent = null;
    var isFirstTime = true;
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    
    $scope.events = [];
    
    $scope.eventSources = [$scope.events];
    
    //Load events from the server
     $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             $scope.rows = response.data;
                
            console.log($scope.rows[0].ename); 
        angular.forEach($scope.rows, function(value){
           //console.log('title :' + value.ename); 
           //console.log('start :' + value.edate); 
            $scope.events.push({
             
                title : value.ename,
                start : value.edate,
                description : value.edes,
                evid : value.eventid,
                stick: true
            
         })
        })
       }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    
    
    //Configure Calendar
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: false,
            displayEventTime: false,
            header: {
                left: 'month',
                center: 'title',
                right: 'today prev, next'
            },
            eventClick: function(event){
                $scope.SelectedEvent = event;
                $scope.pageChange($scope.SelectedEvent.evid);
                
            },
            eventAfterAllRender: function(){
                
            }
        }
    }
    
    $scope.gotToAddUser = function(){
        console.log("Clicked");
        $location.path('/addUser');
    }
    
    $scope.gotToAddEvent = function(){
        console.log("Clicked");
        $location.path('/addEvent');
    }
    
    $scope.gotToRemoveEvent = function(){
        console.log("Clicked");
        $location.path('/removeEvent');
    }
    
    $scope.gotToUpdateEvent = function(){
        console.log("Clicked");
        $location.path('/updateEvent');
    }
    
    $scope.gotToaddpptEvent = function(){
        console.log("Clicked");
        $location.path('/uploadppt');
    }


    $scope.calling=function(){
        $http.get('http://localhost:51047/api/event/geteventname?uid='+uid)
            .then(function successCallback(successResponse){

                $scope.ievents=successResponse.data.$values;
                 console.log($scope.ievents);
            },function errorCallback(response){
                console.log("Unable to perform get request");
            });
    }
    $scope.calling2=function(){
        $http.get('http://localhost:51047/api/event/geteventnamep?uid='+uid)
            .then(function successCallback(successfullResponse){
                $scope.aevents=successfullResponse.data.$values;
            },function errorCallback(response){
                console.log("Unable to perform get request");
            });
    }
    $scope.calling3=function(){
        $http.get('http://localhost:51047/api/event/getpresentedevent?uid='+uid)
            .then(function successCallback(successfullResponse){
                $scope.pevents=successfullResponse.data.$values;
            },function errorCallback(response){
                console.log("Unable to perform get request");
            });
    }
     $scope.interest=function(){
        var data=JSON.parse(localStorage.getItem('key'));
               var user={
                username:data.username,
                password:data.password
            };
            $http.post('http://localhost:51047/api/event/getusername', user)
            .then(function successCallback(response) {
                console.log(response);
                uid=response.data;
                $scope.calling();
                $scope.calling2();
                $scope.calling3();
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
            
           
    }

}]);