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
        $sql = "SELECT * FROM regservices";
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
        $sql = "INSERT INTO regservices (id, user_id, category_id, services_id, masters_id, date, time) VALUES(null, :user_id, :category_id, :services_id, :masters_id, :date, :time)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':category_id', $user->category_id);
        $stmt->bindParam(':services_id', $user->services_id);
        $stmt->bindParam(':masters_id', $user->masters_id);
        $stmt->bindParam(':date', $user->date);
        $stmt->bindParam(':time', $user->time);
 
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
    case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE regservices SET user_id= :user_id, category_id =:category_id, services_id =:services_id, masters_id =:masters_id, data =:data, time =:time WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':category_id', $user->category_id);
        $stmt->bindParam(':services_id', $user->services_id);
        $stmt->bindParam(':masters_id', $user->masters_id);
        $stmt->bindParam(':data', $user->data);
        $stmt->bindParam(':time', $user->time);
    
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM regservices WHERE id = :id";
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