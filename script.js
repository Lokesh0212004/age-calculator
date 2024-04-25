
var year = document.getElementById('Years')
var months = document.getElementById('Months')
var days = document.getElementById('Days')
var btn = document.getElementById('icon');

var dErr = document.getElementById('day_err')
var mErr = document.getElementById('month_err')
var yErr = document.getElementById('year_err')

var noDays=[31,28,31,30,31,30,31,30,31,30,31,30,31]
var noMonths=[0,0,0,12,11,10,9,8,7,6,5,4,3]


btn.addEventListener("click", event => {

        dErr.innerHTML = ""
        yErr.innerHTML = ""
        mErr.innerHTML = ""

        document.getElementById('year').style.border="1px solid  rgba(208, 205, 205, 0.377)"
        document.getElementById('month').style.border="1px solid  rgba(208, 205, 205, 0.377)"
        document.getElementById('day').style.border="1px solid  rgba(208, 205, 205, 0.377)"
    
    calc();


});
function calc() {
    var date = new Date();

    var yearin = document.getElementById('year').value
    var monthsin = document.getElementById('month').value
    var daysin = document.getElementById('day').value


    var year1 = date.getFullYear() - yearin;
    var month1 = date.getMonth() + 1 - monthsin;
    var date1 = date.getDate() - daysin;



    if (yearin == "" | monthsin == "" | daysin == "") {


        dErr.innerHTML = "This is required"
        yErr.innerHTML = "This is required"
        mErr.innerHTML = "This is required"

        document.getElementById('year').style.border="2px solid red"
        document.getElementById('month').style.border="2px solid red"
        document.getElementById('day').style.border="2px solid red"
        
        year.innerHTML = "--";
        months.innerHTML = "--";
        days.innerHTML = "--";
    }
    else if (date.getFullYear() <= yearin | monthsin > 12 | daysin > 31) {
        dErr.innerHTML = "*Must be a valid day"
        yErr.innerHTML = "*Must be a the past"
        mErr.innerHTML = "*Must be in valid month"

        
        document.getElementById('year').style.border="2px solid red"
        document.getElementById('month').style.border="2px solid red"
        document.getElementById('day').style.border="2px solid red"


        year.innerHTML = "--";
        months.innerHTML = "--";
        days.innerHTML = "--";

    }
    else if (daysin > date.getDate() && monthsin>date.getMonth()) {
        var fdd=daysin-date.getDate();
        var dd=noDays[monthsin];
        year.innerHTML = year1-1;
        months.innerHTML = noMonths[monthsin];
        days.innerHTML = dd-fdd;
    }
    else if (daysin < date.getDate() && monthsin>date.getMonth()) {
        var fdd=daysin-date.getDate();
        var dd=noDays[monthsin];
        year.innerHTML = year1-1;
        months.innerHTML = noMonths[monthsin]+1;
        days.innerHTML = date1;
     }
    else if (daysin > date.getDate()) {
        year.innerHTML = year1;
        months.innerHTML = month1;
        days.innerHTML=noDays[monthsin]-(daysin-date.getDate());
     
    }
  
    else {
        year.innerHTML = year1;
        months.innerHTML = month1;
        days.innerHTML = date1;
    }
   
}







