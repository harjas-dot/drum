var i = 0;
while (i < 7) {
  document.querySelectorAll("button")[i].addEventListener("click", play);
  i++;
}

function play() {
  var el = this.innerHTML;
  makesound(el);
  animation(el);
}



document.addEventListener("keydown",function(k){
  makesound(k.key);
  animation(k.key);
});



function makesound(ev) {
  switch (ev) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;


  }
}


function animation(key){
  var ck=document.querySelector("."+key);
  ck.classList.add("pressed");

  setTimeout(function(){
    ck.classList.remove("pressed")
  },100);
}
