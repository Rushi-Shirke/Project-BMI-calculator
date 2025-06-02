function bmi()
{
	var h=document.getElementById("height").value;
	var h1=document.getElementById("height1").value;
	var w=document.getElementById("weight").value;

	var w1=w*2.2;
	var h2=h*12+h1*1;
	var bmi=(w1/(h2*h2))*703;
	var total=bmi.toFixed(2);

	
	document.getElementById("result").innerHTML="Your BMI is "+total

	if(total<16)
	{
		document.getElementById("result1").innerHTML="you are severly under-weight";
		document.getElementById("result1").style.color="blue";
	}
	else if(total>16 && total<18.4)
	{
		document.getElementById("result1").innerHTML="you are under-weight";
		document.getElementById("result1").style.color="DodgerBlue";
	}
	else if(total>18.5 && total<24.9)
	{
		document.getElementById("result1").innerHTML="you are normal";
		document.getElementById("result1").style.color="#00fb00";
	}
	else if(total>25 && total<29.9)
	{
		document.getElementById("result1").innerHTML="you are obese";
		document.getElementById("result1").style.color="orange";
	}
	else if(total>30 && total<39.9)
	{
		document.getElementById("result1").innerHTML="you are severly obese";
		document.getElementById("result1").style.color="red";
	}
	else
	{
		document.getElementById("result1").innerHTML="you are morbidly obese";
		document.getElementById("result1").style.color="#a10000";
	}
}
let a=new Date();
console.log(a);
console.log(a.getTime());
console.log(a.getHours());
console.log(a.getMinutes());
