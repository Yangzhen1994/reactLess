let arr= [1,2,3,4,56];
//找到第一个元素就不继续向下执行
console.log(arr.find((value,index,arr)=>{
    return value > 1
}));
// 数组循环
// arr.keys() 数组下标 数组
// arr.entries() 数组下标和值 数组
let list = arr.entries()
/*for (let [index,item] of list ){
    console.log(`${index}:${item}`)
}*/
//arr.entries() 用于手动循环
console.log(list.next().value) //打印出 [0,1] 此时下标已经从0到1
console.log('--------------')
console.log(list.next().value) //打印出 [1,2] 此时下标已经从1到2
console.log('@@@@@@@@@@@@@@')
//es6 的默认值
function add(a,b=1) {
    //'use strict' //es6中严禁模式 可以放在函数体中 此处与默认值的结构冲突
    return a+b
}
console.log(add(1))//2

//获得需要传递的参数个数（值得是必须传递的个数 没有默认值的参数）
console.log(add.length)

/* 对象的函数解构 */
let json = {
    a:'jspang',
    b:'技术破昂'
}
function fun({a,b='jspang'}){
    console.log(a,b);
}
fun(json);
//数组结构
let arr1 = ['a','b','c',,false]
function fun1(a,b,c){
    console.log(a,b,c);
}
fun1(...arr1);


// in的用法
// 1、判断对象是否包含指定的key
let obj = {
    a:'aa',
    b:'bb'
}
console.log('a' in obj) // true
console.log('c' in obj) // false
//2 、 判断['a','b','c',,false]数组中指定 下标 是否是空值
console.log(0 in arr1) // true
console.log(3 in arr1) // false
console.log(4 in arr1) // true
// 数值的几种便利方法 forEach map filter for..of
console.log(arr1.length)
arr1.forEach((item, index)=>{ //forEach 空值不会找到空值
    console.log('foreach:'+item+index)
})
console.log('foreach:'+arr1)

arr1.filter((item, index)=>{ //filter 空值不会找到空值
    console.log('filter:'+item+index)
})
console.log('filter:'+arr1)


arr1.some((item, index)=>{ //some 空值不会找到空值
    console.log('some:'+item+index)
})
console.log('some:'+arr1)

let webArr1 = arr1.map((item, index)=>{ //map 空值不会找到空值 不会打印出空值亦不会进行替换操作等
    console.log('map:'+item+index)
    return 'web'
})
console.log('map:'+arr1)
console.log('webArr1:'+webArr1)
//数组转换为字符传
console.log(arr1.toString())
console.log(arr1.join('-'))
//Set
let setArr = new Set(['jspang','技术胖','skill','jspang'])
setArr.add('skill_')
// has 查找
console.log(setArr.has('skill')) // true
//delete 删除
setArr.delete('技术胖')//删除某一个
//setArr.clear() //删除全部
console.log(setArr)
// set 循环 for。。of   forEach
//size
console.log(setArr.size)
//weakSet 里面可以放对象
let weakObj = new WeakSet(); //需要 add添加 不可以直接赋值
let obj1 = {a:'1',b:'a'}
weakObj.add(obj1)
console.log(weakObj)

//Map

let map = new Map()
map.set(json,'iam')
console.log(map)
map.set('jspang',json)
console.log(map)
//取值
console.log(map.get('jspang'))
//delete
map.delete(json)
console.log(map)
console.log(map.size)
console.log(map.has('jspang'))
console.log(map.has(json))