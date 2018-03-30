// Set the date we're counting down to
var countDownDate = new Date("May 8, 2018 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days < 40 && days > 30){
        document.getElementById("message").innerHTML = "Padhle, kuch ho sakta hai abhi";
    }

    else if(days <= 30 && days > 20){
        document.getElementById("message").innerHTML = "Abhi toh padhle bhai!";
    }

    else if(days <= 20 && days > 10){
        document.getElementById("message").innerHTML = "Ab nahi padha toh backlong pakka!";
    }

    else if(days <= 10 && days > 0){
        document.getElementById("message").innerHTML = "Cheats bana sake utne hi din bache hai!";
    }

    // Display the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "JA BETA EXAM DE AAB!";
    }
}, 1000);
