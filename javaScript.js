var audio = new Audio(), srcList = [];

    var number_of_sound_tracks = 8;
    var global_counter = 0;
    var Max = 8;
    var positive_click = 0;
    var onEndedSet = false;
    var message = document.getElementById("message");

    for(var i=0;i<10;i++) {
        srcList.push('sounds/'+i+'.wav');     //Replace
    }


    function playSound(){
        alert("Ready to Start?");
        global_counter = 0;
        positive_click = 0;
        message.value = "Playing sound 1";
        audLoop();
        global_counter++;
    }


    function audLoop(){
        audio.src = srcList[global_counter];
        audio.play();

        if (srcList[global_counter] && !onEndedSet){
            audio.onended = setTimeout( audLoop.bind(null, global_counter), 1000);   // for Delay
            onEndedSet = true;
        } else{
            audio.onended = null;
        }

        if (global_counter <= number_of_sound_tracks) {
            message.value = "Heard ?";
        } else {
          var result = positive_click;
          alert("Your Result " + positive_click + " / " + number_of_sound_tracks);
            // window.location.href = "h.php?result="+result;
        }

    }

    function heard() {
        global_counter++;
        positive_click++;

      audLoop();
    }

    function notHeard() {
        global_counter++;
        audLoop();
    }
