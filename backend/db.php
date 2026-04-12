<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "task_manager", 3307);

if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "DB Connection Failed"
    ]);
    exit();
}
?>