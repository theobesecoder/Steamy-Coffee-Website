var countdown = new Date("Jan 30,2019 23:59:59").getTime();

var updatefunction = setInterval(function() {
	
	var current = new Date().getTime();
	
	var difference = countdown - current;
	
	var d = Math.floor(difference/(1000*60*60*24));
	var h = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
	var m = Math.floor((difference%(1000*60*60))/(1000*60));
	var s = Math.floor((difference%(1000*60))/1000);
	
	document.getElementById("timer").innerHTML = d +"d "+ h +"h "+ m + "m " +s+ "s ";
	
	if(difference<0){
		clearInterval(countdown);
		document.getElementById("timer").innerHTML="SALE OVER";
	}
},1000);