/**
 * 业务模块的路由器
 */
export default [{
    name: 'home',
    url: '/home',
    controller: 'homeController',
    templateUrl: 'business/home/view/home-view.html',
    resolve : {
        lazy : ['$ocLazyLoad', ($ocLazyLoad)=>{
            return import('./home/controller/home-controller').then((md)=>{
                $ocLazyLoad.load({
                    name : md.default.name
                });
            });
        }]
    }
    
}];