
const teste = document.querySelector(".navBottom");
const nOpt = document.querySelector(".navOptions")
const mIcon = document.getElementById('Menu');
teste.addEventListener('click',()=>{
  nOpt.classList.toggle('active')
  if(mIcon.classList.contains('fa-bars')){
    mIcon.classList.remove('fa-bars');
    mIcon.classList.add('fa-xmark');
    return;
  }
  mIcon.classList.remove('fa-xmark');
    mIcon.classList.add('fa-bars');
    
})


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



const adInput = document.querySelectorAll(".adInput");
const adButton = document.querySelector(".adButton");

adButton.addEventListener("click", () => {

  var dataAdInput = adInput[6].value;
  let data = new Date(dataAdInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="adText" >
  PLANO:${adInput[0].value}
  VENCIMENTO:${adInput[1].value}${"\n"}
  VALOR:R$${adInput[2].value}
  MODO DE PAGAMENTO:${adInput[3].value}  
  PONTOS DE REFERÊNCIA:${adInput[8].value}
  CONTATOS DO CLIENTE:${adInput[4].value}
  CONTATOS(2) DO CLIENTE:${adInput[5].value}
  DATA DO AGENDAMENTO:${dataFormatada}
  DESEJA OU NÃO ANTECIPAR:${adInput[7].value}${"\n"}
  OBS${adInput[9].value} </p>

  <span>
  PLANO: ${adInput[0].value}<br>
  VENCIMENTO: ${adInput[1].value}<br>
  VALOR:R$ ${adInput[2].value}<br>
  MODO DE PAGAMENTO: ${adInput[3].value}  <br>
  PONTOS DE REFERÊNCIA: ${adInput[8].value}<br>
  CONTATOS DO CLIENTE: ${adInput[4].value}<br>
  CONTATOS(2) DO CLIENTE: ${adInput[5].value}<br>
  DATA DO AGENDAMENTO: ${dataFormatada}<br>
  DESEJA OU NÃO ANTECIPAR: ${adInput[7].value}<br>
  OBS: ${adInput[9].value} </span>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('adText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
 
});



const rpInput = document.querySelectorAll(".rpInput");
const rpButton = document.querySelector(".rpButton");
rpButton.addEventListener("click", () => {

  var dataInput = rpInput[19].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="rpText" >
  PROBLEMA:${rpInput[0].value}
  ACESSO:${rpInput[1].value}
  RESET DE ONU:${rpInput[2].value}${"\n"}
  VERIFICADO ALARME DO U2000:${rpInput[3].value}
  SINAL ÓTICO: ${rpInput[4].value}
  CTO: ${rpInput[5].value}
  PORTA: ${rpInput[6].value}
  SSID: ${rpInput[7].value}
  SENHA ${rpInput[8].value}
  WIFI SIGNAL DBM: ${rpInput[9].value}
  TROCA DE FREQUÊNCIA: ${rpInput[10].value}
  TESTES REALIZADOS: ${rpInput[11].value} ${"\n"}
  PING CORE 1: ${rpInput[12].value}
  PING CORE 2: ${rpInput[13].value}
  PING AMAZON: ${rpInput[14].value}
  PING FACEBOOK: ${rpInput[15].value}
  PING LOCAL: ${rpInput[16].value} ${"\n","\n","\n"}
  CONCLUSÃO: ${rpInput[21].value} ${"\n","\n"}
  CONTATO DO CLIENTE: ${rpInput[17].value}
  CONTATO(2) DO CLIENTE: ${rpInput[18].value}
  DATA DE AGENDAMENTO: ${dataFormatada}
  PRAZO DE 1 DIA: ${rpInput[20].value}
  PONTOS DE REFERÊNCIA: ${rpInput[22].value}

    </p>
    <span>
  PROBLEMA:${rpInput[0].value}<br>
  ACESSO:${rpInput[1].value}<br>
  RESET DE ONU:${rpInput[2].value}<br><br>
  VERIFICADO ALARME DO U2000:${rpInput[3].value}<br>
  SINAL ÓTICO:${rpInput[4].value}<br>
  CTO:${rpInput[5].value}<br>
  PORTA:${rpInput[6].value}<br><br>
  SSID:${rpInput[7].value}<br>
  SENHA${rpInput[8].value}<br>
  WIFI SIGNAL DBM:${rpInput[9].value}<br>
  TROCA DE FREQUÊNCIA:${rpInput[10].value}<br>
  TESTES REALIZADOS:${rpInput[11].value}<br><br>
  PING CORE 1:${rpInput[12].value}<br>
  PING CORE 2:${rpInput[13].value}<br>
  PING AMAZON:${rpInput[14].value}<br>
  PING FACEBOOK:${rpInput[15].value}<br>
  PING LOCAL:${rpInput[16].value}<br><br><br>
  CONTATO DO CLIENTE:${rpInput[17].value}<br>
  CONTATO(2) DO CLIENTE:${rpInput[18].value}<br>
  DATA DE AGENDAMENTO:${dataFormatada}<br>
  PRAZO DE 1 DIA:${rpInput[20].value}<br>
  PONTOS DE REFERÊNCIA:${rpInput[21].value}<br>
    </span>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('rpText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
 
});

const mdInput = document.querySelectorAll(".mdInput");
const mdButton = document.querySelector(".mdButton")
mdButton.addEventListener("click",()=>{

  var dataInput = mdInput[7].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="mdText" >
    SSID:${mdInput[1].value}
    SENHA:${mdInput[2].value}
    CTO:${mdInput[3].value}
    PORTA:${mdInput[4].value}

    ENDEREÇO ANTIGO: ${mdInput[8].value}
    PONTOS DE REFERÊNCIA:${mdInput[9].value}

    NOVO ENDEREÇO: ${mdInput[10].value}
    PONTOS DE REFERÊNCIA:${mdInput[11].value}

    VALOR TAXA:R$${mdInput[0].value}

    CONTATO DO CLIENTE:${mdInput[5].value}
    CONTATO(2) DO CLIENTE:${mdInput[6].value}
    DATA DE AGENDAMENTO:${dataFormatada}
    DESEJA ANTECIPAR:${mdInput[13].value}
    OBS:${mdInput[12].value}
    </p>
    <span>
    SSID:${mdInput[1].value}<br>
    SENHA:${mdInput[2].value}<br>
    CTO:${mdInput[3].value}<br>
    PORTA:${mdInput[4].value}<br>

    ENDEREÇO ANTIGO: ${mdInput[8].value}<br>
    PONTOS DE REFERÊNCIA:${mdInput[9].value}<br>

    NOVO ENDEREÇO: ${mdInput[10].value}<br>
    PONTOS DE REFERÊNCIA:${mdInput[11].value}<br>

    VALOR TAXA:R$${mdInput[0].value}<br>

    CONTATO DO CLIENTE:${mdInput[5].value}<br>
    CONTATO(2) DO CLIENTE:${mdInput[6].value}<br>
    DATA DE AGENDAMENTO:${dataFormatada}<br>
    DESEJA ANTECIPAR:${mdInput[13].value}<br>
    OBS:${mdInput[12].value}<br>
    </span>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
})


const rlInput = document.querySelectorAll(".rlInput");
const rlButton = document.querySelector(".rlButton");
rlButton.addEventListener("click",()=>{
  var dataInput = rlInput[8].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="rlText" >
    PLANO:${rlInput[0].value}
    VALOR TAXA R$: ${rlInput[1].value}
    SSID:${rlInput[2].value}
    SENHA:${rlInput[3].value}  
    CTO:${rlInput[4].value}
    PORTA:${rlInput[5].value}
    PONTOS DE REFERÊNCIA:${rlInput[10].value}
    CONTATOS DO CLIENTE:${rlInput[6].value}
    CONTATOS(2) DO CLIENTE:${rlInput[7].value}
    DATA DO AGENDAMENTO: ${dataFormatada} 
    DESEJA OU NÃO ANTECIPAR:${rlInput[9].value}
    OBS:${rlInput[11].value}
    </p>
    <span>
    PLANO:${rlInput[0].value}<BR>
    VALOR TAXA R$: ${rlInput[1].value}<BR>
    SSID:${rlInput[2].value}<BR>
    SENHA:${rlInput[3].value}<BR>  
    CTO:${rlInput[4].value}<BR>
    PORTA:${rlInput[5].value}<BR>
    PONTOS DE REFERÊNCIA:${rlInput[10].value}<BR>
    CONTATOS DO CLIENTE:${rlInput[6].value}<BR>
    CONTATOS(2) DO CLIENTE:${rlInput[7].value}<BR>
    DATA DO AGENDAMENTO: ${dataFormatada}<BR> 
    DESEJA OU NÃO ANTECIPAR:${rlInput[9].value}<BR>
    OBS:${rlInput[11].value}<BR></span>`
  });

const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('rlText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });

})



const clInput = document.querySelectorAll(".clInput");
const clButton =document.querySelector('.clButton');

clButton.addEventListener("click",()=>{
  var dataInput = clInput[9].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="rlText" >
    MOTIVO DO CONCELAMENTO:${clInput[0].value}${"\n"}
    SSID: ${clInput[1].value}
    SENHA:${clInput[2].value}  
    CTO:${clInput[3].value}
    PORTA:${clInput[4].value}${"\n"}
    CLIENTE CIENTE DA FATURA EM ABERTO:${clInput[5].value}${"\n"}
    CIENTE QUE EXISTE PROPORCIONAL DE USO, DEVIDO CANCELAMENTO APÓS O VENCIMENTO:${clInput[6].value}${"\n"}
    PONTOS DE REFERÊNCIA:${clInput[11].value}
    CONTATOS DO CLIENTE: ${clInput[7].value} 
    CONTATOS(2) DO CLIENTE:${clInput[8].value}
    DATA DO AGENDAMENTO:${dataFormatada}
    DESEJA OU NÃO ANTECIPAR:${clInput[10].value}
    OBS:${clInput[12].value}
    </p>
    <span">
    MOTIVO DO CONCELAMENTO:${clInput[0].value}<br>
    SSID: ${clInput[1].value}<br>
    SENHA:${clInput[2].value}<br>  
    CTO:${clInput[3].value}<br>
    PORTA:${clInput[4].value}<br>
    CLIENTE CIENTE DA FATURA EM ABERTO:${clInput[5].value}<br>
    CIENTE QUE EXISTE PROPORCIONAL DE USO, DEVIDO CANCELAMENTO APÓS O VENCIMENTO:${clInput[6].value}<br>
    PONTOS DE REFERÊNCIA:${clInput[11].value}<br>
    CONTATOS DO CLIENTE: ${clInput[7].value}<br> 
    CONTATOS(2) DO CLIENTE:${clInput[8].value}<br>
    DATA DO AGENDAMENTO:${dataFormatada}<br>
    DESEJA OU NÃO ANTECIPAR:${clInput[10].value}<br>
    OBS:${clInput[12].value}</span><br>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('clText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
});



const mdeInput = document.querySelectorAll(".mdeInput")
const mdeButton = document.querySelector(".mdeButton")


 mdeButton.addEventListener('click',()=>{
  var dataInput = mdeInput[10].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="mdeText" >
    MOTIVO:${mdeInput[0].value}${"\n"}
    ${mdeInput[1].value}${"\n"}
    SSID:${mdeInput[2].value}
    SENHA: ${mdeInput[3].value}
    CTO:${mdeInput[4].value}  
    PORTA:${mdeInput[5].value}${"\n"}${"\n"}
    CLIENTE CIENTE DA TAXA:${mdeInput[6].value}
    VALOR TAXA R$${mdeInput[7].value} ${"\n"}
    PONTOS DE REFERÊNCIA:${mdeInput[12].value}${"\n"}
    CONTATOS DO CLIENTE: ${mdeInput[8].value} 
    CONTATOS(2) DO CLIENTE:${mdeInput[9].value}
    DATA DO AGENDAMENTO:${dataFormatada}
    DESEJA OU NÃO ANTECIPAR:${mdeInput[11].value}
    OBS:${mdeInput[13].value}
    </p>
    <span">
    MOTIVO:${mdeInput[0].value}<br>
    ${mdeInput[1].value}<br>
    SSID:${mdeInput[2].value}<br>
    SENHA: ${mdeInput[3].value}<br>
    CTO:${mdeInput[4].value}<br>  
    PORTA:${mdeInput[5].value}<br>
    CLIENTE CIENTE DA TAXA:${mdeInput[6].value}<br>
    VALOR TAXA R$${mdeInput[7].value}<br>
    PONTOS DE REFERÊNCIA:${mdeInput[12].value}<br>
    CONTATOS DO CLIENTE: ${mdeInput[8].value}<br> 
    CONTATOS(2) DO CLIENTE:${mdeInput[9].value}<br>
    DATA DO AGENDAMENTO:${dataFormatada}<br>
    DESEJA OU NÃO ANTECIPAR:${mdeInput[11].value}<br>
    OBS:${mdeInput[13].value}<br></span>`
  });

  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdeText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
 });

 const mdpInput = document.querySelectorAll('.mdpInput');
 const mdpButton = document.querySelector('.mdpButton');
 mdpButton.addEventListener("click",()=>{
  var dataInput = mdpInput[7].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="mdpText" >
    SSID:${mdpInput[0].value}
    SENHA: ${mdpInput[1].value}
    CTO:${mdpInput[2].value}  
    PORTA:${mdpInput[3].value}${"\n"}${"\n"}
    CLIENTE CIENTE DA TAXA:${mdpInput[4].value}
    PONTOS DE REFERÊNCIA:${mdpInput[9].value}${"\n"}
    CONTATOS DO CLIENTE: ${mdpInput[5].value} 
    CONTATOS(2) DO CLIENTE:${mdpInput[6].value}
    DATA DO AGENDAMENTO:${dataFormatada}
    DESEJA OU NÃO ANTECIPAR:${mdpInput[8].value}
    OBS:${mdpInput[10].value}
    </p>
    <span">
    SSID:${mdpInput[0].value}<br>
    SENHA: ${mdpInput[1].value}<br>
    CTO:${mdpInput[2].value}<br>  
    PORTA:${mdpInput[3].value}<br>${"\n"}<br>${"\n"}<br>
    CLIENTE CIENTE DA TAXA:${mdpInput[4].value}<br>
    PONTOS DE REFERÊNCIA:${mdpInput[9].value}<br>${"\n"}<br>
    CONTATOS DO CLIENTE: ${mdpInput[5].value}<br> 
    CONTATOS(2) DO CLIENTE:${mdpInput[6].value}<br>
    DATA DO AGENDAMENTO:${dataFormatada}<br>
    DESEJA OU NÃO ANTECIPAR:${mdpInput[8].value}<br>
    OBS:${mdpInput[10].value}<br></span>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdpText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });

 });






 const fnInput = document.querySelectorAll('.fnInput');
 const fnButton = document.querySelector('.fnButton');

 
 fnButton.addEventListener('click',()=>{
  var dataInput = fnInput[10].value;
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  Swal.fire({
    icon: "success",
    title: "Pronto",
    html: ` <p id="fnText" >
    ${fnInput[0].value}${"\n"}
    ${fnInput[1].value}${"\n"}
    SSID:${fnInput[2].value}
    SENHA: ${fnInput[3].value}
    CTO:${fnInput[4].value}  
    PORTA:${fnInput[5].value}${"\n"}${"\n"}
    CLIENTE CIENTE DA TAXA:${fnInput[6].value}
    VALOR TAXA R$${fnInput[7].value} ${"\n"}
    PONTOS DE REFERÊNCIA:${fnInput[12].value}${"\n"}
    CONTATOS DO CLIENTE: ${fnInput[8].value} 
    CONTATOS(2) DO CLIENTE:${fnInput[9].value}
    DATA DO AGENDAMENTO:${dataFormatada}
    DESEJA OU NÃO ANTECIPAR:${fnInput[11].value}
    OBS:${fnInput[13].value}
    </p>
    <span id=popSpan>
    ${fnInput[0].value}${"\n"}
    ${fnInput[1].value}${"\n"}
    SSID:${fnInput[2].value}<br>
    SENHA: ${fnInput[3].value}<br>
    CTO:${fnInput[4].value}  <br>
    PORTA:${fnInput[5].value}${"\n"}${"\n"}<br><br>
    CLIENTE CIENTE DA TAXA:${fnInput[6].value}
    VALOR TAXA R$${fnInput[7].value} ${"\n"}<br><br>
    PONTOS DE REFERÊNCIA:${fnInput[12].value}${"\n"}<br>
    CONTATOS DO CLIENTE: ${fnInput[8].value} <br>
    CONTATOS(2) DO CLIENTE:${fnInput[9].value}<br>
    DATA DO AGENDAMENTO:${dataFormatada}<br>
    DESEJA OU NÃO ANTECIPAR:${fnInput[11].value}<br>
    OBS:${fnInput[13].value}<br>
    </span>`
  });
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('fnText').innerHTML;
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
  });
 });


 const dkMode = document.querySelector('.dkMode');
const dkIcon = document.getElementById('dkIcon');
const dkForm = document.getElementById('form');
const dkImg = document.getElementById('formImg');
const label = document.querySelectorAll('.input__box');

// Verifica o estado do modo escuro no localStorage 
const dkModeOn = localStorage.getItem('dkModeOn');
if (dkModeOn === 'enabled') {
  dkMode.classList.add('active');
  dkIcon.classList.remove('fa-toggle-off', 'icon-transition');
  dkIcon.classList.add('fa-toggle-on', 'icon-transition');
  dkForm.classList.add('dark');
  dkImg.classList.add('dark');
  for (var i = 0; i < label.length; i++) {
    label[i].classList.add('dark');
  }
} else {
  dkMode.classList.remove('active');
  dkIcon.classList.remove('fa-toggle-on', 'icon-transition');
  dkIcon.classList.add('fa-toggle-off', 'icon-transition');
  dkForm.classList.remove('dark');
  dkImg.classList.remove('dark');
  for (var i = 0; i < label.length; i++) {
    label[i].classList.remove('dark');
  }
}

dkMode.addEventListener('click', () => {
  dkMode.classList.toggle('active');
  if (dkIcon.classList.contains('fa-toggle-off')) {
    localStorage.setItem('dkModeOn', 'enabled');
    dkIcon.classList.remove('fa-toggle-off', 'icon-transition');
    dkIcon.classList.add('fa-toggle-on', 'icon-transition');
    dkForm.classList.add('dark');
    dkImg.classList.add('dark');
    for (var i = 0; i < label.length; i++) {
      label[i].classList.add('dark');
    }
  } else {
    localStorage.setItem('dkModeOn', 'disabled');
    dkIcon.classList.remove('fa-toggle-on', 'icon-transition');
    dkIcon.classList.add('fa-toggle-off', 'icon-transition');
    dkForm.classList.remove('dark');
    dkImg.classList.remove('dark');
    for (var i = 0; i < label.length; i++) {
      label[i].classList.remove('dark');
    }
  }
});

