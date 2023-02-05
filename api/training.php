<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
 
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
 
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT training.*, masters.name FROM training INNER JOIN masters ON masters.id = training.masters_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO training (id, title, lenght, price, master_id) VALUES(null, :title, :lenght, :price, :master_id)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':title', $user->title);
        $stmt->bindParam(':lenght', $user->lenght);
        $stmt->bindParam(':price', $user->price);
        $stmt->bindParam(':master_id', $user->master_id);
 
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
    case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE posts SET title= :title, lenght =:lenght, price =:price, master_id =:master_id WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':title', $user->title);
        $stmt->bindParam(':lenght', $user->lenght);
        $stmt->bindParam(':price', $user->price);
        $stmt->bindParam(':master_id', $user->master_id);
    
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM training WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
    
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);
    
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
    break;
    }


?>