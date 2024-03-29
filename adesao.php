<?php

    include('protect.php');

?>

<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/index/Index.css">
    <link rel="stylesheet" href="CSS/Global.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <title>OS Generator</title>
</head>


<body>

    <div class="container__form">

        <div class="form__img" id="formImg">
            <div class="form__title">
                <h1>Criar Os  </h1> 
            </div>
            <img src="Img/undraw_contract_re_ves9.svg" >
        </div>
        
        <div class="form" id="form">
            
            <div class="form__header">
                
                <div class="navBottom">
                    <i class="fa-solid fa-bars" id="Menu" ></i>
                    <nav class="navOptions">
                        <h3 class="menuItem">Adesão</h3>
                        <h3 class="menuItem">Reparo</h3>
                        <h3 class="menuItem">M.Endereço</h3>
                        <h3 class="menuItem">Religação</h3>
                        <h3 class="menuItem">Cancelamento</h3>
                        <h3 class="menuItem">Troca</h3>
                        <h3 class="menuItem">M.Ponto</h3>
                        <h3 class="menuItem">Interfone</h3>
                        <h3 class="menuItem">Olé  </h3>
                    </nav>
                        
                </div>
                      
            </div>
                                <!--Adesão--> 
                                <div id="OS" class="input__group OS">
                    <div class="osTitle"><h1>Adesão</h1></div>
                    <div class="input__box" id="inputBox">
                        
                        <label for="plano">Plano</label>
                        <select name="plano" class="adInput" required>
                            <option value="">Selecione</option>
                            <option value=" ( x ) 200MBPS ( ) 40MBPS ( ) 20MBPS">200MB</option>
                            <option value=" (  ) 200MBPS ( x ) 40MBPS ( ) 20MBPS40">40MB</option>
                            <option value=" (  ) 200MBPS ( ) 40MBPS ( x ) 20MBPS">20MB</option>
                            
                        </select>        
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="vencimento">Vencimento</label>
                        <select name="vencimento" class="adInput">
                            <option value=""selected>Selecione</option>
                            <option value="Dia 1"> Dia 1</option>
                            <option value="Dia 5"> Dia 5</option>
                            <option value="Dia 10"> Dia10</option>
                        </select>    
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="valortaxa">Valor da Taxa</label>
                        <select name="valortaxa" class="adInput">
                            <option value="">Selecione</option>
                            <option value="180"> R$180,00</option>
                            <option value="150"> R$150,00</option>
                            <option value="100"> R$100,00</option>
                            <option value="isento">Isento</option>
                        </select>        
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="pagamento">Modo de Pagamento</label>
                        <select name="pagamento" class="adInput">
                        <option value="">Selecione</option>
                        <option value=" ( x ) A VISTA    (   )3X  (   )Ação Marketing">A Vista</option>
                        <option value=" (   ) A VISTA    ( x )3X  (   )Ação Marketing">3X</option>
                        <option value=" (   ) A VISTA    (   )3X  (  x )Ação Marketing">Ação de Marketing</option> 
                        </select>   
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="contato">Contato</label>
                        <input class="adInput"type="text" name="contato"  placeholder="(00)00000-0000">    
                    </div>
                    
                    <div class="input__box" id="inputBox">
                        <label for="contato2">Contato 2</label>
                        <input class="adInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="agendamento">Agendamento</label>
                        
                        <input class="adInput"type="date" name="agendamento" pattern="dd-mm">    
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="antecipar">Deseja Antecipar</label>
                        <select name="antecipar" class="adInput">
                            <option value="">Selecione</option>
                            <option value="( x ) SIM (  )NÃO">Sim</option>
                            <option value="(  ) SIM ( x )NÃO">Não</option>
                        </select>    
                    </div>
                    
                    
                    
                    
                    <div class="input__box obs" id="inputBox" >
                        <label for="endereço">Ponto de Referência</label>
                        <input class="adInput" placeholder="Digite Aqui">     
                    </div>
                    <div class="input__box obs"  id="inputBox">
                        <label>OBS:</label>
                        <input class="adInput" placeholder="Digite Aqui">     
                    </div>

                        <div class="adButton" id="criar__button">
                             <button>Criar</button>
                        </div>

                                </div>






                                <!--Reparo-->
                                <div id="OS" class="input__group OS">
                                    <div class="input__box" id="inputBox">
                                        <div class="osTitle"><h1>Reparo</h1></div>
                                        <label for="RP_problema">Problema</label>
                                        <input class="rpInput" placeholder="Digite Aqui ... ">    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="RP_acesso">Acesso</label>
                                        <select name="RP_acesso" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="Wi-fi">Wi-fi</option>
                                            <option value="Cabo">Cabo</option>
                                            <option value="Ambos">Ambos</option>
                                        </select>    
                                    </div>
                            
                                    <div class="input__box" id="inputBox">
                                        <label for="rpReset">Reset da Onu </label>
                                        <select name="rpReset" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>    
                                    </div>
                                
                                    <div class="input__box" id="inputBox">
                                        <label for="rpFreq">Alarme U2000</label>
                                        <select name="rpFreq" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="rpSinal">Sinal Ótico</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X )OK    (  )LED LOSS   (  )Acima do Padrão:  ">Ok</option>
                                            <option value="(  )OK    ( X )LED LOSS   (  )Acima do Padrão:  ">LedLoss</option>
                                            <option value="(  )OK    (  )LED LOSS   ( X )Acima do Padrão:  ">Acima do Padrão</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox" >
                                        <label for="Cto">Cto</label>
                                        <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox">
                                        <label for="Porta">Porta</label>
                                        <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox" id="rpSsid">
                                        <label for="ssid">Ssid</label>
                                        <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                    </div>

                                    <div class="input__box" id="inputBox" id="rpSenha">
                                        <label for="senha">Senha</label>
                                        <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Wi-fi Dbm</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="BOM 	  ( X )-28 a -53dBm">Bom</option>
                                            <option value="IRREGULAR ( X )-54 a -67dBm">Irregular</option>
                                            <option value="RUIM.     ( X )-68 a -99dBm">Ruim</option>
                                        </select>    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Troca De Freq</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X )SIM  (  )NÃO">Sim</option>
                                            <option value="(  )SIM  ( X )NÃO">Não</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Testes Realizados</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X )2.4GHZ   (  )5.0GHZ">2G</option>
                                            <option value="(  )2.4GHZ   ( X )5.0GHZ">5G</option>
                                        </select>    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox">
                                        
                                        <label for="rpDbm">Core 1</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X ) OK   (   ) FALHA">Ok</option>
                                            <option value="(   ) OK   ( X ) FALHA">Falha</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Core 2</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X ) OK   (   ) FALHA">Ok</option>
                                            <option value="(   ) OK   ( X ) FALHA">Falha</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Amazon</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X ) OK   (   ) FALHA">Ok</option>
                                            <option value="(   ) OK   ( X ) FALHA">Falha</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Facebook</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X ) OK   (   ) FALHA">Ok</option>
                                            <option value="(   ) OK   ( X ) FALHA">Falha</option>
                                        </select>    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label for="rpDbm">Local</label>
                                        <select name="rpSinal" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X ) OK   (   ) FALHA">Ok</option>
                                            <option value="(   ) OK   ( X ) FALHA">Falha</option>
                                        </select>    
                                    </div>
                                    
                                    
                                    <div class="input__box" id="inputBox">
                                        <label for="contato">Contato</label>
                                        <input class="rpInput"type="text" name="contato"  placeholder="(00)00000-0000">    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox">
                                        <label for="contato2">Contato 2</label>
                                        <input class="rpInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox">
                                        <label for="agendamento">Data de Agendamento</label>
                                        <input class="rpInput"type="date" name="agendamento" pattern="dd-mm">    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="rpFreq">Prazo 1 dia </label>
                                        <select name="rpFreq" class="rpInput">
                                            <option value=""selected>Selecione</option>
                                            <option value="( X )SIM  (  )NÃO">Sim</option>
                                            <option value="(  )SIM  ( X )NÃO">Não</option>
                                        </select>    
                                    </div>

                                    
                                    <div class="input__box obs"  id="inputBox" >
                                        <label for="endereço">Conclusão</label>
                                        <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                    </div>

                                        <div class="input__box obs"  id="inputBox"  >
                                            <label>Ponto de Referência</label>
                                            <input class="rpInput" placeholder="Digite Aqui..."> </input>    
                                        </div>
                                        
                                    <div class="rpButton" id="criar__button">
                                        <button>Criar</button>
                                    </div>
                                    </div>

                                <!--Mudança de Endereço-->
                                <div id="OS" class="input__group OS ">
                                    <div class="osTitle"><h1>Mud. Endereço</h1></div>
                                    <div class="input__box" id="inputBox">
                                        <label>Valor da Taxa</label>
                                        <input class="mdInput"type="text"  placeholder="R$">    
                                    </div>   
                                    <div class="input__box" id="inputBox">
                                        <label>Ssid</label>
                                        <input class="mdInput"placeholder="Digite Aqui...">    
                                    </div>               
                                    <div class="input__box" id="inputBox">
                                        <label>Senha</label>
                                        <input class="mdInput"placeholder="Digite Aqui...">    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label>Cto</label>
                                        <input class="mdInput"placeholder="Digite Aqui...">    
                                    </div>
                                    <div class="input__box" id="inputBox">
                                        <label>Porta</label>
                                        <input class="mdInput"placeholder="Digite Aqui...">    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="contato">Contato</label>
                                        <input class="mdInput"type="text" name="contato"  placeholder="(00)00000-0000">    
                                    </div>
                                    
                                    <div class="input__box" id="inputBox">
                                        <label for="contato2">Contato 2</label>
                                        <input class="mdInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="agendamento">Agendamento</label>
                                        
                                        <input class="mdInput"type="date" name="agendamento" pattern="dd-mm">    
                                    </div>

                                    
                                    
                                    <div class="input__box obs" id="inputBox" >
                                        <label for="endereço">Antigo Endereço</label>
                                        <input class="mdInput" placeholder="Digite Aqui">     
                                    </div>
                                    <div class="input__box obs" id="inputBox" >
                                        <label for="endereço">Referência (Antigo)</label>
                                        <input class="mdInput" placeholder="Digite Aqui">     
                                    </div>
                                    <div class="input__box obs" id="inputBox" >
                                        <label for="endereço">Novo Endereço</label>
                                        <input class="mdInput" placeholder="Digite Aqui">     
                                    </div>
                                    
                                    <div class="input__box obs" id="inputBox" >
                                        <label for="endereço">Referência (Novo)</label>
                                        <input class="mdInput" placeholder="Digite Aqui">     
                                    </div>
                                    <div class="input__box obs"  id="inputBox" >
                                        <label for="obs">OBS:</label>
                                        <input class="mdInput" placeholder="Digite Aqui">     
                                    </div>

                                    <div class="input__box" id="inputBox">
                                        <label for="antecipar">Deseja Antecipar</label>
                                        <select name="antecipar" class="mdInput">
                                            <option value="">Selecione</option>
                                            <option value="( x ) SIM (  )NÃO">Sim</option>
                                            <option value="(  ) SIM ( x )NÃO">Não</option>
                                        </select>    
                                    </div>
                                        <div class="mdButton" id="criar__button">
                                            <button>Criar</button>
                                        </div>

                                    
                                </div>
                                <!--Religação-->
                                <div id="OS" class="input__group OS">
                                        <div class="osTitle"><h1>Religação</h1></div>
                                        <div class="input__box" id="inputBox">
                                            
                                            <label for="plano">Plano</label>
                                            <select name="plano" class="rlInput" required>
                                                <option value="">Selecione</option>
                                                <option value=" ( x ) 200MBPS ( ) 40MBPS ( ) 20MBPS">200MB</option>
                                                <option value=" (  ) 200MBPS ( x ) 40MBPS ( ) 20MBPS40">40MB</option>
                                                <option value=" (  ) 200MBPS ( ) 40MBPS ( x ) 20MBPS">20MB</option>
                                                
                                            </select>        
                                        </div>

                                        <div class="input__box" id="inputBox">
                                            <label>Valor Da Taxa</label>
                                            <input class="rlInput">    
                                        </div>

                                        <div class="input__box" id="inputBox">
                                            <label>Ssid</label>
                                            <input class="rlInput">    
                                        </div>

                                        <div class="input__box" id="inputBox">
                                            <labeL>Senha</label>
                                            <input class="rlInput">    
                                        </div>
                                        <div class="input__box" id="inputBox">
                                            <labeL>Cto</label>
                                            <input class="rlInput">    
                                        </div>
                                        <div class="input__box" id="inputBox">
                                            <labeL>Porta</label>
                                            <input class="rlInput">    
                                        </div>
                                        

                                        <div class="input__box" id="inputBox">
                                            <label for="contato">Contato</label>
                                            <input class="rlInput"type="text" name="contato"  placeholder="(00)00000-0000">    
                                        </div>
                                        
                                        <div class="input__box" id="inputBox">
                                            <label for="contato2">Contato 2</label>
                                            <input class="rlInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                        </div>

                                        <div class="input__box" id="inputBox">
                                            <label for="agendamento">Data de Agendamento</label>
                                            
                                            <input class="rlInput"type="date" name="agendamento" pattern="dd-mm">    
                                        </div>
                                        <div class="input__box" id="inputBox">
                                            <label for="antecipar">Deseja Antecipar</label>
                                            <select name="antecipar" class="rlInput">
                                                <option value="">Selecione</option>
                                                <option value="( x ) SIM (  )NÃO">Sim</option>
                                                <option value="(  ) SIM ( x )NÃO">Não</option>
                                            </select>    
                                        </div>
                                        <div class="input__box obs" id="inputBox" id="endereco">
                                            <label for="endereço">Ponto de Referência</label>
                                            <input class="rlInput" placeholder="Digite Aqui">     
                                        </div>
                                        
                                        
                                        <div class="input__box obs"  id="inputBox" >
                                            <label for="obs">OBS:</label>
                                            <input class="rlInput" placeholder="Digite Aqui">     
                                        </div>

                                            <div class="rlButton" id="criar__button">
                                                <button>Criar</button>
                                            </div>

                                </div>
                                <!--Cancelamento-->
                                <div id="OS" class="input__group OS">
                    <div class="osTitle"><h1>Cancelamento</h1></div>
                    
                    <div class="input__box" id="inputBox">
                        <label>Motivo</label>
                        <input class="clInput">    
                    </div>
    
                    <div class="input__box" id="inputBox">
                        <label>Ssid</label>
                        <input class="clInput">    
                    </div>
    
                    <div class="input__box" id="inputBox">
                        <labeL>Senha</label>
                        <input class="clInput">    
                    </div>

                    <div class="input__box" id="inputBox">
                        <labeL>Cto</label>
                        <input class="clInput">    
                    </div>
                    <div class="input__box" id="inputBox">
                        <labeL>Porta</label>
                        <input class="clInput">    
                    </div>
                    
                    <div class="input__box" id="inputBox">
                        <label for="plano">Fatura em aberto </label>
                        <select name="plano" class="clInput" required>
                            <option value="">Selecione</option>
                            <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                            <option value=" (  ) SIM ( X ) NÃO">Não</option>
                            
                        </select>
                </div>

                    <div class="input__box" id="inputBox">
                            <label for="plano">Proporcional de Uso </label>
                            <select name="plano" class="clInput" required>
                                <option value="">Selecione</option>
                                <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                                <option value=" (  ) SIM ( X ) NÃO">Não</option>
                                
                            </select>
                    </div>

                   
                    <div class="input__box" id="inputBox">
                        <label for="contato">Contato</label>
                        <input class="clInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                    </div>

                    <div class="input__box" id="inputBox">
                        <label for="contato2">Contato 2</label>
                        <input class="clInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                    </div>
    
                    <div class="input__box" id="inputBox">
                        <label for="agendamento">Data de Agendamento</label>
                        
                        <input class="clInput"type="date" name="agendamento" pattern="dd-mm">    
                    </div>
                    <div class="input__box" id="inputBox">
                        <label for="antecipar">Deseja Antecipar</label>
                        <select name="antecipar" class="clInput">
                            <option value="">Selecione</option>
                            <option value="( x ) SIM (  )NÃO">Sim</option>
                            <option value="(  ) SIM ( x )NÃO">Não</option>
                        </select>    
                    </div>
                    <div class="input__box obs" id="inputBox" >
                        <label for="endereço">Ponto de Referência</label>
                        <input class="clInput" placeholder="Digite Aqui">     
                    </div>
                    
                    
                    <div class="input__box obs"  id="inputBox">
                        <label>OBS:</label>
                        <input class="clInput" placeholder="Digite Aqui">     
                    </div>
    
                        <div class="clButton" id="criar__button">
                             <button>Criar</button>
                        </div>
    
                                </div>
                                <!--Troca de Equipamento-->
                                <div id="OS" class="input__group OS ">
                        <div class="osTitle"><h1>Troca de Equipamento</h1></div>
                        <div class="input__box" id="inputBox">
                            <label>Motivo</label>
                            <input class="mdeInput">    
                        </div>
                        <div class="input__box" id="inputBox">
                            <label for="plano">Qual Equipamento </label>
                            <select name="plano" class="mdeInput" required>
                                <option value="">Selecione</option>
                                <option value=" ( X )TROCA DO CORDÃO OPTICO">Cordão Ótico</option>
                                <option value=" ( X )TROCA DO CABO">Cabo</option>
                                <option value=" ( X )CONECTOR DANIFICADO">Conector</option>
                                <option value=" ( X )TROCA DE ROSETA ">Roseta</option>
                                <option value=" ( X )TROCA DE FONTE">Fonte</option>
                                <option value=" ( X )TROCA DE ONU">Onu</option>
                                <option value=" ( X )TROCA CONTROLE OLÉ TV">Controle Olé</option>
                            </select>
                            
                        </div>
                                        <div class="input__box" id="inputBox">
                                            <label>Ssid</label>
                                            <input class="mdeInput">    
                                        </div>
                        
                                        <div class="input__box" id="inputBox">
                                            <labeL>Senha</label>
                                            <input class="mdeInput">    
                                        </div>

                                        <div class="input__box" id="inputBox">
                                            <labeL>Cto</label>
                                            <input class="mdeInput">    
                                        </div>
                                        <div class="input__box" id="inputBox">
                                            <labeL>Porta</label>
                                            <input class="mdeInput">    
                                        </div>
                        <div class="input__box" id="inputBox">
                                <label for="plano">Cliente Ciente Da Taxa</label>
                                <select name="plano" class="mdeInput" required>
                                    <option value="">Selecione</option>
                                    <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                                    <option value=" (  ) SIM ( X ) NÃO">Não</option>
                                    
                                </select>
                        </div>
                        
                        <div class="input__box" id="inputBox">
                            <labeL>Valor Taxa</label>
                            <input class="mdeInput">    
                        </div>
                       
                        <div class="input__box" id="inputBox">
                            <label for="contato">Contato</label>
                            <input class="mdeInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                        </div>
    
                        <div class="input__box" id="inputBox">
                            <label for="contato2">Contato 2</label>
                            <input class="mdeInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                        </div>
        
                        <div class="input__box" id="inputBox">
                            <label for="agendamento">Data de Agendamento</label>
                            
                            <input class="mdeInput"type="date" name="agendamento" pattern="dd-mm">    
                        </div>
                        <div class="input__box" id="inputBox">
                            <label for="antecipar">Deseja Antecipar</label>
                            <select name="antecipar" class="mdeInput">
                                <option value="">Selecione</option>
                                <option value="( x ) SIM (  )NÃO">Sim</option>
                                <option value="(  ) SIM ( x )NÃO">Não</option>
                            </select>    
                        </div>
                        <div class="input__box obs" id="inputBox">
                            <label>Ponto de Referência</label>
                            <input class="mdeInput" placeholder="Digite Aqui">     
                        </div>
                        
                        
                        <div class="input__box obs"  id="inputBox">
                            <label>OBS:</label>
                            <input class="mdeInput" placeholder="Digite Aqui">     
                        </div>
        
                            <div class="mdeButton" id="criar__button">
                                 <button>Criar</button>
                            </div>
        
                                </div>
                                <!--Mudança de local de Ponto-->
                                <div id="OS" class="input__group OS">
                            <div class="osTitle"><h1>Mud.Local de Ponto</h1></div>
                            
                            
                                            <div class="input__box" id="inputBox">
                                                <label>Ssid</label>
                                                <input class="mdpInput">    
                                            </div>
                            
                                            <div class="input__box" id="inputBox">
                                                <labeL>Senha</label>
                                                <input class="mdpInput">    
                                            </div>
    
                                            <div class="input__box" id="inputBox">
                                                <labeL>Cto</label>
                                                <input class="mdpInput">    
                                            </div>
                                            <div class="input__box" id="inputBox">
                                                <labeL>Porta</label>
                                                <input class="mdpInput">    
                                            </div>
                            <div class="input__box" id="inputBox">
                                    <label for="plano">Cliente Ciente Da Taxa</label>
                                    <select name="plano" class="mdpInput" required>
                                        <option value="">Selecione</option>
                                        <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                                        <option value=" (  ) SIM ( X ) NÃO">Não</option>
                                        
                                    </select>
                            </div>
                            
                           
                            <div class="input__box" id="inputBox">
                                <label for="contato">Contato</label>
                                <input class="mdpInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                            </div>
        
                            <div class="input__box" id="inputBox">
                                <label for="contato2">Contato 2</label>
                                <input class="mdpInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                            </div>
            
                            <div class="input__box" id="inputBox">
                                <label for="agendamento">Data de Agendamento</label>
                                
                                <input class="mdpInput"type="date" name="agendamento" pattern="dd-mm">    
                            </div>
                            <div class="input__box" id="inputBox">
                                <label for="antecipar">Deseja Antecipar</label>
                                <select name="antecipar" class="mdpInput">
                                    <option value="">Selecione</option>
                                    <option value="( x ) SIM (  )NÃO">Sim</option>
                                    <option value="(  ) SIM ( x )NÃO">Não</option>
                                </select>    
                            </div>
                            <div class="input__box obs" id="inputBox" >
                                <label for="endereço">Ponto de Referência</label>
                                <input class="mdpInput" placeholder="Digite Aqui">     
                            </div>
                            
                            
                            <div class="input__box obs"  id="inputBox" id="rlObs">
                                <label>OBS:</label>
                                <input class="mdpInput" placeholder="Digite Aqui">     
                            </div>
            
                                <div class="mdpButton" id="criar__button">
                                     <button>Criar</button>
                                </div>
            
                                </div>
                                <!--Interfone-->
                                <div id="OS" class="input__group OS">
                                <div class="osTitle"><h1>Interfones</h1></div>
                                
                                
                                                <div class="input__box" id="inputBox">
                                                    <label>Problema</label>
                                                    <input class="fnInput" placeholder="Digite Aqui...">    
                                                </div>
                                                <div class="input__box" id="inputBox">
                                                    <label for="plano">Reset Onu</label>
                                                    <select name="plano" class="fnInput">
                                                        <option value="">Selecione</option>
                                                        <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                                                        <option value=" (  ) SIM ( X ) NÃO">Não</option>
                                                        
                                                    </select>
                                                </div>
                                                <div class="input__box" id="inputBox">
                                                    <label for="plano">Status Sip</label>
                                                    <select name="plano" class="fnInput">
                                                        <option value="">Selecione</option>
                                                        <option value=" ( X )OK  ( )Falha  ">Ok</option>
                                                        <option value=" (  )OK  ( X )Falha  ">Falha</option>
                                                        
                                                    </select>   
                                                    
                                                </div>

                                                <div class="input__box" id="inputBox">
                                                    <label for="plano">Alarme U2000</label>
                                                    <select name="plano" class="fnInput" >
                                                        <option value="">Selecione</option>
                                                        <option value=" ( X ) SIM (  ) NÃO">Sim</option>
                                                        <option value=" (  ) SIM ( X ) NÃO">Não</option>
                                                        
                                                    </select>
                                                </div>

                                                <div class="input__box" id="inputBox">
                                                    <label for="plano">Reset Onu</label>
                                                    <select name="plano" class="fnInput" >
                                                        <option value="">Selecione</option>
                                                        <option value=" ( X ) OK (   ) LED LOSS (   )Acima do Padrão">Sim</option>
                                                        <option value=" (   ) OK ( x ) LED LOSS (   )Acima do Padrão">Sim</option>
                                                        <option value=" (   ) OK (   ) LED LOSS ( X )Acima do Padrão">Sim</option>
                                                        
                                                    </select>
                                                </div>

                                                <div class="input__box" id="inputBox">
                                                    <labeL>Cto</label>
                                                    <input class="fnInput">    
                                                </div>
                                                <div class="input__box" id="inputBox">
                                                    <labeL>Porta</label>
                                                    <input class="fnInput">    
                                                </div>

                                                <div class="input__box" id="inputBox">
                                                    <label for="plano">Status Sip</label>
                                                    <select name="plano" class="fnInput" required>
                                                        <option value="">Selecione</option>
                                                        <option value=" ( X )OK  ( )Falha  ">Ok</option>
                                                        <option value=" (  )OK  ( X )Falha  ">Falha</option>
                                                        
                                                    </select>   
                                                    
                                                </div>

                                                
                                
                               
                                <div class="input__box" id="inputBox">
                                    <label for="contato">Contato</label>
                                    <input class="fnInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                </div>
            
                                <div class="input__box" id="inputBox">
                                    <label for="contato2">Contato 2</label>
                                    <input class="fnInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                </div>
                
                                <div class="input__box" id="inputBox">
                                    <label for="agendamento">Data de Agendamento</label>
                                    
                                    <input class="fnInput"type="date" name="agendamento" pattern="dd-mm">    
                                </div>
                                <div class="input__box" id="inputBox">
                                    <label for="antecipar">Prazo de 1 dia</label>
                                    <select name="antecipar" class="fnInput">
                                        <option value="">Selecione</option>
                                        <option value="( x ) SIM (  )NÃO">Sim</option>
                                        <option value="(  ) SIM ( x )NÃO">Não</option>
                                    </select>    
                                </div>

                                <div class="input__box obs"  id="inputBox" >
                                    <label>Conclusão</label>
                                    <input class="fnInput" placeholder="Digite Aqui">     
                                </div>
                                <div class="input__box endereç obs" id="inputBox">
                                    <label for="endereço">Ponto de Referência</label>
                                    <input class="fnInput" placeholder="Digite Aqui">     
                                </div>
                                
                
                                    <div class="fnButton" id="criar__button">
                                         <button>Criar</button>
                                    </div>
                
                                </div>

                                <div id="OS" class="input__group OS">
                                    <div class="osTitle"><h1>OléTv</h1></div>
                                    
                                                    <div class="input__box" id="inputBox">
                                                        <label>Plano</label>
                                                        <select name="plano" class="oleInput">
                                                            <option value="">Selecione</option>
                                                            <option value=" ( X ) LIFE LINE  ( ) START HD  ( ) TOPHD  ( ) PREMIUM HD ">Life Line</option>
                                                            <option value=" (  ) LIFE LINE  ( X ) START HD  ( ) TOPHD ( ) PREMIUM HD ">StarT HD</option>
                                                            <option value=" (  ) LIFE LINE  ( ) START HD  ( X ) TOPHD ( ) PREMIUM HD ">TOP HD</option>
                                                            <option value=" (  ) LIFE LINE  ( ) START HD  (  ) TOPHD ( X ) PREMIUM HD ">Premium HD</option>
                                                        </select>
                                                    </div>
                                                    <div class="input__box" id="inputBox">
                                                        <label for="plano">Vencimento</label>
                                                        <select name="plano" class="oleInput">
                                                            <option value="">Selecione</option>
                                                            <option value="( X ) 1      (  ) 5      (  ) 10 ">Dia 1</option>
                                                            <option value=" (  ) 1      ( X ) 5      (  ) 10 ">Dia 5</option>
                                                            <option value=" (  ) 1      (  ) 5      ( X ) 10 ">Dia 10</option>
                                                        </select>   
                                                        
                                                    </div>
    
                                                    <div class="input__box" id="inputBox">
                                                        <label for="plano">Deseja Antecipar</label>
                                                        <select name="plano" class="oleInput" >
                                                            <option value="">Selecione</option>
                                                            <option value="( X ) SIM   ( ) NÃO">Sim</option>
                                                            <option value="(  ) SIM   ( X ) NÃO">Não</option>            
                                                        </select>
                                                    </div>
    
                                                    
                                        
                                                    
                                    
                                   
                                    <div class="input__box" id="inputBox">
                                        <label for="contato">Contato</label>
                                        <input class="oleInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                    </div>
                
                                    <div class="input__box" id="inputBox">
                                        <label for="contato2">Contato 2</label>
                                        <input class="oleInput"type="text" name="contato2" placeholder="(00)00000-0000">    
                                    </div>
                    
                                    <div class="input__box" id="inputBox">
                                        <label for="agendamento">Data de Agendamento</label>
                                        
                                        <input class="oleInput"type="date" name="agendamento" pattern="dd-mm">    
                                    </div>
                                    

                                    <div class="input__box obs" id="inputBox">
                                        <label for="endereço">Ponto de Referência</label>
                                        <input class="oleInput" placeholder="Digite Aqui">     
                                    </div>
                                    <div class="input__box  obs" id="inputBox">
                                        <label for="endereço">OBS: </label>
                                        <input class="oleInput" placeholder="Digite Aqui">     
                                    </div>
                    
                                        <div class="oleButton" id="criar__button">
                                             <button>Criar</button>
                                        </div>
                    
                                    </div>
           </div>
        
        </div>
    </div>

    <div class="dkMode">
        <i class="fa-solid fa-toggle-off " id="dkIcon"></i>
    </div>

    <div class="logout__button">
        <button type="submit"><a href="logout.php"><i class="fa-solid fa-arrow-right-from-bracket"></i></a></button>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="Javascript/Global.js"></script>
    
</body>
</html>