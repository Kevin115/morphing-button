//**********************************************************//
//                     BASIC OPTIONS                        //
//**********************************************************//

// Add class name of your Button/CTA
var btnName = "btn";
// add your effect for morph content - default fades in the content
// options: default, slide-left, slide-top
var mcEffect = "default";
// fullscreen or center content box-sizing
// options: center, fullscreen
var mcTheme = "center"





//**********************************************************//
//                NO NEED TO TOUCH THIS HERE                //
//**********************************************************//
var btn = document.getElementsByClassName('btn');
var morphBtn = document.getElementById("morph-btn");
var morphContent = document.getElementById("morph-btn__content");
var btnID = [];

// get height and width of btn and add to morph-btn
morphBtn.style.width = btn[0].offsetWidth + "px";
morphBtn.style.height = btn[0].offsetHeight + "px";


// setAttribute ID on all btn elements
// and push the elements to btnID array
for(var i = 0; i < btn.length; i++){
  btn[i].setAttribute("id", "btn" + (i+1));
  var btnw = document.getElementById("btn" + (i+1));
  btnID.push(btnw);

  btnID[i].addEventListener("click", whatClicked(i));

}


function whatClicked(i) {
   return function(){

     morphBtn.style.left = btnID[i].offsetLeft + "px";
     var viewportOffset = btnID[i].getBoundingClientRect();
     morphBtn.style.top = viewportOffset.top + "px";

     if(morphBtn.className !== "morph-btn--open" && morphContent.className !== "morph-btn__content--open") {
       // add class to morphBtn and morphContent
       morphBtn.className += " morph-btn--" + mcTheme + "-open";

       // check if effect for morphContent was selected or is default
       if(mcEffect !== "default") {
         morphContent.className += " morph-btn__content--open " + mcEffect + "--open";
       } else {
         morphContent.className += " morph-btn__content--open ";
       }


       btnID[i].className += " btn--hide";
       // add overflow hidden to body
       document.body.style.overflow = "hidden";
       // add class btn--hide to btn

       // prevent browser to skip to top of the page on btn click
       event.preventDefault();

       console.log(btnID[i]);
     };


  };
}




// if not default add effect class to morphContent
if(mcEffect !== "default") {
  morphContent.className += " " + mcEffect;
}
