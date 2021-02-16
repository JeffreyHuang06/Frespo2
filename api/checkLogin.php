<?php
    function checkLogin($u, $p){
        // get the hash and validate
        require_once "credentials.php";

        $conn = new mysqli($servername, $username, $password, $dbname . "users");

        if ($conn->connect_error) {
            die("Login Connection failed: " . $conn->connect_error);
        }

        $usr = html_entity_decode($u);
        $pwd = html_entity_decode($p);
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

        $conn->close();

        return json_encode([
            "valid" => $validated,
            "isadmin" => $isadmin
        ]);
    }
?>