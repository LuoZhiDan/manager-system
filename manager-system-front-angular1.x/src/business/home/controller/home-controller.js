/**
 * 首页模块的controller
 */
import businessModule from '../../index';
import '../service/home-service';

const homeController = ['$scope',
    function ($scope) {
        $scope.name = 'luozhidan';
    }
]

businessModule.controller('homeController', homeController);

export default businessModule;