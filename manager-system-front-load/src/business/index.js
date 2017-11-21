/**
 * 业务模块: 管理业务逻辑代码
 */

const router = require('./business-router');

const businessModule = angular.module('manager.system.business', []);

businessModule.config(['$stateProvider', function ($stateProvider) {
    angular.forEach(router, function (item) {
        $stateProvider.state(item);
    })
}]);

module.exports = businessModule;

