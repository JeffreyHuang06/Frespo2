<?php
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    http_response_code(200);

    // get the hash and validate
    require_once "credentials.php";

    $conn = new mysqli($servername, $username, $password, $dbname . "users");

    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }

    $usr = html_entity_decode($_POST["username"]);
    $pwd = html_entity_decode($_POST["pwd"]);
    $pwdhashed = hash('sha256', $pwd);

    $sql = "SELECT * FROM `users` WHERE name='$usr'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1){
        $row = $result->fetch_assoc();
    } else {
        echo $result->num_rows;
    }

    $validated = false;
    $isadmin = "none";
    if ($pwdhashed == $row['pwd']){
        $validated = true;
        $isadmin = $row['admin'];
    }

    echo json_encode([
        "valid" => $validated,
        "isadmin" => $isadmin
    ]);

    $conn->close();
?>