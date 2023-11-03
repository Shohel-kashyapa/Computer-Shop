<?php

include_once 'config.php';


$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$c_password = $_POST['c_password'];
$user_type = $_POST['user_type'];

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$hashedCPassword = password_hash($c_password, PASSWORD_DEFAULT);

$sql = "INSERT INTO user (name, email, password,c_password, user_type) VALUES ('$name', '$email', '$hashedPassword', '$hashedCPassword','$user_type')";

if ($conn->query($sql) === TRUE) {
    header("Location: login.php");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>