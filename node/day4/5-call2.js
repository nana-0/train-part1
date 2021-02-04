//call apply bind 的区别
var obj = {
    name:"nana",
    age:18,
    myfun:function(fm,t){
        console.log(this.name+" 年龄"+this.age+" 从 "+fm+" 到 "+t);
    }
}
obj.myfun("成都","上海");

var db={
    name:"nana",
    age:20
}
obj.myfun.call(db,"成都","上海");
obj.myfun.apply(db,["成都","上海"]);
obj.myfun.bind(db,"成都","上海")();
//输出结果相同但写法不同