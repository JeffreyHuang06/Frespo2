<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    function writeSQL($t, $c, $w, $wa){
        require './credentials.php';

        $conn = new mysqli($servername, $username, $password, $dbname . "feed");

        if ($conn->connect_error) {
            die("Connection failed:" . $conn->connect_error);
        }

        // sanitize mailicous code
        $t = nl2br(htmlentities($t, ENT_QUOTES));
        $c = nl2br(htmlentities($c, ENT_QUOTES));
        $w = nl2br(htmlentities($w, ENT_QUOTES));
        $date = date("Y-m-d H:i:s");
        $hash = hash('sha256', $t . $c . $date);

        $stmt = $conn->prepare("INSERT INTO feed VALUES (?,?,?,?,?,?)");
        $stmt->bind_param("sssssi", $t, $c, $date, $hash, $w, $wa);
        $worked = $stmt->execute();

        $conn->close();

        echo $worked;
    }

    if ($_POST){

        http_response_code(200);

        $title = $_POST['title'];
        $content = $_POST['content'];
        $whom = $_POST['whom'];
        $wasadmin = $_POST['wasadmin'];

        writeSQL($title, $content, $whom, $wasadmin);
        
    } else {
        echo "error: invalid form input";
    }
?>