$(document).ready(function(){

    $(".play").on('click', function(){
        hideControls();
        startClock();
    });

    $(".stop").on("click", function(){
        showControls();
        stopClock();
        sess_num = $(".session-num").text();
        setTime(sess_num, "00");
    });

    $(".pause").on("click", function(){
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
