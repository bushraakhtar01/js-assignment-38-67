// chapter 38 to 42---task 1

// function power(a,b){

//     var res=Math.pow(a,b);
//     console.log(res)
// }
// power(2,3)

// chapter 38 to 42---task 2

// function leapYear(year){
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// var year=+prompt("Enter Year");
// leapYear(year);

// chapter 38 to 42---task 3

// function triangle(S,a,b,c){
//     var area=S*(S-a)*(S-b)*(S-c)
//     document.write("<h1> Area of Triangle : "+area)
// }
// function sides(a,b,c){
// var S = ( a + b + c ) / 2;
// document.write("<h1> S : "+ S)
// return S;
// }

// var a=+prompt("Enter one side");
// var b=+prompt("Enter second side");
// var c=+prompt("Enter third side");
// var s=sides(a,b,c)
// triangle(s,a,b,c)

// chapter 38 to 42---task 4

// function mainFunc(marks1,marks2,marks3){

//     var averageMarks=average(marks1,marks2,marks3)
//     var per=percentage(averageMarks)

//     document.write("<h1> Average Marks: "+averageMarks+"<br>")
//     document.write("<h1> Percentage: "+per+"%"+"<br>")
 
// }
// function percentage(ave){
//     var totalMarks=300;
//     var per=(ave/totalMarks)*100;
//     var finalPer=per.toFixed(2)
//     return finalPer;
// }

// function average(marks1,marks2,marks3){
// var average=(marks1+marks2+marks3)/3;
// var finalAve=average.toFixed(2)
// return finalAve;
// }

// var marks1=+prompt("Enter marks in 1st subject");
// var marks2=+prompt("Enter marks in 2nd subject");
// var marks3=+prompt("Enter marks in 3rd subject");
// mainFunc(marks1,marks2,marks3)

// chapter 38 to 42---task 5

// function indexCal(name,char){
//         document.write("<h1> Name: "+name+"<br>")
//     document.write("<h1> Character: "+char+"<br>")
//     for(var i=0;i<=name.length;i++){
//         if(name[i]===char){
//     document.write("<h1> Index: "+i+"<br>")
            
//         }
//     }
// }
// var name=prompt("Enter your name")
// var char=prompt("Enter letter whose index you want?")
// indexCal(name,char)

// chapter 38 to 42---task 6

// function removeVowels(str){
//     var vowels = "aieuo";
//     var strArr = str.toLowerCase().split("");
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
            
//             return letter;
    
//         }
//     });
//     var string = "";
//     newArr.forEach(function(letter){
//         string += letter;
//     });
//     return string;
// }
// var sen=prompt("Enter string")
// var res=removeVowels(sen);
// document.write("<h1>String : "+sen+"<br>")
// document.write("<h1>String After vowels removed : "+res+"<br>")


// chapter 38 to 42---task 7
// function occ(str) {
   
//     var count = 0;
//     let vowel = false;
//     for (const char of str.toLowerCase()) {
//       switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (vowel) {
//               count++;
//               vowel = false;
//             } else {
//               vowel = true;
//             }
//             break;
//           }
//         default:
//           vowel = false
//       }
//     }
  
//     return count
//   }
//   var str = "Pleases read this application and give me gratuity";
//   var occ=occ(str)
//   document.write(occ)


// chapter 38 to 42---task 8

// function meters(distance){
//     var m=distance*1000;
//     document.write("<h1>Distance in meters: "+m+"<br>")
//     feet(m)

//     function feet(m){
//         var f=m* 3.28084;
    
//         document.write("<h1>Distance in feet: "+f+"<br>")
//         inches(f)

//         function inches(f){
//             var i=f*12;
//             document.write("<h1>Distance in inches: "+i+"<br>")
//             cm(i)

//             function cm(i){
//                 var c=i*2.54
//                 document.write("<h1>Distance in cm: "+c+"<br>")
            
                
//             }
//         }
        
//     }    
// }



// var distance=prompt("Enter distance in km")
// document.write("<h1>Distance in km : "+distance+"<br>")

// meters(distance)

// chapter 38 to 42---task 9

// function pay(workingHours){
//     var over_time;
//     var over_time_pay;


//     if(workingHours>40)
//     {
//         over_time = workingHours - 40;
//         over_time_pay = over_time * 12.00;
//         document.write("<h1>Overtime Pay is "+over_time_pay.toFixed(2))
// }
// else{
//     document.write("<h1>You have to work for more than 40 hours to get over time pay ")

// }
// }
// var workingHours=prompt("Enter Employees working hours")
// pay(workingHours)


// chapter 38 to 42---task 10

// function denominations(amount){
// var h=parseInt(amount/100);
// var f=parseInt((amount % 100) / 50);
// var t=parseInt(((amount % 100) % 50) / 10);
//         document.write("<h1> You have "+h+" hunderd notes "+f+" fifty notes "+t+" ten notes")
// }
// var amount=prompt("Enter amount of withdrawal")
// denominations(amount)

// chapter 43 to 48--task 1
// function greeting(){
//     alert("Hello world")
// }

// chapter 43 to 48--task 2
// function imagealert(){
//     alert("Thanks for purchasing a phone from us")
// }

// chapter 43 to 48--task 3
// function deleteRec(row){
//     var a=document.getElementsByClassName(row)[0]
//     a.remove();
// }

// chapter 43 to 48--task 4

// function imageover(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob1.jpg"
// }

// function imageout(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob2.jpg"
// }

// chapter 43 to 48--task 5
// var count=0;
// function increment(){
// count=count+1;
// var a=document.getElementsByClassName("counter")[0];
// a.innerHTML=count;
// }

// function decrement(){
//     count=count-1;
//     var a=document.getElementsByClassName("counter")[0];
//     a.innerHTML=count;
//     }

// chapter 43 to 48--task 6

// function signup(){
//     var fname=document.getElementsByClassName('formdata')[0].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var fn=document.createTextNode("First name : "+fname+"");
//     node.appendChild(fn)
//     formDisplay.appendChild(node);
  

//     var lname=document.getElementsByClassName('formdata')[1].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")

//     var ln=document.createTextNode("Last name : "+lname);
//     node.appendChild(ln)
//     formDisplay.appendChild(node);

//     var num=document.getElementsByClassName('formdata')[2].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var nu=document.createTextNode("Number : "+num+"");
//     node.appendChild(nu)
//     formDisplay.appendChild(node);
  

//     var email=document.getElementsByClassName('formdata')[3].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")

//     var en=document.createTextNode("Email : "+email);
//     node.appendChild(en)
//     formDisplay.appendChild(node);

//     var password=document.getElementsByClassName('formdata')[4].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var pwd=document.createTextNode("Password : "+password+"");
//     node.appendChild(pwd)
//     formDisplay.appendChild(node);

// }

// chapter 43 to 48--task 6
// function myFunc(){
//     var more=document.getElementById("more");
//     more.style.display='block'
//     var dots=document.getElementById("dots");
//     dots.style.display="none";
// }

// chapter 43 to 48--task 7

// function submit(){
//     var fname=document.getElementsByClassName('formdata')[0].value;
//     var lname=document.getElementsByClassName('formdata')[1].value;
//     var num=document.getElementsByClassName('formdata')[2].value;
//     var email=document.getElementsByClassName('formdata')[3].value;
//     var password=document.getElementsByClassName('formdata')[4].value;

//    var table=document.getElementsByClassName('table')[0]
//     var node=document.createElement("tr")

//     var fn=document.createTextNode(fname);
//     var ln=document.createTextNode(lname);
//     var nu=document.createTextNode(num);
//     var en=document.createTextNode(email);
//     var pwd=document.createTextNode(password);


//     var tnode=document.createElement("td")
//     var a=tnode.appendChild(fn)
//     var row1=node.appendChild(a)
//     table.appendChild(row1)

    
//     var tnode1=document.createElement("td")
//     var b=tnode1.appendChild(ln)
//     var row2=node.appendChild(b)
//     table.appendChild(row2)

//     var tnode2=document.createElement("td")
//     var c=tnode2.appendChild(nu)
//     var row3=node.appendChild(c)
//     table.appendChild(row3)

//     var tnode3=document.createElement("td")
//     var d=tnode3.appendChild(en)
//     var row4=node.appendChild(d)
//     table.appendChild(row4)

//     var tnode4=document.createElement("td")
//     var e=tnode4.appendChild(pwd)
//     var row5 =node.appendChild(e)
//     table.appendChild(row5)

// }


// chapter  58-67---task 1-1
// var id=document.getElementById("main-content");

// chapter  58-67---task 1-2
// var a=document.getElementById("main-content");
// // childs=id.children;
// console.log(a);

// chapter  58-67---task 1-3
// var a=document.getElementsByClassName('render')[0];
// var b=a.innerHTML;
// console.log(b)

