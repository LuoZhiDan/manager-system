export default ['$http', 
    function($http){

        this.login  = function(data){
            return $http.get('/rest/user/login', {
                params : data
            });
        }

        
    
}]