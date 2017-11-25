/**
 * 业务模块的路由器
 */
export default [{
    name: 'home',
    url: '/home',
    controller: 'homeController',
    templateUrl: 'business/home/view/home-view.html',
    resolve : {
        lazy : ['$q', '$ocLazyLoad', ($q, $ocLazyLoad)=>{
            let defer = $q.defer();
            require.ensure([], (require)=>{
                require('./home/service/home-service');
                let md = require('./home/controller/home-controller');
                $ocLazyLoad.load({
                    name : md.default.name
                });
                defer.resolve();
            },'home');

            return defer.promise;
        }]
    }
    
}];