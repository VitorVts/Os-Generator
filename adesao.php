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
    
    <title>OS Generator</title>
</head>


<body>

    <div class="container__form">

        <div class="form__img">
            <img src="Img/undraw_contract_re_ves9.svg" >
        </div>
        
        <div class="form">
            <form action="#">
                
            <div class="form__header">
                <div class="form__title">
                    <h1>Crie a Os</h1>
                </div>
                <div class="select__menu">
                    <div class="select__btn">
                        
                        <a class="btn__text">Selecione a OS</a>
            
                    </div>
                    <ul class="options">
                        <li class="option">
                            <a href="adesao.php" class="option__text">Adesão</a>
                            
                        </li>
                        <li class="option">
                            <a href="#" class="option__text">Reparo</a>
                        </li>
                        <li class="option">
                            <a href="#" class="option__text">Cancelamento</a>
                        </li>
                        <li class="option">
                            <a href="#" class="option__text">Mudança de Endereço</a>
                        </li>
                    </ul>
            
                </div>

                <header>
        
    </header>
                
            </div>   
                <div class="input__group">
                    <div class="input__box">
                        <label for="valortaxa">Valor da Taxa</label>
                        <input id="valortaxa"type="text" name="valortaxa" placeholder="R$">    
                    </div>

                    <div class="input__box">
                        <label for="vencimento">Data de vencimento</label>
                        <select name="vencimento" id="vencimento">
                            <option value=""selected>Selecione</option>
                            <option value="Dia1">Dia 1</option>
                            <option value="Dia5">Dia 5</option>
                            <option value="Dia5">Dia10</option>
                        </select>    
                    </div>

                    <div class="input__box">
                        <label for="antecipar">Deseja Antecipar</label>
                        <select name="antecipar" id="antecipar">
                            <option value="">Selecione</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>    
                    </div>
                    
                    <div class="input__box">
                        <label for="agendamento">Data de Agendamento</label>
                        
                        <input id="agendamento"type="date" name="agendamento">    
                    </div>

                    <div class="input__box">
                        <label for="pagamento">Modo de Pagamento</label>
                        <select name="pagamento" id="pagamento">
                        <option value="">Selecione</option>
                        <option value="avista">A Vista</option>
                        <option value="3X">3X</option>
                        <option value="acaodemarketing">Ação de Marketing</option> 
                        </select>   
                    </div>
                    <div class="input__box">
                        <label for="contato">Contato</label>
                        <input id="contato"type="text" name="contato" placeholder="(00)00000-0000">    
                    </div>
                    
                    <div class="input__box">
                        <label for="contato2">Contato 2</label>
                        <input id="contato2"type="text" name="contato2" placeholder="(00)00000-0000">    
                    </div>
                    


                    
                </div>
                <div class="criar__button">
                    <button>Criar</button>
                    </div>
            </form>
        
        </div>
    </div>
    <div class="logout__button">
        <button type="submit"><a href="logout.php">Logout</a></button>
        </div>

    <script src="Javascript/Global.js"></script>
    
</body>
</html>