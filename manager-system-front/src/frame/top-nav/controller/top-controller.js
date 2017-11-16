export default ['$scope', 'cookieService', '$state', 
    function($scope, cookieService, $state){
    
        $scope.topNavURL = 'frame/top-nav/view/top-view.html';

        $scope.model = {
            isOpen : false
        }
        
        $scope.action = {
            openMenu : ()=>{
                $scope.model.isOpen = !$scope.model.isOpen;
            },
            loginOut : ()=>{
                cookieService.loginOut();
                $state.transitionTo('login');
            }
        }
}];