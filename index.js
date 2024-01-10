const accordions = document.querySelectorAll(".accordion")
let accordionBtn = document.getElementById("accordion-btn-img")

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active")
        if (accordionBtn == "./assets/images/icon-plus.svg") {
            accordionBtn.src = "./assets/images/icon-minus.svg"
            console.log(accordionBtn.src)
        } else {
            accordionBtn.src = "./assets/images/icon-plus.svg"
            console.log(accordionBtn.src)
        }
    })
})

// console.log(accordionBtn.src)