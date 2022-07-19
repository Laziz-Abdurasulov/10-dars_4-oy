const circles = document.querySelectorAll(".circle");
let elInput = document.querySelector(".input")
console.log(circles);
let activeLight = 0;

elInput.addEventListener("change", function() {

if(elInput.value <= 0){
    alert("Noldan katta son kiriting !!!")
    return
}

setInterval(() => {
    changeLight();
},  elInput.value * 1000);

function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    
    
    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"));

    
}
})