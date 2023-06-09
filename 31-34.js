var rightNow = new Date();
document.write(rightNow,"<br>")


var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July","August", "September", "October", "November"];
var now = new Date();
var theMonth = now.getMonth();
var nameOfTheMonth = monthNames[theMonth];
alert("Current month: " + nameOfTheMonth)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert("Today is " +nameOfToday)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday=="Sun" || nameOfToday=="Sat"){
    document.write("<br> It’s Fun day<br>")
}

var d = new Date();
var dayOfMonth = d.getDate();
if (dayOfMonth < 16){
    document.write("<br>First fifteen days of the month<br>")
}
else{
    document.write("<br>Last days of the month<br>")
}

var today = new Date();
var  laterdate= new Date("December 31, 2020");
document.write("<br>Later date: : "+laterdate+"<br>")


var d = new Date();
var currentHrs = d.getHours();
document.write("<br>Current time: "+d+"<br>")
currentHrs-=1;
d.setHours(currentHrs)
document.write("<br>1 hour ago: "+d+"<br>")

