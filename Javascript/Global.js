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
  };


  document.getElementById("criar__button").addEventListener("click", function() {
    pegainput();
    copiarTexto();
  });
  
  function pegainput() {
    var inputs = document.getElementsByTagName("input");
    var selects = document.getElementsByTagName("select");
  
    var valores = [];
  
    for (var j = 0; j < selects.length; j++) {
      var valorselect = selects[j].value;
      valores.push(valorselect);
    }
  
    for (var i = 0; i < inputs.length; i++) {
      var valorinput = inputs[i].value;
      valores.push(valorinput);
    }
  
    var texto = "ADESÃO:"+"\n";
    texto += "PLANO:" + valores[0] + "\n";
    texto += "VENCIMENTO: " + valores[1] + "\n";
    texto += "VALOR DA TAXA:" + valores[2] + "\n";
    texto += "MODO DE PAGAMENTO:" + valores[3] + "\n";
    texto += "PONTO DE REFERÊNCIA:" + valores[11] + "\n";
    texto += "CONTATOS DO CLIENTE:" + valores[8] + "\n";
    texto += "CONTATOS(2) DO CLIENTE: " + valores[9] + "\n";
    texto += "DATA DO AGENDAMENTO: " + valores[10] + "\n";
    texto += "DESEJA ANTECIPAR:  " + valores[4] + "\n";
    
    document.getElementById("texto__os").value = texto;
  }
  
  function copiarTexto() {
    var textoOs = document.getElementById("texto__os");
    textoOs.select();
    navigator.clipboard.writeText(textoOs.value);
    alert("Texto copiado para a área de transferência:\n\n" + textoOs.value);
  }
  