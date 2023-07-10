<?php

if(!isset($_SESSION)){

    session_start();
}

if (!isset($_SESSION['id'])) {
    include 'falhalogin.php';
    die();
}

?>
