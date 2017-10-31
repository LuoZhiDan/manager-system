/* 

*/


import $ from 'jquery';
import angular from 'angular';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


angular.module('manager.system.demo', [])
    .controller('mainController', ['$scope', '$http', ($scope, $http)=>{
        'use strict'

        $scope.user = {
            name : '',
            pwd : ''
        }

        $scope.login = ()=>{
            console.log('登录了')
        }

        $scope.register = ()=>{
            console.log($scope.user);
            $http.post('/rest/user', $scope.user)
                .success((data)=>{
                    console.log(data)
                    if(data.status != 200){
                        alert('用户注册失败')
                    }
            })
        }
    }])


angular.bootstrap($('html'), ['manager.system.demo'])