const optionMenu = document.querySelector(".select__menu"),
    selectBtn = optionMenu.querySelector(".select__btn"),
    options = optionMenu.querySelectorAll(".option"),
    btn__text = optionMenu.querySelector(".btn__text");

selectBtn.addEventListener("click",() => optionMenu.classList.toggle("active")); 

options.forEach(option =>{
    option.addEventListener("click",()=>{
        let selectedOption = option.querySelector(".option__text").innerText;
        btn__text.innerText = selectedOption;


        optionMenu.classList.toggle("active")
    })
})