<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$name || !$email || !$password) {
    echo json_encode([
        "status" => "error",
        "message" => "All fields required"
    ]);
    exit();
}

$password = password_hash($password, PASSWORD_DEFAULT);

$check = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($check->num_rows > 0) {
    echo json_encode([
        "status" => "error",
        "message" => "Email already exists"
    ]);
    exit();
}

$sql = "INSERT INTO users (name, email, password) VALUES ('$name','$email','$password')";

if ($conn->query($sql)) {
    echo json_encode([
        "status" => "success",
        "message" => "Registered successfully"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => $conn->error
    ]);
}
?>