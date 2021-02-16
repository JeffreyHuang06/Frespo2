<?php
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    require './checkLogin.php';

    $usr = $_POST['username'];
    $pwd = $_POST['pwd'];

    $res = json_decode(checkLogin($usr, $pwd));
    if ($res->isadmin != "1"){
        echo false;
        die();
    }

    require "./credentials.php";

    $conn2 = new mysqli($servername, $username, $password, $dbname . "feed");

    if ($conn2->connect_error) {
        die("Connection failed:" . $conn2->connect_error);
    }

    $title = $_POST['title'];
    $content = $_POST['content'];
    $hash = $_POST['hash'];
    $whom = $_POST['whom'];

    $sql = "DELETE FROM `feed` WHERE title='$title' AND content='$content' AND hash='$hash' AND whom='$whom'";
    $result = $conn2->query($sql);

    echo $result;

    $conn2->close();
?>