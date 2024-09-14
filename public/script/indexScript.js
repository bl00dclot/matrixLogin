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
        fadeOut(circle);
        fadeIn
        setTimeout(() => {
            circle.classList.add("circleSmall");
            fadeIn(circle, "block")
            fadeIn(signInRegisterBox, "flex")
        }, 500);
        
    } else {
        fadeOut(circle);
        fadeOut(signInRegisterBox)
        setTimeout(() => {
            circle.classList.remove("circleSmall");
            signInRegisterBox.style.display = "none";
            fadeIn(circle, "block");
        }, 500);
    }
}

