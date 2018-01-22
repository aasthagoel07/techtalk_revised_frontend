app.controller('adduserController', function ($scope, $http) {

    $scope.registerUser = function () {
        var userObj = {
            username: $scope.username,
            password: $scope.password,
            cgicode: $scope.cgicode,
            designation: $scope.designation,
            isAdmin: false
        };
        $http.post('http://localhost:51047/api/user/postUser', userObj)
            .then(function successCallback() {
                alert("Success");
            }, function errorCallback() {
                alert("Failure");
            });
    }

});