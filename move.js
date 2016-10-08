$(function(){
	radomCloudLabel();
});
function radomCloudLabel(){
	var obj = $('#div1 a');
	function rand(num){
		return parseInt(Math.random() * num + 1);
	}
	// console.log(rand(50))
	function randomcolor(){
		//16277215 rgb(255,255,255);
		var str = Math.ceil(Math.random()*16777215).toString(16);

		if(str.length<6){
			str="0"+str;
		}
		return str;
	}
	// var randomcolor = Math.ceil(Math.random()*16777215).toString(16);
	// console.log(randomcolor)

	for (len=obj.length,i=len;i--;){
		obj[i].style.left=rand(200)+'px';
		obj[i].style.top=rand(400)+'px';
		obj[i].className='color'+rand(5);
		obj[i].style.zIndex=rand(5);
		obj[i].style.fontSize=rand(40)+12+'px';
		obj[i].style.color="#"+randomcolor();
	}
}