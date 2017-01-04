
d = new Date(); 





window.onload = function(){

  run();
}

function run(){
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2017
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2017
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2017 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2017 ...
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
document.getElementById("calendar-date").innerHTML="";
    document.getElementById("calendar-date").appendChild(calendar);
}

function getNumberOfDays(){
var n = d.getDate();
if(n < 15) return 35;
if(n > 14) return 20;
}
function getPreviousNumberOfDays(){
var n = d.getDate();
if(n < 15) return 20;
if(n > 14) return 35;
}

function nextMonth(){
var days = getNumberOfDays();
 d.setDate(d.getDate()+days);
run();
}

function previousMonth(){
var days = getPreviousNumberOfDays();
 d.setDate(d.getDate()-days);
run();
}


function get_calendar(day_no, days){
    var table = document.createElement('table');
table.style.border="1px solid beige";
    var tr = document.createElement('tr');
    
tr.style.color="khaki";
//row for the day letters
   
        var td = document.createElement('td');
        td.innerHTML = "Su";
    tr.appendChild(td);
  var td = document.createElement('td');
 td.innerHTML = "Mo";
    tr.appendChild(td);
var td = document.createElement('td');
 td.innerHTML = "Tu";
    tr.appendChild(td);
  var td = document.createElement('td');
 td.innerHTML = "We";
    tr.appendChild(td);var td = document.createElement('td');
 td.innerHTML = "Th";
    tr.appendChild(td);var td = document.createElement('td');
 td.innerHTML = "Fr";
    tr.appendChild(td);var td = document.createElement('td');
 td.innerHTML = "Sa";
    tr.appendChild(td);  


    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');


    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	return table;
}


