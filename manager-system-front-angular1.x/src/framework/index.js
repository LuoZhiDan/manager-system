/**
 * 框架模块(登录/顶部菜单/左侧菜单/底部展示)
 */

import router from './framework-router';
import topController from './top-nav/controller/top-controller';
import footerController from './footer/controller/footer-controller';

const frameworkModule = angular.module('manager.system.framework', []);

frameworkModule.config(['$stateProvider', ($stateProvider)=>{
    angular.forEach(router, (item)=>{
        $stateProvider.state(item);
    })
}]);

frameworkModule.controller('topController', topController);
frameworkModule.controller('footerController', footerController);

export default frameworkModule;