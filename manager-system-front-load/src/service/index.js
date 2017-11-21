/**
 * 服务模块
 */

 const cookieService = require('./cookie-service');
 const enumService = require('./enum-service');
 const maskService = require('./mask-service');
 const userService = require('./user-service');


const serviceModule = angular.module('manager.system.service', []);

// 注入cookieService
serviceModule.service('cookieService', cookieService)

// 注入enumService
serviceModule.service('enumService', enumService);

// 注入maskService
serviceModule.service('maskService', maskService);

// 注入userService
serviceModule.service('userService', userService);

module.exports = serviceModule;
