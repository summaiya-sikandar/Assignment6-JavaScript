function currentTime(){
    var rightNow = new Date();
    document.write(rightNow,"<br>")
}
currentTime();

function fullName(fname,lname){
    document.write("<br>Your full name is"+ fname+" "+ lname+".<br>")

}
var fname=prompt("First name: ")
var lname=prompt("last name: ")
fullName(fname , lname)

function add(n1,n2){
    sum= n1+n2
    document.write("<br>Sum of "+ n1+" and "+ n2+"is "+ sum +" .<br>")
}
var num1=prompt("num1")
var num2=prompt("num2")
num1= parseInt(num1)
num2=parseInt(num2)
add(num1 , num2)
document.write("<br>CALCULATOR<br>")
function sub(n1,n2){
    subtraction= n1-n2
    document.write("<br>Subraction of "+ n1+" and "+ n2+"is "+ subraction +" .<br>")
}
function mul(n1,n2){
    mull= n1*n2
    document.write("<br>Multiplication of "+ n1+" and "+ n2+"is "+ mull+" .<br>")
}
function div(n1,n2){
    divide= n1/n2
    document.write("<br>Divison of "+ n1+" by "+ n2+"is "+ divide +" .<br>")
}
var operator= prompt("Enter sign of operation you want to perform")
if (operator == "-" || operator == "+" || operator == "/" || operator == "*"){
    var n1=prompt("Enter first operand")
    var n2=prompt("Enter second operand")
    n1= parseInt(n1)
    n2=parseInt(n2)
    if (operator == "+"){ 
        add(n1 , n2)
    }
    if (operator == "-"){
        sub(n1 , n2)
    }
    if (operator == "/"){
        div(n1 , n2)
    }
    if (operator == "*"){
        mul(n1 , n2)
    }
}
else {
    document.write("<br>Oh No! Your entered wrong operator.. <br>")
}
document.write("<br>SQUARE FUNCTION: <br>")
function square(num){
    sq= num ** 2
    document.write("<br>Square  of "+ num+" is :  "+ sq +" .<br>")
}
var num=prompt("Enter number for square: ")
num= parseInt(num)
square(num)

function factorial(num){
    fac = 1
    if (num == 0){
        document.write("<br>Factorial of "+ num+" is : 1 <br>")
    }
    else{
    for (i= 1; i <=num ; i++){
        fac = fac* i
    }
}
    document.write("<br>Factoral of "+ num+" is :  "+ fac +" .<br>")
}

document.write("<br>FACTORIAL FUNCTION: <br>")
var num=prompt("Enter number for factorial: ")
num= parseInt(num)
factorial(num)


function counting(n1,n2){
    document.write("<br>Counting from "+ n1+" to "+ n2+": <br>")
    for(n1; n1<=n2; n1++){
    document.write(n1+"<br>")
    }}

var num1=prompt("Counting starts from:  ")
num1= parseInt(num1)
var num2=prompt("To:  ")
num2= parseInt(num2)
counting(num1,num2)

document.write("<br>PYTHAGORUS THEOREM: <br>")
function hyp(perp, base){
    hypo = ((perp * perp) + (base *base))^(1/2)
    document.write("<br>Hypotenus of given right trinagle is: "+ hypo +" .<br>")
}
var perp=prompt("Perpendicular")
var base=prompt("Base")
perp= parseInt(perp)
base=parseInt(base)
hyp(perp,base)

document.write("<br>AREA OF RECTANGLE: <br>")
function area(width , height){
    area = height * width
    document.write("<br>Area of the given rectangle is "+ area +" .<br>")
}
var width=prompt("Width of rectangle")
var height=prompt("Height of recntagle")
width= parseInt(width)
height=parseInt(height)
document.write("<br>Argument as variablee :")
hyp(width, height)

document.write("<br>Argument as value :")
hyp(4 , 8)

function longestWord(String){
    
}
var str = prompt("Enter some text");
var arrayynew=[]
var arrayy= str.split(" ")

for (let i = 0; i<= arrayy.length; i+=1) {
        var word= arrayy[i]
        var letter= word.slice(0, 1)
        var first=letter.toUpperCase()
        var other= word.slice(1);
        var others=other.toLowerCase()
        word=first + others
        arrayynew.push(word)

}
document.write(arrayynew[0]+ "<br>" + arrayynew[1])
var countt=0;
function count(string, letter){
    for(i=0; i< string.length ; i++){
        if (letter == string[i]){
            countt+=1
        }
    }
    document.write("<br>The letter ' "+ letter+ " ' occur "+ countt+" times in the string "+string+" .<br>")
}
var strrr=prompt("Enter string ")
var letter=prompt("Enter letter")

count(strrr, letter)

function calcCircumference(radius){
    var circumference= 2* 3.14* radius
    document.write("<br>The circumference is: "+ circumference +" .<br>")
}
function calcArea(radius){
    var areaa=3.14* radius* radius
    document.write("<br>The Area is: "+ areaa +" .<br>")
}
var r=prompt("Enter radius of circle to find out its properties: ")
r= parseFloat(r)

calcCircumference(r)
calcArea(r)