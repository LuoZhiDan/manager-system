export default [
    '$scope', 'loginService', '$state', 'cookieService', 'enumService',
    function ($scope, loginService, $state, cookieService, enumService) {

        $scope.model = {
            name: '',
            pwd: ''
        }

        $scope.errorInfo = "";

        $scope.action = {
            login: function () {
                var promise = loginService.login($scope.model);

                promise.then((sdata) => {
                    let data = sdata.data;
                    if (data.token) {
                        cookieService.setToken(data.token);
                        $state.go('home');
                    }
                }, function (sdata) {
                    $scope.model.pwd = "";
                    $scope.errorInfo = enumService.get(sdata.status);
                })
            },
            register: function () {
                console.log($scope.model)
            }
        }

        $scope.$watch('model.pwd', function (newValue, oldValue, scope) {
            if(oldValue ==="" && newValue !== ""){
                $scope.errorInfo = "";
            }
        });
    }
]