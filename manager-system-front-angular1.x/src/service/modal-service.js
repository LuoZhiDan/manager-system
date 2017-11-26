/**
 * 模态框
 */
export default ['$rootScope', '$compile', function($rootScope, $compile){
    const modal = [];

    const tpl = `<div ng-controller="modalController">
            <div class="modal fade show" tabindex="-1" role="dialog" style="display:block;z-index:{{zIndex}};"
                 ng-include="url"></div>

            <div class="modal-backdrop fade show" style="z-index:{{zIndex - 1}};"></div>
        </div>`

    /**
     * config 需要传人 controller名及模板路径
     */
    this.openModal = (config)=>{
        let dom, 
            scope;
        
        scope = $rootScope.$new(true);
        anglar.extend(scope, config);
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