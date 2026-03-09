// Lift simulator
let slider = document.getElementById("speedSlider");

if(slider){
    slider.oninput = function(){
        let lift = Math.round(this.value * 2); // Simple formula
        document.getElementById("liftOutput").innerText =
            "Estimated Lift Force: " + lift + " units";
    }
}

// Quiz question 1
function answer(choice){
    if(choice === "lift"){
        document.getElementById("quizResult").innerText = "Correct! Lift keeps aircraft in the air.";
    } else {
        document.getElementById("quizResult").innerText = "Not quite. Try again.";
    }
}

// Quiz question 2
function answer2(choice){
    if(choice === "delta"){
        document.getElementById("quizResult").innerText = "Correct! Delta wings are used for supersonic flight.";
    } else {
        document.getElementById("quizResult").innerText = "Incorrect. Try again.";
    }
}

// Quiz question 3
function answer3(choice){
    if(choice === "weight"){
        document.getElementById("quizResult").innerText = "Correct! Weight opposes lift.";
    } else {
        document.getElementById("quizResult").innerText = "Incorrect. Try again.";
    }
}

// Scroll animations
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});
