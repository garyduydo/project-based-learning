console.log("JavaScript is now working")

const button = document.querySelector(".btn")

const themeBtn = document.querySelector(".themebtn")

const progressBars =document.querySelectorAll(".progress")

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "Light Mode"
    } else {
        themeBtn.textContent = "Dark Mode"
    }
})

button.addEventListener("click", function() {
    alert("Thanks for visiting my portfolio!")
})

progressBars.forEach(function(bar){
    const targetWidth = bar.dataset.width
    bar.style.width = targetWidth + "%"
})
