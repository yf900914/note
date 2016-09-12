var obj={
    name:name,
    fun:function(){
        console.log(this.name);
        function b(){
            console.log(this.name);
        }
        b();
    }
}
obj.fun();