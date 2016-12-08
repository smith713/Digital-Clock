/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    'use strict';
    function Time() {
        var currentTime = new Date(),
            hour = currentTime.getHours(),
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            meridiem = "AM";
      
        function formatTime(x) {
            if (x < 10) {
                return "0" + x;
            } else {
                return x;
            }
        }

        if (hour > 12) {
            hour = hour - 12;
            meridiem = "PM";
        }

        hour = formatTime(hour);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        var clock = document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + meridiem;
      
    }
    
    var result = $('#date'),
    
        months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ],

        days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
    
    function update() {
        var date = new Date(),
            dayOfWeek = days[date.getDay()],
            month = months[date.getMonth()],
            day = date.getDate(),
            year = date.getFullYear(),
  
            dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
  
        result.text(dateString);
    }
    update();
    setInterval(Time, 1000);
});