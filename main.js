var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
    ];
    
    var wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
    ];



    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds")
    let weekday = document.getElementById("weekday");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");


    function updateClock() {
        let clock = new Date();
        weekday.innerHTML = wochenTag [clock.getDay()]; 
        day.innerHTML = clock.getDate();
        month.innerHTML = monate[clock.getMonth()];
        year.innerHTML = clock.getFullYear();
        hour.innerHTML = clock.getHours(); 
        minutes.innerHTML = clock.getMinutes(); 
        seconds.innerHTML = clock.getSeconds();
       
        if (hour.innerHTML <10) {
            hour.innerHTML = "0" + clock.getHours()
        }
    
        if (minutes.innerHTML <10) {
            minutes.innerHTML = "0" + clock.getMinutes();
        }
    }
    

      setInterval(updateClock, 1000)

   