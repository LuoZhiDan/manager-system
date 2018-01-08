/**
 * 模态框
 */
export default ['$rootScope', '$compile', '$controller', function($rootScope, $compile, $controller){
    const modal = [];

    const tpl = `<div>
            <div class="modal fade show" tabindex="-1" role="dialog" style="display:block;z-index:{{zIndex}};"
                 ng-include="templateUrl"></div>

            <div class="modal-backdrop fade show" style="z-index:{{zIndex - 1}};"></div>
        </div>`

    /**
     * config 需要传人 controller名及模板路径
     */
    this.openModal = (config)=>{
        let dom, 
            scope;
        scope = $rootScope.$new(true);
        // 注入controller
        $controller(config.controller, {$scope: scope});
        scope.templateUrl = config.templateUrl;
        scope.zIndex = $rootScope.zIndex++;

        dom = $compile(tpl)(scope);
        $('body').append(dom);

        scope.close = ()=>{
            scope.$destroy();
            dom.remove();
        }

        modal.push(scope);
    }


    this.closeModal = ()=>{
        let md = modal.pop();

        if(md){
            md.close();
        }
    }
        
}]