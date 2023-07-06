const navMenu = document.querySelector(".navMenu");
const menuOption = document.querySelector(".navOptions");
let menuOpen = false;

const menuItem = document.querySelectorAll(".menuItem");
const osItem = document.querySelectorAll(".OS");

let osOpen = false;

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (osOpen) {
      // some com a OS
      osItem.forEach((os) => {
        os.style.display = "none";
      });
    }
    // mostra a os certa
    osItem[index].style.display = "flex";
    osOpen = true;
  });
});

navMenu.addEventListener("click", () => {
  if (menuOpen) {
    menuOption.style.display = "none";
    menuOpen = false;
  } else {
    menuOption.style.display = "flex";
    menuOpen = true;
  }
});

let adInput = document.querySelectorAll(".adInput");
const crButton = document.querySelector(".criar__button");



crButton.addEventListener("click", () => {

  var dataInput = adInput[6].value;

  let data = new Date(dataInput);
  
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Oops...",
    html: ` <h1>PLANO:${adInput[0].value}<br> 
    VENCIMENTO: ${adInput[1].value}<br>
    VALOR:R$ ${adInput[2].value}<br>
    MODO DE PAGAMENTO: ${adInput[3].value}<br>  
    PONTOS DE REFERÊNCIA:${adInput[4].value}<br>
    CONTATOS DO CLIENTE:${adInput[5].value}<br>
    CONTATOS(2) DO CLIENTE:${adInput[7].value}<br>
    DATA DO AGENDAMENTO: ${dataFormatada}<br>
    DESEJA OU NÃO ANTECIPAR: ${adInput[8].value}<br>
    OBS${adInput[9].value} `,
  });

});




