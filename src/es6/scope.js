{
  let a = 10;
  var b = 1;
}

//a // ReferenceError: a is not defined.
b // 1
console.log(b);

var func=()=>{
    console.log("hello world!!!");
}
func();
var a=1;
a.a=2;
console.log(a.a);