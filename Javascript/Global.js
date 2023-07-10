
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


 const adInput = document.querySelectorAll('.adInput');
 const adButton = document.querySelector('.adButton');
 
 adButton.addEventListener('click',()=>{
  const adValues = [...adInput].map(input => input.value);
  var dataInput = adValues[6];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
PLANO:${adValues[0]}
VENCIMENTO:${adValues[1]+"\n"}
VALOR TAXA:R$ ${adValues[2]}
MODO DE PAGAMENTO: ${adValues[3]+"\n"}
PONTOS DE REFERÊNCIA:${adValues[8]}  
CONTATOS DO CLIENTE:${adValues[4]}
CONTATOS(2) DO CLIENTE(2):${adValues[5]}
DATA DO AGENDAMENTO:${dataFormatada} 
DESEJA OU NÃO ANTECIPAR:${adValues[7]+"\n"}
OBS: ${adValues[9]}`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="adText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('adText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });






//Reparo 
 const rpInput = document.querySelectorAll('.rpInput');
 const rpButton = document.querySelector('.rpButton');
 
 rpButton.addEventListener('click',()=>{
  const rpValues = [...rpInput].map(input => input.value);
  var dataInput = rpValues[19];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
PROBLEMA:${rpValues[0]+"\n\n"}
ACESSO:${rpValues[1]}
RESET DE ONU:${rpValues[2]+"\n\n"}
VERIFICADO ALARME DO U2000: ${rpValues[3]}
SINAL ÓTICO: ${rpValues[4]}  
CTO:${rpValues[5]}
PORTA:${rpValues[6]+"\n\n"}
SSID:${rpValues[7]} 
SENHA:${rpValues[8]+"\n"}
WIFI SIGNAL DBm:${rpValues[9]}
TROCA DE FREQUÊNCIA:${rpValues[10]}
TESTE REALIZADOS:${rpValues[11]+"\n\n"}
PING CORE 1:${rpValues[12]}
PING CORE 2:${rpValues[13]}
PING AMAZON:${rpValues[14]}
PING FACEBOOK:${rpValues[15]}
PING LOCAL:${rpValues[16]}
QUAL DISPOSITIVO :${"\n\n"}
CONCLUSÃO:${rpValues[21]+"\n"} 
PONTOS DE REFERÊNCIA:${rpValues[22]}
CONTATO DO CLIENTE:${rpValues[17]}
CONTATO(2) DO CLIENTE:${rpValues[18]}
PRAZO DE 1 DIA:${rpValues[20]}
DATA DE AGENDAMENTO:${dataFormatada} 
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="rpText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('rpText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });



 const mdInput = document.querySelectorAll('.mdInput');
 const mdButton = document.querySelector('.mdButton');
 
 mdButton.addEventListener('click',()=>{
  const mdValues = [...mdInput].map(input => input.value);
  var dataInput = mdValues[7];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
  SSID:${mdValues[1]}
  SENHA:${mdValues[2]}
  CTO:${mdValues[3]}
  PORTA:${mdValues[4]+"\n"+"\n"}
  ENDEREÇO ANTIGO:${mdValues[8]} 
  PONTOS DE REFERÊNCIA:${mdValues[9]+"\n"+"\n"}
  NOVO ENDEREÇO:${mdValues[10]} 
  PONTOS DE REFERÊNCIA:${mdValues[11]+"\n"+"\n"}
  VALOR TAXA:R$ ${mdValues[0]+"\n"+"\n"}
  CONTATO DO CLIENTE:${mdValues[5]}
  CONTATO(2) DO CLIENTE:${mdValues[6]}
  DATA DE AGENDAMENTO:${dataFormatada}
  DESEJA ANTECIPAR : ${mdValues[12]}
  OBS: ${mdValues[13]}
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="mdText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });



 const rlInput = document.querySelectorAll('.rlInput');
 const rlButton = document.querySelector('.rlButton');

 rlButton.addEventListener('click',()=>{
  const rlValues = [...rlInput].map(input => input.value);
  var dataInput = rlValues[8];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
PLANO:${rlValues[0]+"\n"}
VALOR TAXA R$:${rlValues[1]} 
SSID:${rlValues[2]}
SENHA:${rlValues[3]}
CTO:${rlValues[4]}
PORTA:${rlValues[5]}
PONTOS DE REFERÊNCIA:${rlValues[10]}
CONTATOS DO CLIENTE:${rlValues[6]}
CONTATOS(2) DO CLIENTE:${rlValues[7]}
DATA DO AGENDAMENTO:${dataFormatada} 
DESEJA OU NÃO ANTECIPAR:${rlValues[9]}
OBS:${rlValues[11]} 
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="rlText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('rlText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });


  const clInput = document.querySelectorAll('.clInput');
 const clButton = document.querySelector('.clButton');
 clButton.addEventListener('click',()=>{
  const clValues = [...clInput].map(input => input.value);
  var dataInput = clValues[9];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
MOTIVO DO CANCELAMENTO: ${clValues[0]+"\n"}
SSID: ${clValues[1]}
SENHA: ${clValues[2]}
CTO: ${clValues[3]}
PORTA: ${clValues[4]+"\n"+"\n"}
CLIENTE CIENTE DA FATURA EM ABERTO: ${clValues[5]+"\n"}
CIENTE QUE EXISTE PROPORCIONAL DE USO, DEVIDO CANCELAMENTO APÓS O VENCIMENTO: ${clValues[6]+"\n"}
PONTOS DE REFERÊNCIA: ${clValues[11]}
CONTATOS DO CLIENTE: ${clValues[7]}
CONTATOS(2) DO CLIENTE: ${clValues[8]}
DATA DO AGENDAMENTO: ${dataFormatada} 
DESEJA OU NÃO ANTECIPAR: ${clValues[10]}
OBS: ${clValues[12]}
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="clText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('clText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });









 const mdeInput = document.querySelectorAll('.mdeInput');
 const mdeButton = document.querySelector('.mdeButton');
 
 clButton.addEventListener('click',()=>{
  const clValues = [...mdeInput].map(input => input.value);
  var dataInput = mdeValues[9];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
  MOTIVO${mdeInput[1]}   
  SSID${mdeInput[1]}
  SENHA${mdeInput[1]}
  CTO${mdeInput[1]}
  PORTA${mdeInput[1]}
  CLIENTE CIENTE DA TAXA${mdeInput[1]} 
  VALOR TAXA R$ 
  PONTOS DE REFERÊNCIA${mdeInput[1]}
  CONTATOS DO CLIENTE${mdeInput[1]}
  CONTATOS(2) DO CLIENTE${mdeInput[1]}
  DATA DO AGENDAMENTO${mdeInput[1]} 
  DESEJA OU NÃO ANTECIPAR${mdeInput[1]} 
  OBS${mdeInput[1]}
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="mdeText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdeText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });




 const mdpInput = document.querySelectorAll('.mdpInput');
 const mdpButton = document.querySelector('.mdpButton');
 
 mdpButton.addEventListener('click',()=>{
  const mdpValues = [...mdpInput].map(input => input.value);
  var dataInput = mdpValues[7];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
SSID:${mdpValues[0]}
SENHA:${mdpValues[1]}
CTO:${mdpValues[2]}
PORTA:${mdpValues[3]+"\n"+"\n"}

CLIENTE CIENTE DA TAXA:${mdpValues[4]+"\n"}
(Técnico irá julgar se é necessário a cobrança) 

PONTOS DE REFERÊNCIA:${mdpValues[9]}
CONTATOS DO CLIENTE:${mdpValues[5]}
CONTATOS(2) DO CLIENTE:${mdpValues[6]}
DATA DO AGENDAMENTO:${dataFormatada} 
DESEJA OU NÃO ANTECIPAR:${mdpValues[8]} 
OBS: ${mdpValues[10]} 
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="mdpText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('mdpText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });




 const fnInput = document.querySelectorAll('.fnInput');
 const fnButton = document.querySelector('.fnButton');
 console.log([...fnInput])
 fnButton.addEventListener('click',()=>{
  const fnValues = [...fnInput].map(input => input.value);
  var dataInput = fnValues[10];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
PROBLEMA:${fnValues[0]}

RESET DE ONU:${fnValues[1]} 
STATUS SIP:${fnValues[2]}   


VERIFICADO ALARME DO U2000:${fnValues[3]}   
SINAL ÓTICO:${fnValues[4]} 
CTO:${fnValues[5]}
PORTA:${fnValues[6]}

PING Servidor Sip :${fnValues[7]} 

CONCLUSÃO:${fnValues[12]} 

ENDEREÇO:${fnValues[13]}
CONTATO DO CLIENTE:${fnValues[8]}
CONTATO(2) DO CLIENTE:${fnValues[9]}
PRAZO DE 1 DIA:${fnValues[11]} 
DATA DE AGENDAMENTO:${dataFormatada} 
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="fnText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('fnText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });













 const oleInput = document.querySelectorAll('.oleInput');
 const oleButton = document.querySelector('.oleButton');
 console.log([...oleInput])
 oleButton.addEventListener('click',()=>{
  const oleValues = [...oleInput].map(input => input.value);
  var dataInput = oleValues[5];
  let data = new Date(dataInput);
  let dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
 
  const text = `
  PLANO: ${oleValues[0]}
  VENCIMENTO:${oleValues[1]} 
  
  VALOR TAXA:$ R$ 220,00 
  MODO DE PAGAMENTO ( X ) A VISTA   
  
  PONTOS DE REFERÊNCIA:${oleValues[6]}
  CONTATOS DO CLIENTE:${oleValues[3]}
  CONTATOS(2) DO CLIENTE:${oleValues[4]}
  DATA DO AGENDAMENTO:${dataFormatada}
  DESEJA OU NÃO ANTECIPAR:${oleValues[2]} 
  
  OBS:${oleValues[7]}
  
`
   
    
  Swal.fire({
  icon: "success",
  title: "Pronto",
  html: `<textarea id="oleText" class="my-custom-textarea">${text}</textarea>`,
  

  });
  
  const btn = document.querySelector(".swal2-confirm");
  btn.addEventListener('click', function(e) {
    let copyText = document.getElementById('oleText').value;
   
    let copyTextUpper = copyText.toUpperCase(copyText)
    navigator.clipboard.writeText(copyTextUpper);
    
  });
 });