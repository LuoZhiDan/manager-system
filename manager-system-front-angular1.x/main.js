/**
 * 主文件,应用入口
 */

import frameModule from './src/framework/index';
import directiveModule from './src/directive/index';
import serviceModule from './src/service/index';
import businessModule from './src/business/index';

// 加载css
import './node_modules/bootstrap/dist/css/bootstrap.css';
import './src/common/css/common.css';
import './src/common/css/home.css';

let devs = [
    'ui.router',
    'oc.lazyLoad',
    frameModule.name,
    directiveModule.name,
    serviceModule.name,
    businessModule.name
]

const mainModule = angular.module('manager.system', devs);
mainModule.run(['$rootScope', '$state', 'cookieService', 'maskService',
        function ($rootScope, $state, cookieService, maskService) {

            $rootScope.zIndex = 1000;

            // 监听路由切换开始事件
            $rootScope.$on('$stateChangeStart', (evt, toState, roParams, fromState, fromParams) => {
                if (!cookieService.getToken()) {
                    if(toState.name !== 'login'){
                        $state.transitionTo('login');
                        evt.preventDefault();
                    }
                } else if (toState.name == 'login') {
                    $state.transitionTo('home');
                    evt.preventDefault();
                } else {
                    maskService.showWaitBox();
                }
            });

            $rootScope.$on('$stateChangeSuccess', (evt, toState, roParams, fromState, fromParams) => {
                maskService.hideWaitBox();
            });

            $rootScope.$on('$stateChangeError', (evt, toState, roParams, fromState, fromParams) => {
                maskService.hideWaitBox();
            });
        }
    ])
    .controller('mainController', ['$scope', '$http', '$state', 'cookieService',
        ($scope, $http, $state, cookieService) => {
            $scope.isLoginPage = true;
            $scope.isBusinessPage = false;

            // 标记当前是登录页面还是业务页面
            if (!cookieService.getToken()) {
                $state.transitionTo('login');
            } else {
                $state.transitionTo('home');
                $scope.isLoginPage = false;
                $scope.isBusinessPage = true;
            }

            $scope.$watch(() => {
                return $state.includes('login');
            }, (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    $scope.isLoginPage = newVal;
                    $scope.isBusinessPage = !newVal;
                }
            });
        }
    ])

angular.bootstrap($('html'), ['manager.system'])