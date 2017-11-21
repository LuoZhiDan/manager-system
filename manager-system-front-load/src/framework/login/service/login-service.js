const loginService = ['$http', 
    function($http){
        this.login  = function(data){
            return $http.get('/rest/user/login', {
                params : data
            });
        }
}];

 const frameModule = angular.module('manager.system.framework');
     frameModule.service('loginService', loginService);
