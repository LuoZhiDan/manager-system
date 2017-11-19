

import './common/css/common.css';
import './common/css/home.css';
import angular from "angular";


import routerConfig from './router-config';
import loginCtrl from './login/controller/login-controller';
import loginService from './login/service/login-service';

import topController from '../frame/top-nav/controller/top-controller';

import homeCtrl from './home/controller/home-controller';
import homeService from './home/service/home-service';

import cookieService from './common/service/cookie-service';
import enumService from './common/service/enum-service';
import userService from './common/service/user-service';
import maskService from './common/service/mask-service';
import modalService from './common/service/modal-service';




const businessModule = angular.module('manager.system.business', []);

businessModule.config(['$stateProvider', function($stateProvider){
    angular.forEach(routerConfig, function(item){
        $stateProvider.state(item);
    })
}]);


/**
 * 注入公共服务
 */
businessModule.service('cookieService', cookieService);
businessModule.service('enumService', enumService);
businessModule.service('userService', userService);
businessModule.service('maskService', maskService);
businessModule.service('modalService', modalService);





/**
 * 登录模块
 */
businessModule.controller('loginCtrl', loginCtrl);
businessModule.service('loginService', loginService);


/**
 * 顶部菜单模块
 */
businessModule.controller('topController', topController);


/**
 * 首页模块
 */
businessModule.controller('homeCtrl', homeCtrl);
businessModule.service('homeService', homeService);

