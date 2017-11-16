/* 
    name: 'login',
    url: '/login',
    controller: '',
    templateUrl: './business/login/views/login-component.html',
    resolve: { // 渲染之前提前想要加载的

    }
*/


export default [{
    name: 'login',
    url: '/login',
    controller: 'loginCtrl',
    templateUrl: 'business/login/view/login-view.html',
    resolve: {

    }
},{
    name: 'home',
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: 'business/home/view/home-view.html'
}];