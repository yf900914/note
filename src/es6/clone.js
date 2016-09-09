var clone=(obj)=>{
    var buf;
    if (obj instanceof Array){
        buf=[];
        for(var i=0;i<obj.length;i++){
            buf[i]=clone(obj[i]);
        }
        console.log(buf);
        }
        else if(obj instanceof Object){
             buf={};
        for(var k in obj){
            buf[k]=clone(obj[k]);
        }
        console.log(buf);
    }
    else{
        buf=obj;
        console.log(buf);
    }
}
var arr=["afjjg","ihhu","jfoig"];
clone(arr);