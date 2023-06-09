function power(a,b){
    var raisedTo= Math.pow(a,b)
    document.write("<br>" +a+" raised to the power" +b+ " is :"+raisedTo+"<br>")
}

document.write("<br>POWER: <br>")
var num= prompt("Enter number")
var po= prompt("its power: ")
a= parseInt(num)
b= parseInt(po)
power(a,b)

document.write("<br>AREA: <br>")
function s(a,b,c){
    var  S = ( a + b + c ) / 2
    return S
}
function areaa(S ,a,b,c){
    var area = S*(S - a)*(S - b)*(S - c)
    document.write("<br>Area of Triangle is" +area+ "<br>")
}
var a= prompt("Enter sides of triangle a :  ")
a= parseInt(a)
var b= prompt("Enter sides of triangle b :  ")
b= parseInt(b)
var c= prompt("Enter sides of triangle c :  ")
c= parseInt(c)

var S=s(a,b,c)
areaa(S,a,b,c)

document.write("<br>AVERAGE AND PERCENTAGE: <br>")
var aa= prompt("Enter first subject marks: ")
aa= parseInt(aa)
var bb= prompt("Enter second subject marks: ")
bb= parseInt(bb)
var cc= prompt("Enter third subject marks: ")
cc= parseInt(cc)

function averagee(aa,bb,cc){
    var avg= (aa+ bb+ cc)/3
    return avg
}
function percentagee(aa,bb,cc){
    var per= ((aa+ bb+ cc)/300) *100
    return per
}
function mainn(aa,bb,cc){
    var average= averagee(aa,bb,cc)
    var percentage= percentagee(aa,bb,cc)
    document.write("<br>Average of these subject is is" +average+ "<br>")
    document.write("<br>Percentage is" +percentage+ "%<br>")
}
mainn(aa,bb,cc)

document.write("<br>REMOVE VOWEL: <br>")
var string= prompt("Enter String")
string=string.toLowerCase()
function remVow(string){
    for(let i =0 ; i<= 25; i++){
      if (string[i]== "a" || string[i]== "e" || string[i]== "i" || string[i]== "o" || string[i]== "u" ){
         string= string.replace(string[i], "")
        }
    document.write("<br>String without Vowel: " +string+ "<br>")
}
}


document.write("<br> DISTANCE BETWEEN TWO CITIES: <br>")
var dis= prompt("Enter distance between two cities in km : ")
dis=parseInt(dis)
function inMeters(dis){
    var meter= dis * 1000
    document.write("<br> Given distance in meters: "+ meter+" m .<br>")
}
function inFeet(dis){
    var feet= dis * 3281
    document.write("<br> Given distance in feets: "+ feet+"ft .<br>")
}
function inInches(dis){
    var inch= dis * 39370
    document.write("<br> Given distance in inches: "+ inch+"inch.<br>")
}
function inCentimeter(dis){
    var centi= dis * 100000
    document.write("<br> Given distance in centimeters: "+ centi+"cm.<br>")
}

inMeters(dis)
inFeet(dis)
inInches(dis)
inCentimeter(dis)


document.write("<br>OVER TIME PAY: <br>")
var hours= prompt("hours worked: ")
hours=parseInt(hours)
var overtime= hours-40
var paid= overtime* 12
document.write("<br>OverTime pay: Rs. " +paid+ "<br>")
