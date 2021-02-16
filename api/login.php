<?php
    require "./checkLogin.php";

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    http_response_code(200);

    $usr = $_POST['username'];
    $pwd = $_POST['pwd'];

    echo checkLogin($usr, $pwd);
?>