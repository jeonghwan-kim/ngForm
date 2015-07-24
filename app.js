'use strict';

angular.module('ngFormTest', []);

angular.module('ngFormTest').controller('MainCtrl', function ($scope) {

  $scope.text = 'hello';

});


angular.module('ngFormTest').directive('emailValidate', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attrs, modelCtrl) {
      console.log(modelCtrl);

      modelCtrl.$validators.email = function (modelValue) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
        return EMAIL_REGEXP.test(modelValue);
      };

      modelCtrl.$validators.gmail = function (modelValue) {
        var GMAIL_REGEXP = /gmail\.com/;
        return GMAIL_REGEXP.test(modelValue);
      }
    }
  };
});