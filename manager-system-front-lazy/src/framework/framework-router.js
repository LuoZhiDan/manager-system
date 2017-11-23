/**
 * 框架模块架构路由器
 */

export default [{
    name: 'login',
    url: '/login',
    controller: 'loginController',
    templateUrl: 'framework/login/view/login-view.html',
    resolve: {
        lazy : ['$q', '$ocLazyLoad', ($q, $ocLazyLoad)=>{
            let defer = $q.defer();
            require.ensure([], (require)=>{
                require('./login/service/login-service.js');
                let md = require('./login/controller/login-controller.js');
                $ocLazyLoad.load({
                    name : md.default.name
                });
                defer.resolve();
            }, 'login');
            return defer.promise;
        }]
    }



}];