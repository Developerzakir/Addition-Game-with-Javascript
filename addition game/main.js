var num1;
var num2;

num1= Math.floor((Math.random() * 10) +1 );
num2= Math.floor((Math.random() * 10) +1 );

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

var ans = num1 + num2;


var checkans = document.querySelector('input[type=text]');
var value =checkans.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function(){

	value = checkans.value;

	if (value == ans) {
		alert('you are correct');

	} else{
		alert('you are incorrect, the answer was ' + ans);
	}

	document.querySelector('input[type=text]').value = '';
	document.getElementById('num1').innerHTML = '';
	document.getElementById('num2').innerHTML = '';
	num1 = Math.floor((Math.random() * 10) + 1);
	num2 = Math.floor((Math.random() * 10) + 1);

	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;

	ans = num1 + num2





};