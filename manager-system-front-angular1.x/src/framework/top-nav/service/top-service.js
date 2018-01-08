import frameworkModule from '../../index';

frameworkModule.service('topService', ['$http', function($http){
     this.updatePwd = function(data){
            return $http.put('/rest/user/updatePwd', data);
     }
}]);