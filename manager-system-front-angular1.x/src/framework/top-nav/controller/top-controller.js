export default ['$scope', 'cookieService', '$state', 'userService', 'modalService', '$q', '$ocLazyLoad',
    function ($scope, cookieService, $state, userService, modalService, $q, $ocLazyLoad) {

        $scope.topNavURL = 'framework/top-nav/view/top-view.html';
        
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
            logout: () => {
                cookieService.logout();
            },
            updatePwd: () => {
                $scope.action.closeMenu();
                const deferred = $q.defer();
                import('../controller/update-pwd-controller').then((md)=>{
                    $ocLazyLoad.load({
                        name : md.default.name
                    });
                    deferred.resolve();
                });

                deferred.promise.then(()=>{
                    modalService.openModal({
                        controller: 'updatePwdController',
                        templateUrl: 'framework/top-nav/view/update-pwd-view.html'
                    });
                });
            }
        }
    }
];