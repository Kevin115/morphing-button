//**********************************************************//
//                     BASIC OPTIONS                        //
//**********************************************************//

// Add ID name of your Button/CTA
var btnName = "btn";
// add your effect for morph content default option is fade
// options: fade-in, slide-left, slide-top
var mcEffect = "fade-in";

var btn = document.getElementById(btnName);
var morphBtn = document.getElementById("morph-btn");
var morphContent = document.getElementById("morph-btn__content");


// get height and width of btn and add to morph-btn
morphBtn.style.width = btn.offsetWidth + "px";
morphBtn.style.height = btn.offsetHeight + "px";

// add effect option on page load
morphContent.className = morphContent.className + " " + mcEffect;

// if browser resizes call function onWindowResize
window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  // get left offset position of btn and add to morph-btn
  morphBtn.style.left = btn.offsetLeft + "px";
}


// if scroll call function onScroll
window.addEventListener("scroll", onScroll);

function onScroll() {
  //get top position of btn relative to viewport
  var viewportOffset = btn.getBoundingClientRect();
  morphBtn.style.top = viewportOffset.top + "px";
}


// on btn click function
btn.addEventListener("click", function() {

  if(morphBtn.className !== "morph-btn--open" && morphContent.className !== "morph-btn__content--open") {
      // add class to morphBtn and morphContent
      morphBtn.className = morphBtn.className + " morph-btn--open";
      morphContent.className = morphContent.className + " morph-btn__content--open " + mcEffect + "--open";
      // add overflow hidden to body
      document.body.style.overflow = "hidden";
      // add class btn--hide to btn
      btn.className = btn.className + " btn--hide";
      // prevent browser to skip to top of the page on btn click
      event.preventDefault();
      // set bottom and right position to 0 on morphBtn
      var att = ["bottom","right"];
      for(var i = 0; i < att.length; i++) {
          morphBtn.style[att[i]] = "0";
      }
    }
  });
