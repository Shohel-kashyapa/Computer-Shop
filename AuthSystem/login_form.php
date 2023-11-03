<?php

include_once 'config.php';

session_start();

$email = $_POST['email'];
$password = $_POST['password'];


$sql = "SELECT * FROM user WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    $email = $row['email'];
    $hashedPassword = $row['password'];
    $user_type = $row['user_type'];


    $_SESSION['email'] = $email;
    $_SESSION['user_type'] = $user_type;


    if (password_verify($password, $hashedPassword)) {
        if ($user_type === 'admin') {
//            echo "admin";
            header("Location: admin_page.php");
            exit;
        } else {
//            echo "user";
            header("Location: ..index.html");
            exit;
        }
        exit;
    } else {
        echo "Invalid password";
    }
} else {
    echo "User not found";
}

$conn->close();
?>