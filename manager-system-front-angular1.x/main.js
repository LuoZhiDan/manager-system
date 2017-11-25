/**
 * 主文件,应用入口
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lazy from 'oclazyload';

import frameModule from './src/framework/index';
import directiveModule from './src/directive/index';
import serviceModule from './src/service/index';
import businessModule from './src/business/index';

// 加载css
import './node_modules/bootstrap/dist/css/bootstrap.css';
import './src/common/css/common.css';

let devs = [
    uiRouter,
    lazy,
    frameModule.name,
    directiveModule.name,
    serviceModule.name,
    businessModule.name
]

const mainModule = angular.module('manager.system', devs);
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

angular.bootstrap($('html'), ['manager.system'])