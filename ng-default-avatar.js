/*
 * ng-default-avatar - AngularJS directive to set a default avatar with initials if user has not avatar image
 * Author: Aitor Rodríguez - http://www.frontendfactory.es/
 * Version: 0.2
 * License: MIT
 */

'use strict';

angular
	.module('ngDefaultAvatar', [])
  .controller('defaultAvatarController', ['$scope'], function(scope) {})
	.directive('defaultAvatar', [
		function() {
			return {
				restrict: 'AE',
        replace: true,
				scope: {
					name: '@name',
					surname: '@?surname',
					image: '=?image'
				},
				template: '<div class="default-avatar" ng-switch="hasImage"><div ng-switch-when="false">{{ initials.toUpperCase() }}</div><img ng-switch-when="true" ng-src="{{image}}"></div>',
				link: function(scope, element, attr) {
					// Initialize the default values
					scope.name = (scope.name !== undefined) ? scope.name : 'No';

					scope.hasImage = false;
					scope.initials = '';

					if (scope.image !== undefined) {
						scope.hasImage = true;
					} else {
						if (scope.name !== undefined && scope.name !== null && scope.name.length) {
							scope.initials = scope.name.charAt(0);
						}

						if (scope.surname !== undefined && scope.surname !== null && scope.surname.length) {
							scope.initials += scope.surname.charAt(0);
						}
					}
				}
			};
		}
	]);
