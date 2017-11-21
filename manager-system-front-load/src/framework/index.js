/**
 * 框架模块
 */

const router = require('./framework-router');
const frameModule = angular.module('manager.system.framework', []);

frameModule.config(['$stateProvider', function ($stateProvider) {
    angular.forEach(router, function (item) {
        $stateProvider.state(item);
    });
}]);

module.exports = frameModule;