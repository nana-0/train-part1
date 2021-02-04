//封装 
function Demo(){
    var c = 567;
    this.a = 1;
    this.bb = function(){
        console.log("hello");
    }
    this.get = function(){
        return c;
    }
}
//private 只能在类内部被访问 public 类内部 类外部 继承子类 protect 只能在继承类中被访问

var demo = new Demo();
console.log(demo.get());