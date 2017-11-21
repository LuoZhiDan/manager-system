/**
 * 
 * 框架模块路由器
 */

const routers =  [{
    name: 'login',
    url: '/login',
    controller: 'loginController',
    templateUrl: 'framework/login/view/login-view.html',
    resolve : {
        loginCtrl : function(){
            const module = require.ensure([], function(){
                require('./login/controller/login-controller');
            });

            return module;
        }
    }
}];

module.exports = routers;