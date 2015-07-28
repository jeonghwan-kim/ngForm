'use strict';

angular.module('myApp', []);

angular.module('myApp')
.controller('MyCtrl', function ($scope) {

	$scope.$watch('myForm.email', function (val) {
		console.log($scope.myForm.email);
	}, true)


	$scope.login = function (isValidForm) {
		if (!isValidForm) return;

		console.log({
			email: $scope.email,
			password: $scope.password
		});
	}

});

angular.module('myApp')
.directive('emailValidate', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, element, attrs, modelCtrl) {
			modelCtrl.$validators.email = function (modelValue) {
				var emailRegexp = /^[a-zA-Z0-9+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
        return emailRegexp.test(modelValue);
			}
		}
	};
});

angular.module('myApp')
.directive('gmailValidate', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, element, attrs, modelCtrl) {
			modelCtrl.$validators.gmail = function (modelValue) {
				var gmailRegexp = /gmail\.com/;
        return gmailRegexp.test(modelValue);
			}
		}
	};
});
