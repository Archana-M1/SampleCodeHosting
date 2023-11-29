/* comments in java script */
/* 1. single line comment //
    2.multiline comment  /*
    
*/

// var age=20;
// console.log(age);


/* variable in java script 
basically there are 4 variables in js
automatically
var  --> flexible , supports for both reinitialize and re-declaration (1995-2015)-->older version of browser supports for this keyword
const -->cannot be changed --> block scoped --> cant redeclared and reassigned 
let --> can be changed --> block scope --> we cannot redeclared --> we can assign the let variable 

*/
/* var x=10;
alert(x);
console.log(x);
var x=20;
window.alert(x);

let y=10;
window.alert(y);
 y=0;
window.alert(y);
 */
/* const z=50;
 
window.alert(z);
 */
/*
java script variable 

each java script variables are unique  names we can call them as identifier 

rules for identifiers
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ .
Names are case sensitive (a and A are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

operators --> assignment

*/

/* var name1="archana";
console.log(name1)


//Objects in java script 
const person={name:"harsh " , age:"" , eyeColor:"blue"}
 */
//looping and printing statement in java script
/* var x=0;
x++;
x++;
for(var i=0;i<5;i++)
{
    x++;
    console.log(x);
    document.writeln(x);
    window.alert(x);

} */

//for in loop

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
//   console.log(x)
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let j = 0;
// let text = "";

// for (;cars[j];j++) {
//   text += cars[j];
  
//   console.log(text);
// }

// const m = function (a, b) {return a * b};
// console.log(m);





/* BOM concepts 
Browser
object 
model

used to interact with browser
window.alert ("hello") same as alert("hello");

window -> is default property of browser-->its object of browser not a java script
1.document 
2.history --> used to load any previous or forward history or any perticular history to see window.history(),forward(),go(2)--> hyper links 
3. screen -->window.screen --> screen.width,screen.height,availWidth,availHeight,colorDepth,pixelDepth
4.navigator-->navigator.appName,appVersion,appCodeName,cookieEnabled,userAgent,
5.location 



methods of window object 
alert 
confirm 
prompt
open
close
setTimeout()
*/

/* alert("hi Archana");
confirm("Are You Ok?");
let res=prompt("Are You Happy ?");
print(res);
alert(res);
 */

/* Dom Properties -->represents whole HTML documnet 
Document 
object
property 

methods of documnet elemnet
write("")
writeln("0)
getElementById()
getElementsByName()	

there are different types of methods to get the values
such as 
getElementById
getElementByName
getElementsByTagName
getElementsByClassName

*/



/* java script cookies 
its a amount of information that share between server side and client side
request creates automatically 
syntax to create a cookies in java script
documnet.cookie="name=value;"

in cookies mainly we have 4 paraments(attributes) such as
expires --> declares the active period of cookie
max-age
path
domain
*/
