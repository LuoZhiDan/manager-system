/* 

*/


import $ from 'jquery';
import angular from 'angular';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-router';
import './src/business/index';

import footerController from './src/frame/footer/controller/footer-controller';
import topController from './src/frame/top-nav/controller/top-controller';

const mainModule = angular.module('manager.system.demo', ['ui.router', 'manager.system.business']);

    // 注入top-controller
    mainModule.controller('topController', topController);

    // 注入footer-controller
    mainModule.controller('footerController', footerController);
    

    mainModule.run(['$rootScope', '$state', 'cookieService', function ($rootScope, $state, cookieService) {
        $rootScope.$on('$stateChangeStart',
            function (evt, toState, roParams, fromState, fromParams) {
                if (!cookieService.getToken() && toState.name != 'login') {
                    $state.transitionTo('login');
                    evt.preventDefault();
                } else if (cookieService.getToken() && toState.name == 'login') {
                    $state.transitionTo('home');
                    evt.preventDefault();
                }
            });

        $rootScope.zIndex = 1000;
    }])
    .controller('mainController', ['$scope', '$http', '$state', 'cookieService',
        ($scope, $http, $state, cookieService) => {
            // 标记当前是登录页面还是业务页面
            $scope.isLoginPage = true;
            $scope.isBusinessPage = false;

            if (!cookieService.getToken()) {
                $state.transitionTo('login');
            } else {
                $state.transitionTo('home');
            }

            $scope.$watch(function () {
                return $state.includes('login');
            }, function (newValue, oldValue) {
                $scope.isLoginPage = newValue;
                $scope.isBusinessPage = !newValue;
            })
        }
    ])

angular.bootstrap($('html'), ['manager.system.demo'])