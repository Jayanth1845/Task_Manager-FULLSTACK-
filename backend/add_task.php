<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'];
$title = $data['task_title'];

$conn->query("INSERT INTO tasks (user_id, task_title) VALUES ('$user_id','$title')");

echo json_encode(["status"=>"success"]);
?>