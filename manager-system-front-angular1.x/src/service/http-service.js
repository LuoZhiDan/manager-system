export default ['$http', function($http){
    this.post = function(data){
        return $http.post(data.url, data);
    }
}];