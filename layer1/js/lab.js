// Author: Vanessa Wang + L Tachiaban
// Date: May 27, 2024
//prototype for text

//retrieve user's name
let inputName = window.prompt("Who am I?");
console.log(inputName);

function shuffleName (){
    //convert name to array
    var userName = inputName.split('').sort((a, b) => 0.5 - Math.random()).join('');
    console.log(userName);
    //return sorted name
    return userName;
  };

const userName = shuffleName ()

let arr = ["Where am I","What's going on?","I don't remember...how I got here","Is there anyone here? I thought I heard..","I can't move","Who am I? I think... am I "+userName+"?","There's something I have to do. I can't rest.","I'm not supposed to be here. I'm supposed to...","What was that?","I HAVE TO GET OUT"];
let index = 0;

$("#layer1-button").click(function(){
    let barWidth = parseInt($("#myBar").css("width"));
    // let barWidth = $("#myBar").css("width");
    if (barWidth==1000) { 
        console.log('Hi');
        $("section").html('')
    } else {
        $("#myBar").css("width",'+=100px');
        $("#output").append('<div class="text"><p>' + arr[index] + '</p></div>');
        index = (index + 1) % arr.length;
    }
});

$("#audio-button").click(function(){
    let myAudio = $("audio")[0]

    if (myAudio.paused) {
        myAudio.play();
        console.log("fofo")
        

    } else {
        myAudio.pause();
        console.log("fifi")
    }
});



  