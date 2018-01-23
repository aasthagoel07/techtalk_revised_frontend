app.controller('eventdetailsController', function ($scope, $http, $routeParams) {
    
    $scope.id = $routeParams.id;
    console.log


            $scope.eventDetails = function () {

                $http.get('http://localhost:51047/api/event/GetAllEventsbyID/'+ $scope.id)
                    .then(function successCallback(response) {
                        console.log("Success");
                        $scope.res = response.data;
                        console.log($scope.res);
                    }, function errorCallback(response) {
                        console.log("Unable to perform get request");
                    });

            }

        });