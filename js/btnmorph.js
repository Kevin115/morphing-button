//**********************************************************//
//                     BASIC OPTIONS                        //
//**********************************************************//

// Add class name of your Button/CTA
var btnName = "btn";
// add your effect for morph content - default fades in the content
// options: default, slide-left, slide-top
var mcEffect = "slide-left";
// fullscreen or center content box-sizing
// options: center, fullscreen, left-panel, right-panel
var mcTheme = "right-panel"





//**********************************************************//
//                NO NEED TO TOUCH THIS HERE                //
//**********************************************************//
var btn = document.getElementsByClassName('btn');
var morphBtn = document.getElementById("morph-btn");
var morphContent = document.getElementById("morph-btn__content");
var btnID = [];

window.onload = function(){
  onScroll();
  onWindowResize();
  // get height and width of btn and add to morph-btn
  morphBtn.style.width = btn[0].offsetWidth + "px";
  morphBtn.style.height = btn[0].offsetHeight + "px";
  morphBtn.style.left = btn[0].offsetLeft + "px";

};

// setAttribute ID on all btn elements
// and push the elements to btnID array
for(var i = 0; i < btn.length; i++){
  btn[i].setAttribute("id", "btn" + (i+1));
  var btnw = document.getElementById("btn" + (i+1));
  btnID.push(btnw);

  btnID[i].addEventListener("click", whatClicked(i));

  btnID[i].addEventListener("mouseover", mouseOver(i));

}

function mouseOver(i) {
  return function(){
    morphBtn.style.left = btnID[i].offsetLeft + "px";
  }
}

window.addEventListener("scroll", onScroll);

function onScroll() {
    var viewportOffset = btn[0].getBoundingClientRect();
    morphBtn.style.top = viewportOffset.top + "px";
}

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  return function(){
    morphBtn.style.left = btn[0].offsetLeft + "px";
  }
}

// text effect on morph
// if not default add effect class to morphContent
if(mcEffect !== "default") {
  morphContent.className += " " + mcEffect;
}

function whatClicked(i) {
   return function(){

     if(morphBtn.className !== "morph-btn--open" && morphContent.className !== "morph-btn__content--open") {
       // add class to morphBtn and morphContent
       morphBtn.className += " morph-btn--open morph-btn--" + mcTheme;

        if(mcTheme = "center"){
          btnID[i].style.display = "none";
        } else {
          setInterval(function () {
            // hide clicked button after 1 second
            btnID[i].style.opacity = "0";
          }, 0);

        }


       // check if effect for morphContent was selected or is default
       if(mcEffect !== "default") {
         morphContent.className += " morph-btn__content--open " + mcEffect + "--open";
       } else {
         morphContent.className += " morph-btn__content--open ";
       }

       // add overflow hidden to body
       document.body.style.overflow = "hidden";
       // add class btn--hide to btn

       // prevent browser to skip to top of the page on btn click
       event.preventDefault();
     };
  };
}
