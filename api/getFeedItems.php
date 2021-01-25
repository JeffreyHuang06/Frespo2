<?php
    // architecture:
    // columns: title content date_posted hash
    require './credentials.php';

    $conn = new mysqli($servername, $username, $password, $dbname . 'feed');

    if ($conn->connect_error){
        echo $conn->connect_error;
        die("Connection failed" . $conn->connect_error);
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
                "school" => $title,
                "content" => $content,
                "date" => $date,
                "hash" => $hash
            ]) . ',';
        }

        $echoresult .= "]";

        echo $echoresult;
    } else {
        echo '0 results';
    }

    $conn->close();
?>