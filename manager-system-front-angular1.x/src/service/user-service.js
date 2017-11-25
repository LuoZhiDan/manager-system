export default ['enumService', '$http', function(enumService, $http){
    var user = {};


    this.getUserName = ()=>{
        return user.name || enumService.get('admin');
    }

    this.setUserName = (name)=>{
        user.name = name;
    }

    this.getUserInfo = ()=>{

    }
    
}]