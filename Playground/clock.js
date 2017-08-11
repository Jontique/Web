//alert("Script loaded");

function addZero(x) { 
	return x < 10 ? "0"+String(x) : String(x); //x is less than 10? yes-> "0"+ x turned into a zero
	// no -> x as it is. x is the number from 
}
function clockDisplay(hours, mins, secs) {
	var dat = new Date();
	var hours = addZero(dat.getHours());
	var mins = addZero(dat.getMinutes());
	var secs = addZero(dat.getSeconds());
	document.getElementById("headrClock").innerHTML = hours+":"+mins+":"+secs;
}

setInterval(clockDisplay, 1000);

function clockAlert(hours, mins, secs) {
	var dat = new Date();
	var hours = addZero(dat.getHours());
	var mins = addZero(dat.getMinutes());
	var secs = addZero(dat.getSeconds());
	alert(hours+":"+mins+":"+secs);
}