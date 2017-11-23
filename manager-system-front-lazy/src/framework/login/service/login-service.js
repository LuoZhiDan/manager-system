import frameworkModule from '../../index';

frameworkModule.service('loginService',['$http', 
    function($http){

        this.login  = function(data){
            return $http.get('/rest/user/login', {
                params : data
            });
        }
    
}]);

export default frameworkModule;