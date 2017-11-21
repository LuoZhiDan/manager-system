/**
 *  业务路由器: 存放页面路由信息
 */

const routers =  [{
    name: 'home',
    url: '/home',
    controller: 'homeController',
    templateUrl: 'business/home/view/home-view.html'
    //resolve
}];

module.exports = routers;