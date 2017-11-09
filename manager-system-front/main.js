/* 

*/


import $ from 'jquery';
import angular from 'angular';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-router'
import './src/business/index'

angular.module('manager.system.demo', ['ui.router', 'manager.system.business'])
    .controller('mainController', ['$scope', '$http', '$state', 'cookieService',
     ($scope, $http, $state, cookieService)=>{
        if(!cookieService.getToken()){
            $state.go('login');
        }
    }])
    .run(['$rootScope', '$state', 'cookieService', function($rootScope, $state, cookieService){
        $rootScope.$on('$stateChangeStart', 
            function(evt, toState, roParams, fromState, fromParams) {
                if(!cookieService.getToken() && toState.name != 'login') {
                    $state.go('login');
                    evt.preventDefault();
                } else if(cookieService.getToken() && toState.name == 'login'){
                    $state.go('home');
                    evt.preventDefault();
                }
            });
    }])

angular.bootstrap($('html'), ['manager.system.demo'])