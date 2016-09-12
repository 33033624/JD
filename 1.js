(function(strPro){
	function trims(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
	strPro.trims=trims;
}(String.prototype));

var a = ' nihao ';
 a = a.trim();



var a= 1,b=0;
console.log(a&&b);
console.log('1'+2+3);
function fnc(x){
	return function(y){
		return x+y
	}
}
var foo = fnc(10);
console.log(foo(5));
console.log(foo(100));


var a = 1;
function test(){
	a=3;
	return function a(){};
}
test();
console.log(a);



var x=3;
var foo={
	x:2,
	bar:{
		x:1,
		baz:function(){

			return this.x;
		}

	}

};
var go = foo.bar.baz;
var b =go();
console.log(b);

var c = foo.bar.baz();
console.log(c);


var arr1=[1,2,3,4];
var arr2=[];
for(var i=0;i<arr1.length;i++){
	arr2.push(function(){
		console.log(i);
	})
}
arr2[1]();


(function(aryPro){
	function sort(n){
		var temp = null;
		for(var i=0;i<this.length;i++){
			for(var j=this.length;j>0;j--){
				if(Math.abs(this[j]-n)<Math.abs(this[j-1]-n)){
						temp=this[j];
						this[j]=this[j-1];
						this[j-1]=temp;
				}
			}
		}
	}aryPro.sort=sort;
}(Array.prototype));



var a=[1,2,3,4,5];
 a.sort(3);
console.log(a);


/*
* position属性之间的几种值 和他们之间的区别
 * 常用的就是  relative  absolute  fixed
 * relative 是相对于自己定位 不脱离文档流 并且还占据原来的位置
 * absolute  是相对距离自己最近的存在定位的父元素进行定位
 * fixed  是相对于浏览器进行定位的  定位的都是存在四个之　ｔｏｐ　ｒｉｇｔｈ　ｂｏｔｔｏｍ　ｌｅｆｔ　
*
*
*
* */







