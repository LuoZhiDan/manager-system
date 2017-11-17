

import './common/css/common.css';
import './common/css/home.css';
import angular from "angular";


import routerConfig from './router-config';
import loginCtrl from './login/controller/login-controller';
import loginService from './login/service/login-service';

import homeCtrl from './home/controller/home-controller';
import homeService from './home/service/home-service';

import cookieService from './common/service/cookie-service';
import enumService from './common/service/enum-service';
import userService from './common/service/user-service';





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
businessModule.service('enumService', enumService);
businessModule.service('userService', userService);


/**
 * 登录模块
 */
businessModule.controller('loginCtrl', loginCtrl);
businessModule.service('loginService', loginService);

/**
 * 首页模块
 */
businessModule.controller('homeCtrl', homeCtrl);
businessModule.service('homeService', homeService);

