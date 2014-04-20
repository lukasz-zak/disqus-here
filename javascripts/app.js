'use strict';

angular.module('demo', ['disqusHere'])
  .controller('mainCtrl', function ($scope) {

    $scope.disqus = {};

    $scope.disqus.name = 'disqushere'

    $scope.name = $scope.disqus.name;
    $scope.url = 'http://lukasz-zak.github.io/disqus-here/';
    $scope.title = 'Disqus here advanced example!';
    $scope.id = '2014';
    $scope.showComments = false;

    $scope.toggleComments = function () {
      $scope.showComments = !$scope.showComments;
    };

    $scope.onLoad = function () {
      alert('Disqus loaded!\n(alert from callback)');
    };
  });