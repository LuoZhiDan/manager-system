export default ['$scope', 'cookieService', '$state', 'userService',
    function($scope, cookieService, $state, userService){
    
        $scope.topNavURL = 'frame/top-nav/view/top-view.html';

        $scope.model = {
            isOpen : false,
            userName : userService.getUserName()
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