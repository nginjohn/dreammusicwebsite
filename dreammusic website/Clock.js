/*Syntax To Clock*/

var clockID = null;
var timerRunning = false;

function showtime() 
{		
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var timeValue = "" + ((hours >12) ? hours -12 :hours)
	if (timeValue == "0") timeValue = 12;
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
	timeValue += (hours >= 12) ? " PM" : " AM";
	var clock = document.getElementById("myClock");
	clock.value = timeValue;
	clockID = setTimeout("showtime()",1000);
}

function startclock() 
{
	timerRunning = true;
	showtime();
}

function stopclock()
{
	if (timerRunning) clearTimeout(timerID);
	timerRunning = false;
}



/*Syntax To Timer */

var second = 0;
var mili = 0;
var timerID = null;

function TimerTick()
{
	if (mili >= 9)
	{
		mili = 0;
		second += 1;
	}
	else
	{
		mili += 1;
	}

	var MyTimerCount = document.getElementById("myTimer");
	MyTimerCount.value = second + '.' + mili;
}

function starttimer()
{
	timerID = setInterval(TimerTick, 100, null);
}

function stoptimer()
{
	if(timerID!=null) clearInterval(timerID);
}