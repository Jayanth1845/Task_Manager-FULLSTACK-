<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$status = $data->status;

$conn->query("UPDATE tasks SET status='$status' WHERE id='$id'");

echo json_encode(["message" => "Updated"]);
?>