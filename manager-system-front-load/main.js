
/**
 * 管理系统入口主文件
 */

const $ = require('jquery');
const angular = require('angular');
require('angular-ui-router');

const serviceModule = require('./src/service/index');
const frameModule = require('./src/framework/index');
const businessModule = require('./src/business/index');


require('./node_modules/bootstrap/dist/css/bootstrap.css');


const mainModule = angular.module('manager.system', ['ui.router', serviceModule.name, 
    frameModule.name, businessModule.name]);

    mainModule.run(['$rootScope', '$state', 'cookieService', function ($rootScope, $state, cookieService) {
        $rootScope.zIndex = 1000;


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