angular.module('openweather-app.controllers', ['openweather-app.services'])

.controller('HomeCtrl', function($scope) {
    $scope.forcastDisabled = true
})

.controller('DetailCtrl', function($scope, $stateParams, Weather) {
    $scope.weather = Weather.get({weatherName: $stateParams.weatherName});
      
    $scope.getIconUrl = function(iconId) {
      return 'http://openweathermap.org/img/w/' + iconId + '.png';
    };
});
