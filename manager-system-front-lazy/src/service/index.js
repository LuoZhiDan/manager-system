/**
 * 公共服务模块
 */

import angular from 'angular';

import enumService from './enum-service';
import cookieService from './cookie-service';
import maskService from './mask-service';
import modalService from './modal-service';
import userService from './user-service';
import httpService from './http-service';
import lazyService from './lazy-service';


const serviceModule = angular.module('manager.system.service', []);

serviceModule.service('enumService', enumService);
serviceModule.service('cookieService', cookieService);
serviceModule.service('maskService', maskService);
serviceModule.service('modalService', modalService);
serviceModule.service('userService', userService);
serviceModule.service('httpService', httpService);
serviceModule.service('lazyService', lazyService);




export default serviceModule;