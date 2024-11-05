
let message = "Are We Having Fun or What?";

function showMessage(message) {
    document.getElementById("message").textContent = message;
} 
showMessage(message);

let secondMessage = "Hope You Are Having A Great Day";

function newMessage(secondMessage){
    document.getElementById("secondMessage").textContent = secondMessage;
}
newMessage(secondMessage);

let nextTime = "See you all later!";

function lastMessage(nextTime){
    document.getElementById("nextTime").textContent = nextTime;
}
lastMessage(nextTime);



let audio;
     window.addEventListener('load', init, false);
     window.addEventListener('click', playPause, false);
     function playPause() {
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
     }
      function init() {
          audio = document.getElementsByTagName ('audio') [0];
          audio.play();
      }




