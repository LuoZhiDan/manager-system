
export default ['$scope', 'modalService', function($scope, modalService){
    $scope.name = 'ss';

    $scope.action = {
        cancel : ()=>{
            modalService.closeModal();
        }
    }
}]