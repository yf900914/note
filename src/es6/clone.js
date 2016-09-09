var clone=(obj)=>{
    var buf;
    if (obj instanceof Array){
        buf=[];
        for(var i=0;i<obj.length;i++){
            buf[i]=clone(obj[i]);
        }
        return buf;
        }
        else if(obj instanceof Object){
             buf={};
        for(k in obj){
            buf[k]=clone(obj[k]);
        }
        return buf;
    }
    else{
        return obj;
    }
}
var arr=["afjjg","ihhu","jfoig"]
clone(arr);