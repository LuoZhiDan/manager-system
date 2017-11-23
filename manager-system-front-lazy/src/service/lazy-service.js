/**
 * 懒加载服务
 */

import angular from 'angular';

/* export default ['$q', '$ocLazyLoad', function($q, $ocLazyLoad){
    this.load = function(files){
        let defer = $q.defer();
        require.ensure([], (require)=>{
            let md;
            angular.forEach(files, (url)=>{
                md = require(url);
                connsole.log(md, url)
            });
            
            $ocLazyLoad.load({
                name : md.default.name
            });
            defer.resolve();
        });

        return defer.promise;
    }
}] */

export default function(){
    this.load = function($q, $ocLazyLoad, files){
        let defer = $q.defer();
        require.ensure([], (require)=>{
            let md;
            angular.forEach(files, (url)=>{
                // md = require(url);
                connsole.log(md, url)
            });
            
            $ocLazyLoad.load({
                name : md.default.name
            });
            defer.resolve();
        });

        return defer.promise;
    }
}