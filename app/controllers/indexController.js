app.controller('indexController', function($scope, $http, $location){
   

    $scope.loginCheck = function (){
        if(($scope.email=="abc@abc.com") && ($scope.password=="abc"))
           $location.path("/adminDashboard");
        else
            alert("Wrong");
    }
    
    
});
    
