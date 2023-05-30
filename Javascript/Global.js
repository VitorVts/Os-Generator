const optionMenu = document.querySelector(".select__menu"),
    selectBtn = optionMenu.querySelector(".select__btn"),
    options = optionMenu.querySelectorAll(".option"),
    btn__text = optionMenu.querySelector(".btn__text");

selectBtn.addEventListener("click",() => optionMenu.classList.toggle("active")); 

options.forEach(option =>{
    option.addEventListener("click",()=>{
        let selectedOption = option.querySelector(".option__text").innerText;
        btn__text.innerText = selectedOption;


        optionMenu.classList.toggle("active");
    })
});

function trocarDiv(opcao) {
    // maloca a div que tá inutil
    var divs = document.getElementsByClassName('OS');
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
    }


    
    //mostra a div que tá on
    var div = document.getElementById('OS' + opcao);
    div.style.display = 'flex';
  }