export default [
    '$scope', 'loginService', '$state', 'cookieService',
    function ($scope, loginService, $state, cookieService) {

        $scope.loginfn = function () {
            var promise = loginService.login({
                name: 'luozhidan',
                pwd: '123344'
            });

            promise.then((sdata) => {
                if (sdata.status == 200) {
                    let data = sdata.data;

                    if (data.token) {
                        cookieService.setToken(data.token);
                        $state.go('home');
                    }
                }
            })
        }
    }
]