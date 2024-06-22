function changeText(){
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}

var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");
if (btnLike){
  btnLike.onclick = likeColor;
}
if (btnDislike){
  btnDislike.onclick = dislikeColor;
}

function likeColor(){
    if (btnDislike.classList.contains("red")){
        btnDislike.classList.remove("red");
    }
    this.classList.toggle("green");
}
function dislikeColor(){
    if (btnLike.classList.contains("green")){
        btnLike.classList.remove("green");
    }
    this.classList.toggle("red");
}

function changeImage(element){
  element.setAttribute(
    "src",
    "https://i.pinimg.com/564x/29/35/37/2935378edbb3969dc2b86abf39fe49f6.jpg"
  );
}
function changeImageBack(element){
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedooracademy.com/wp-content/uploads/2022/10/Kelapa-Gading.jpeg"
  )
}

function changeText(text){
  text.innerHTML = "Let's Coding!";
}
function changeTextBack(text){
  text.innerHTML = "Get Programming Tips Here!"
}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;
//Manual images slider
var manualNav = function(manual){
  slides.forEach(function(slide){
    slide.classList.remove("active");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
  });
});
  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};
buttons.forEach(function(btn, i){
  btn.addEventListener("click", function(){
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function(){
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function(){
    setTimeout(function(){
      [...active].forEach(function (activeSlide){
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == i){
        i = 0;
      }
      if (i >= slides.length){
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit){
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute("value", "https://selmaleeyablog.netlify.app/contact.html");
  });
}