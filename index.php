<?php
header('Access-Control-Allow-Origin: *');

if (isset($_POST)) {

    // connect to db
    $connection = mysqli_connect("localhost", "user", "root", "my_db");

    // check connection
    if (!$connection) {
        echo "connectionConnection Error" . mysqli_connect_error();
    }

    $op = $_POST["op"];
    $firstName = $_POST["firstname"];
    $lastName = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($op === "login") {

        $sql = 'select * from user_info where email="' . $email . '" and password="' . $password . '"';

        $q = mysqli_query($connection, $sql);

        $result = mysqli_fetch_all($q, MYSQLI_ASSOC);

        print_r($result);
        header('Content-Type: application/json');
        echo json_encode($result);

    } else if ($op === "register") {

        $sql = 'insert into user_info (first_name, last_name, email, password)
                values("' . $firstName . '", "' . $lastName . '", "' . $email . '", "' . $password . '")';

        $q = mysqli_query($connection, $sql);
        mysqli_close($connection);
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode("true");
        die();
        
    }

    echo "\n\n\n";
    print_r($_POST);

    die();
}

die();
