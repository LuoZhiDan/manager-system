export default ['enumService', function(enumService){
    var user = {};


    this.getUserName = ()=>{
        return user.name || enumService.get('admin');
    }

    this.setUserName = (name)=>{
        user.name = name;
    }
}]