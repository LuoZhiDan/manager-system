export default [
    '$scope', 'loginService', '$state', 'cookieService', 
    function($scope, loginService, $state, cookieService){

        $scope.model = {
            name : '',
            pwd : ''
        }

        $scope.action = {
            login : function(){
                var promise = loginService.login($scope.model);

                promise.then((sdata)=>{
                    if(sdata.status == 200){
                        let data = sdata.data;

                        if(data.token){
                            cookieService.setToken(data.token);
                            $state.go('home');
                        }
                    }
                })
            },
            register : function(){
                console.log($scope.model)
            }
        }
    }
]