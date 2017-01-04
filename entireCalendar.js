document.getElementById("entireCalendar").style.visibility="hidden"; 

function entireYear(){
document.getElementById("calendar-year").innerHTML = d.getFullYear();
}

entireYear();

function nextYear(){

d.setFullYear(d.getFullYear()+1);

 document.getElementById("calendar-year").innerHTML = d.getFullYear();
}

function previousYear(){

d.setFullYear(d.getFullYear()-1);

  document.getElementById("calendar-year").innerHTML = d.getFullYear();
}

function displayEntireCalendarDiv(){
document.getElementById("calendar").style.visibility="hidden";
document.getElementById("entireCalendar").style.visibility="visible";
}

function displayCalendar(m){

console.log("Hey");
d.setDate(1);
d.setMonth(m);
run();
document.getElementById("calendar").style.visibility="visible";
document.getElementById("entireCalendar").style.visibility="hidden";

 console.log(d);


}
