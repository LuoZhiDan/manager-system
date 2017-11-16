export default [
    '$scope', 'loginService', '$state', 'cookieService', 'enumService',
    function ($scope, loginService, $state, cookieService, enumService) {

        $scope.model = {
            user: {
                name: '',
                pwd: ''
            },
            disabled: () => {
                return ($scope.model.user.name === '' || $scope.model.user.pwd === '');
            },
            errorInfo: ''
        }


        $scope.action = {
            login: function () {
                var promise = loginService.login($scope.model.user);

                promise.then((sdata) => {
                    let data = sdata.data;
                    if (data.token) {
                        cookieService.setToken(data.token);
                        $state.go('home');
                    }
                }, function (sdata) {
                    $scope.model.user.pwd = "";
                    $scope.model.errorInfo = enumService.get(sdata.status);
                })
            }
        }

        $scope.$watch('model.user.pwd', function (newValue, oldValue, scope) {
            if (oldValue === "" && newValue !== "") {
                $scope.model.errorInfo = "";
            }
        });
    }
]