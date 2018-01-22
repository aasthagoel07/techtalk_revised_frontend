app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl : "../views/home.html",
        controller : "indexController"
        })
        .when("/userDashboard", {
            templateUrl : "../views/userdashboard.html",
            controller : "userdashboardController"
        })
        .when("/adminDashboard", {
           templateUrl : "../views/admindashboard.html",
            controller : "admindashboardController"
        })
        .when("/addUser", {
           templateUrl : "../views/addUser.html",
            controller : "adduserController"
        })
        .when("/addEvent", {
           templateUrl : "../views/addEvent.html",
            controller : "addeventController"
        });
});