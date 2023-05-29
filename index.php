<?php
include('conexao.php');
if(isset($_POST ['usuario']) || isset($_POST['senha'])){
    if(strlen($_POST['usuario'])== 0){
        echo "Preencha Seu Usuario";
    }else if(strlen($_POST['senha']) == 0) {
        echo "Preencha Sua Senha";
    }else{

        $usuario = $mysqli->real_escape_string($_POST['usuario']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código Sql :" .$mysqli ->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1){

            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)){
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['usuario'] = $usuario['usuario'];

            header("Location: adesao.php");

        }else{
            echo "Falha ao Logar! Usuario ou Senha Inválidos ! ";
        }
    }
}

?>


<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="CSS/Login/login.css">
        <link rel="stylesheet" href="CSS/Global.css">
        <title>O.s Generator</title>
    </head>
<body>
    <main class="container" id="container">
        <form  action="" method="POST" class="login__form" id="login__form">
            <div class="form__header">
                <h1>Login</h1>
            </div>

           

            <div class="login__inputs">
                <div class="input__box">
                    <label for="name">Usuário</label>
                    <div class="input__field">
                        <i id="user__icon"class="fa-solid fa-user"></i>
                        <input type="text" id="name" name="usuario">
                    </div>
                    <div class="input__box">
                        <label>Senha</label>
                        <div class="input__field">
                            <i id="password__icon"class="fa-solid fa-key"></i>
                            <input type="password" id="password" name="senha">
                        </div>
                    </div>    
                </div>

                <div class="forgot__password">
                    <a href="#">
                        Esqueceu a Senha ?
                    </a>

                </div>
            </div>
            <button id="login__button" type="submit">Entrar</button>
        </form>
    </main>
    
</body>
    <script src="JAVASCRIPT/login.js"></script>
</html>