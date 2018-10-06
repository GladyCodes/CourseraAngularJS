(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.itemList = ""; //list of food items
    $scope.statusOfDiet = "";

    $scope.checkIfTooMuch = function() {
      var items = $scope.itemList.split(',');
      var count = 0;
      for(var index = 0; index < items.length; index++){
        if(items[index].trim().length !=0){
          count ++;
        }
      }

      if(count == 0){
        $scope.statusOfDiet = "Please enter data first";
      }
      else if(count < 4){
        $scope.statusOfDiet = "Enjoy!";
      }
      else{
        $scope.statusOfDiet = "Too much!";
      }
      return;
    };
  };
})();
