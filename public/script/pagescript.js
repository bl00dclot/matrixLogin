let circle = document.querySelector(".circle");
let signInRegisterBox = document.querySelector("#signInRegisterBox");
    
let circleState = false;

fadeIn(circle, "block");

circle.addEventListener("click", function () {
        circleState = !circleState;
        updateCircle();
    })


// On/Off button logic update

    function updateCircle(){
    if (circleState == true) {
        circle.classList.add("circleSmall");
        signInRegisterBox.style.display = "flex";
    } else {
        circle.classList.remove("circleSmall");
        signInRegisterBox.style.display = "none";
    }
}

// Fade in and out functions

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

