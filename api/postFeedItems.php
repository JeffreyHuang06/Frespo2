<?php
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if ($_POST){

        http_response_code(200);

        echo json_encode([
            "title" => $_POST['title'],
            "content" => $_POST['content']
        ]);
        
    } else {
        echo "error: invalid form input";
    }
?>