require('../service/login-service');


const loginController =  ['$scope', 'loginService', '$state', 'cookieService', 'enumService', 'userService',
        function ($scope, loginService, $state, cookieService, enumService, userService) {
            /**
             * 登录模型
             */
            $scope.model = {
                user: {
                    name: '',
                    pwd: ''
                },
                disabled: () => {
                    return ($scope.model.user.name === '' || $scope.model.user.pwd === '');
                },
                errorInfo: '',
                errorState: false
            }

            /**
             * 登录行为
             */
            $scope.action = {
                login: function () {
                    var promise = loginService.login($scope.model.user);

                    promise.then((sdata) => {
                        let data = sdata.data;
                        if (data.token) {
                            cookieService.setToken(data.token);
                            userService.setUserName($scope.model.user.name);
                            $state.go('home');
                        }
                    }, function (sdata) {
                        $scope.model.user.pwd = "";
                        $scope.model.errorInfo = enumService.get(sdata.status);
                        $scope.model.errorState = true;
                    })
                }
            }

            $scope.$watch('model.user.pwd', function (newValue, oldValue, scope) {
                if (oldValue === "" && newValue !== "") {
                    $scope.model.errorInfo = "";
                    $scope.model.errorState = false;
                }
            });
        }
    ]

const frameModule = angular.module('manager.system.framework');
    frameModule.controller('loginController', loginController)