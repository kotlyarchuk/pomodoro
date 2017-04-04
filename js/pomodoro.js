$(document).ready(function(){

    title = "session";

    $(".play").on('click', function(){
        hideControls();
        startClock();
    });

    $(".stop").on("click", function(){
        $(".minutes").css("color" , "white");
        $(".seconds").css("color" , "white");
        showControls();
        stopClock();
        sess_num = $(".session-num").text();
        setTime(sess_num, "00");
    });

    $(".pause").on("click", function(){
        $(".minutes").css("color" , "white");
        $(".seconds").css("color" , "white");
        stopClock();
        setTime(min, nextsec);
    });

    $(".refresh").on("click", function(){
        hideControls();
        stopClock();
        sess_num = $(".session-num").text();
        setTime(sess_num, "00");
        startClock();
    });

    $(".sess-down").on("click", function(){
        sess_num = +$(".session-num").text();
        if(sess_num <= 1) {
            sess_num = 1;
        } else{
            $(".session-num").text(sess_num - 1);
        }
        setTime(sess_num - 1, "00");
    });

    $(".sess-up").on("click", function(){
        sess_num = +$(".session-num").text();
        $(".session-num").text(sess_num + 1);
        setTime(sess_num + 1, "00");
    });

    $(".break-down").on("click", function(){
        break_num = +$(".break-num").text();
        if(break_num <= 1) {
            break_num = 1;
        } else{
            $(".break-num").text(break_num - 1);
        }
    });

    $(".break-up").on("click", function(){
        break_num = +$(".break-num").text();
        $(".break-num").text(break_num + 1);
    });


});



function setTime(min, sec){
    $(".minutes").text(min);
    $(".seconds").text(sec);
}

function stopClock(){
    clearInterval(timer);
}

function startClock(){
    timer = setInterval(function(){

        sec = +$(".seconds").text();
        min = +$(".minutes").text();


        if(min <= 1 && sec > 30){
            setTimerColor("yellow");
        } else if (min < 1 && sec <= 30) {
            setTimerColor("red");
        } else {
            setTimerColor("green");
        }


        nextmin = min;

        if (sec == 0) {
            nextsec = 59;
            nextmin = min - 1;
            setTime(nextmin, nextsec);
        } else {
            if (sec <= 10) {
                nextsec = "0" + (sec-1).toString();
                setTime(nextmin, nextsec);
            } else{
                nextsec = sec - 1;
                setTime(nextmin, nextsec);
            }
        }


        if (nextmin == 0 && nextsec == 0 && title !== "Break"){
            stopClock();
            breakmin = $(".break-num").text();
            title = "Break";
            $(".title").text(title);
            setTime(breakmin, "00");
            startClock();
        } else if (nextmin == 0 && nextsec == 0 && title === "Break") {
            stopClock();
            sessmin = $(".session-num").text();
            title = "Session";
            $(".title").text(title);
            setTime(sessmin, "00");
            startClock();
        }


    }, 1000);
}

function hideControls(){
    $(".break-up").addClass("hidden");
    $(".break-down").addClass("hidden");
    $(".sess-up").addClass("hidden");
    $(".sess-down").addClass("hidden");
}

function showControls(){
    $(".break-up").removeClass("hidden");
    $(".break-down").removeClass("hidden");
    $(".sess-up").removeClass("hidden");
    $(".sess-down").removeClass("hidden");
}

function setTimerColor(color){
    $(".minutes").css("color" , color);
    $(".seconds").css("color" , color);
}
