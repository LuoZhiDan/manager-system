import frameworkModule from '../../index';
import '../service/top-service';

frameworkModule.controller('updatePwdController', 
    ['$scope', 'modalService', 'topService', 'cookieService',function ($scope, modalService, topService, cookieService) {
        $scope.model = {
            pwdCfg: {
                pwd: '',
                newPwd: '',
                confPwd: ''
            },
            errorCfg: {
                pwdError: false,
                newPwdError: false,
                confPwdError: false
            }

        }

        $scope.action = {
            change : function(){
                $scope.model.errorCfg.pwdError = false;
            },
            verfiyNewPwd : function(){
                let newPwd = $scope.model.pwdCfg.newPwd;

                if(newPwd.length >= 6 && newPwd.length <= 12){
                    $scope.model.errorCfg.newPwdError = false;
                } else {
                    $scope.model.errorCfg.newPwdError = true;
                }
            },
            verfiyConfPwd : function(){
                let newPwd = $scope.model.pwdCfg.newPwd,
                    confPwd = $scope.model.pwdCfg.confPwd;

                if(newPwd !== confPwd){
                    $scope.model.errorCfg.confPwdError = true;
                } else {
                    $scope.model.errorCfg.confPwdError = false;
                }
            },
            ok: function(){
                var error = $scope.model.errorCfg;
                if(error.pwdError || error.newPwdError || error.confPwdError){
                    return ;
                }

                var promise = topService.updatePwd($scope.model.pwdCfg);

                promise.then((response)=>{
                    if(response.data.status === 200){
                        $scope.action.cancel();
                        cookieService.logout();
                    } else {
                        $scope.model.errorCfg.pwdError = true;
                    }
                });
                
            },
            cancel: () => {
                modalService.closeModal();
            }
        }
}]);

export default frameworkModule;