import angular from "angular";


import routerConfig from './router-config';
import loginCtrl from './login/controller/login-controller';
import loginService from './login/service/login-service';

import homeCtrl from './home/controller/home-controller';
import homeService from './home/service/home-service';

import cookieService from './common/service/cookie-service';
import enumService from './common/service/enum-service';




const businessModule = angular.module('manager.system.business', []);

businessModule.config(['$stateProvider', function($stateProvider){
    angular.forEach(routerConfig, function(item){
        $stateProvider.state(item);
    })
}]);


/**
 * 注入公共服务 cookie服务
 */
businessModule.service('cookieService', cookieService);
businessModule.constant('enumService', enumService);


/**
 * 登录模块
 */
businessModule.controller('loginCtrl', loginCtrl);
businessModule.service('loginService', loginService);

/**
 * 首页模块
 */
businessModule.controller('homeCtrl', loginCtrl);
businessModule.service('homeService', homeService);

