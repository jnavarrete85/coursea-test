(function(){
  'use strict';

  angular.module('LunchList', [])
      .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope){
    $scope.lunchlist = '';
    $scope.responses = ["Enjoy!.", "Too much!", "Please enter data first"];
    $scope.response = '';


    $scope.countItems = function(){
      let arr = $scope.lunchlist.split(',');
      if($scope.lunchlist.length === 0){
        $scope.response = $scope.responses[2];
      } else if (arr.length >= 1 && arr.length <= 3){
        $scope.response = $scope.responses[0];
      } else if(arr.length > 3){
        $scope.response = $scope.responses[1];
      }
    }
  }
})();
