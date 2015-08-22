//**********************************************************//
//                     BASIC OPTIONS                        //
//**********************************************************//
// Add class name of your Button/CTA
var btnName = "btn";
// add your effect for morph content - default fades in the content
// options: default, slide-left, slide-top
var mcEffect = "default";
// fullscreen or center content box-sizing
// options: center, fullscreen, left-panel, right-panel
var mcTheme = "center";


//**********************************************************//
//                NO NEED TO TOUCH THIS HERE                //
//**********************************************************//
var btn = document.getElementsByClassName('btn');
var morphBtn = document.getElementById("morph-btn");
var morphContent = document.getElementById("morph-btn__content");

// get height and width of btn and add to morph-btn
morphBtn.style.width = btn[0].offsetWidth + "px";
morphBtn.style.height = btn[0].offsetHeight + "px";

// setAttribute ID on all btn elements
// and push the elements to btnID array
var btnID = [];
var i;

for(i = 0; i < btn.length; i++) {
    btn[i].setAttribute("id", "btn" + (i+1));
    var btnw = document.getElementById("btn" + (i+1));
    btnID.push(btnw);

    btnID[i].addEventListener("click", whatClicked());

    btnID[i].addEventListener("mouseover", mouseOver());
}

function mouseOver() {
    return function() {
        morphBtn.style.left = this.offsetLeft + "px";
        morphBtn.style.top = this.offsetTop + "px";
    };
}

function onScroll() {
    var viewportOffset = btn[0].getBoundingClientRect();
    morphBtn.style.top = viewportOffset.top + "px";
}

window.addEventListener("scroll", onScroll);

function onWindowResize() {
    morphBtn.style.left = btn[0].offsetLeft + "px";
}

window.addEventListener("resize", onWindowResize);


// text effect on morph
// if not default add effect class to morphContent
if(mcEffect !== "default") {
    morphContent.className += " " + mcEffect;
}

function whatClicked() {
    return function() {
        if(morphBtn.className !== "morph-btn--open" && morphContent.className !== "morph-btn__content--open") {
            // add class to morphBtn and morphContent
            morphBtn.className += " morph-btn--open morph-btn--" + mcTheme;
            // add class btn--hide to btn
            this.style.display = "none";
            // add overflow hidden to body
            document.body.style.overflow = "hidden";
            // prevent browser to skip to top of the page on btn click
            event.preventDefault();
            // check if effect for morphContent was selected or is default
            if(mcEffect !== "default") {
                morphContent.className += " morph-btn__content--open " + mcEffect + "--open";
            } else {
                  morphContent.className += " morph-btn__content--open ";
            }
        }
    };
}
