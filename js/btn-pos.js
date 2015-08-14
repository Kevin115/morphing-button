var btn = document.getElementById("btn");
var morph = document.getElementById("morph-content");

// get browser width and height
winW = document.documentElement.clientWidth;
winH = document.documentElement.clientHeight;

// get height and width of btn
var btnWidth = btn.offsetWidth;
var btnHeight = btn.offsetHeight;

// add css height and width to morph button
morph.style.width = btnWidth + "px"
morph.style.height = btnHeight + "px"

window.addEventListener("resize", onWindowResize);

function onWindowResize() {

  // get position of btn
  // left position
  var left = btn.offsetLeft;
  var percentLeft = left + "px";
  morph.style.left = percentLeft;

}
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    //cget top position of btn
    var viewportOffset = btn.getBoundingClientRect();
    var top = viewportOffset.top;
    var pxTop = top + "px";
    morph.style.top = pxTop;
    console.log(pxTop)
  }

btn.addEventListener('click', function() {
  morph.className = morph.className + " morph-content--open";

  var att = ["bottom","right"];
  for(var i = 0; i < att.length; i++){
    morph.style[att[i]] = "0";
  }
  
  btn.className = btn.className + " btn--hide";
  event.preventDefault();
});
