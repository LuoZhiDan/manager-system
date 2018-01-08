export default ['enumService', '$state', function(enumService, $state){

    this.get = function(name){
        let cookies = document.cookie.split('; '),
            item;

        while(item = cookies.pop()){
            let cookie  = item.split('=');
            if(cookie[0] == name){
                return unescape(cookie[1]);
            }
        }

        return null;
    };


    this.put = function(name, value){
        this.remove(name);
        // 任何子页面创建的cookie其他页面都能访问
        let values = [name, '=', escape(value), ';path=/'];

        document.cookie = values.join('');
    }

    this.remove = function(name){
        var exp = new Date(),
            cval = this.get(name);
        
        exp.setTime(exp.getTime() - 1);
        if(cval != null){
            document.cookie = name + "="+ cval +";expires="+exp.toGMTString();
        }
    }

    this.getToken = ()=>{
        return this.get(enumService.get('token'));
    }

    this.setToken = (value)=>{
        this.put(enumService.get('token'), value);
    }

    this.logout = ()=>{
        this.remove(enumService.get('token'));
        $state.transitionTo('login');
    }
}];