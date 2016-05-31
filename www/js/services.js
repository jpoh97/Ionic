angular.module('openweather-app.services', ['ngResource'])
.factory('Weather', function ($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:weatherName&units=metric&lang=es&APPID=c4c29d0c4be972ee5a3d7571699d6e92');
});
