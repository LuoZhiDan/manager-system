export default ['$scope', 'cookieService', '$state', 
    function($scope, cookieService, $state){
    
        $scope.topNavURL = 'frame/top-nav/view/top-view.html';
        
        $scope.action = {
            loginOut : ()=>{
                cookieService.loginOut();
                $state.transitionTo('login');
            }
        }
}];