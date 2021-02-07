<?php
    // architecture:
    // columns: title content date_posted hash
    require './credentials.php';

    // $conn = mysqli_init();
    // if (!$conn){
    //     die("Init error");
    // }

    // $conn -> ssl_set("key.pem", "cert.pem", NULL, NULL, NULL);

    // if(!$conn -> real_connect($servername, $username, $password, $dbname . 'feed')){
    //     die("Connect error:" . mysqli_connect_error());
    // }

    $conn = new mysqli($servername, $username, $password, $dbname . "feed");

    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }

    $sql = "SELECT * FROM `feed` ORDER BY date_posted DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        $echoresult = "[";

        while ($row = $result->fetch_assoc()){
            $title = html_entity_decode($row['title']);
            $content = html_entity_decode($row['content']);
            $date = $row['date_posted'];
            $hash = $row['hash'];

            $echoresult .= json_encode([
                "title" => $title,
                "content" => $content,
                "date" => $date,
                "hash" => $hash
            ]) . ',';
        }

        $echoresult = rtrim($echoresult, ",");
        $echoresult .= "]";

        echo $echoresult;
    } else {
        echo '0 results';
    }

    $conn->close();
?>