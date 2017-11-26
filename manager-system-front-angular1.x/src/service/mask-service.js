/* 
    遮罩层服务

 */
export default ['$rootScope', '$compile', function($rootScope, $compile){
    const tpl = `<div class="mask" style="position:absolute;z-index:1000000;width:100%; top:0;height:100%;
                    display:flex;align-items:center;background-color:rgba(0, 0, 0, 0.15);user-select:none;">
                    <div style="background-color:#fff;padding:20px;z-index:2000; 
                        margin:0 auto; border-radius:5px; box-shadow:1px 1px 20px;color:#666;">
                        <img ng-src="/common/img/icon-loading.svg" width="30px" style="margin-right:20px;">加载中...
                    </div>
                </div>`;
    /**
     * 显示忙等框
     * @method showWaitBox
     * @param {String} ID
     */
    this.showWaitBox = function(ID){
        const scope = $rootScope.$new(true);
        const maskDom = $compile(tpl)(scope);

        if(angular.isUndefined(ID)){
            ID = 'body';
        }
        this.hideWaitBox(ID);
        $(ID).append(maskDom);
    }


    /**
     * 隐藏忙等框
     * @method showWaitBox
     * @param {String} ID
     */
    this.hideWaitBox = function(ID){
        if(angular.isUndefined(ID)){
            ID = 'body';
        }
        $(ID + '>.mask').remove();
    }

}]