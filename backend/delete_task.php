<?php
include "db.php";

$id = $_GET['id'];

$conn->query("DELETE FROM tasks WHERE id='$id'");

echo json_encode(["status"=>"deleted"]);
?>