import updatePwdController from './update-pwd-controller';

export default ['$scope', 'cookieService', '$state', 'userService', 'modalService',
    function ($scope, cookieService, $state, userService, modalService) {

        $scope.topNavURL = 'frame/top-nav/view/top-view.html';

        $scope.model = {
            isOpen: false,
            userName: userService.getUserName(),

            menus: {
                active: 'home',
                menuItems: [{
                    name: '首页',
                    sref: 'home'
                }]
            }
        }

        $scope.action = {
            toggleMenu: () => {
                $scope.model.isOpen = !$scope.model.isOpen;
            },
            closeMenu: () => {
                $scope.model.isOpen = false;
            },
            loginOut: () => {
                cookieService.loginOut();
                $state.transitionTo('login');
            },
            updatePwd: () => {
                $scope.action.closeMenu();
                modalService.openModal({
                    modalController: updatePwdController,
                    url: 'frame/top-nav/view/update-pwd-view.html'
                });
            }
        }
    }
];