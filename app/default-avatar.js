/*
 * ng-default-avatar - AngularJS directive to set a default avatar with initials if user has not avatar image
 * Author: Aitor Rodríguez - http://www.frontendfactory.es/
 * Version: 0.1
 * License: MIT
 */

angular.module('ngDefaultAvatar', []).directive('defaultAvatar', [
    function() {
        'use strict';

        return {
            restrict: 'AE',
            scope: {
                name: '=',
                surname: '=',
                image: '='
            },
            template: '<div class="default-avatar" ng-switch="hasImage"><div ng-switch-when="false">{{ initials.toUpperCase() }}</div><img ng-switch-when="true" ng-src="{{image}}"></div>',
            link: function(scope, element, attr) {

                scope.initials = '';
                scope.hasImage = false;

                if(scope.image !== undefined) {
                    scope.hasImage = true;
                } else {
                    if(scope.name.length) {
                        scope.initials = scope.name.charAt(0);
                    }
                    if(scope.surname.length) {
                        scope.initials += scope.surname.charAt(0);
                    }
                }
            }
        };
    }
]);
