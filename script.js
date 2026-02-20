console.log("JavaScript is now working")

const button = document.querySelector(".btn")

const themeBtn = document.querySelector(".themebtn")

const progressBars =document.querySelectorAll(".progress")

const form = document.querySelector(".contact-form")

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

form.addEventListener("submit", function(){
    event.preventDefault()

    const name= document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const message= document.querySelector("#message").value

    if (name===""||email===""||message===""){
        alert("Please fill in all the fields")
    }

    alert('Thanks ${name}! Your message has been received. I will get back to you at ${email} soon!')

    form.reset()
})
