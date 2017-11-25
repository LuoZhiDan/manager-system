/**
 * 业务模块
 */

import angular from "angular";
import router from './business-router';

const businessModule = angular.module('manager.system.business', []);

businessModule.config(['$stateProvider', function($stateProvider){
    angular.forEach(router, (item)=>{
        $stateProvider.state(item);
    });
}]);

export default businessModule;

