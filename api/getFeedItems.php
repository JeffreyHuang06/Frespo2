<?php
    // architecture:
    // columns: title content date_posted hash
    require './credentials.php';

    $conn = new mysqli($servername, $username, $password, $dbname . "feed");

    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }

    $sql = "SELECT * FROM `feed` ORDER BY date_posted DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        $echoresult = "[";
        $hasrows = false;

        while ($row = $result->fetch_assoc()){
            $hasrows = true;

            $title = html_entity_decode($row['title']);
            $content = html_entity_decode($row['content']);
            $date = $row['date_posted'];
            $hash = $row['hash'];
            $whom = $row['whom'];
            $wasadmin = $row['wasadmin'];

            $echoresult .= json_encode([
                "title" => $title,
                "content" => $content,
                "date" => $date,
                "hash" => $hash,
                "whom" => $whom,
                "wasadmin" => $wasadmin
            ]) . ',';
        }

        $echoresult = rtrim($echoresult, ",");
        $echoresult .= "]";

        if ($hasrows) echo $echoresult;
        else echo "null";

    } else {
        echo "null";
    }

    $conn->close();
?>