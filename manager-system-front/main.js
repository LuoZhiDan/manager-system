/* 

*/


import $ from 'jquery';
import angular from 'angular';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-router'

import routerConfig from './src/router-config';
import './src/business/login/index'

angular.module('manager.system.demo', ['ui.router'])
    .config(['$stateProvider', function($stateProvider){
        angular.forEach(routerConfig, function(item){
            $stateProvider.state(item);
        })
    }])
    .controller('mainController', ['$scope', '$http', '$state',  ($scope, $http, $state)=>{
        $state.go('login')
        
    }])


angular.bootstrap($('html'), ['manager.system.demo'])