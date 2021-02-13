<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    function writeSQL($t, $c){
        require './credentials.php';

        $conn = new mysqli($servername, $username, $password, $dbname . "feed");

        if ($conn->connect_error) {
            die("Connection failed:" . $conn->connect_error);
        }

        // sanitize mailicous code
        $t = nl2br(htmlentities($t, ENT_QUOTES));
        $c = nl2br(htmlentities($c, ENT_QUOTES));
        $date = date("Y-m-d H:i:s");
        $hash = hash('sha256', $t . $c . $date);

        $stmt = $conn->prepare("INSERT INTO feed VALUES (?,?,?,?)");
        $stmt->bind_param("ssss", $t, $c, $date, $hash);
        $worked = $stmt->execute();

        $conn->close();

        echo $worked ? "true" : "false";
    }

    if ($_POST){

        http_response_code(200);

        $title = $_POST['title'];
        $content = $_POST['content'];

        writeSQL($title, $content);
        
    } else {
        echo "error: invalid form input";
    }
?>