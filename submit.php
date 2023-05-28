<?php
// Отримуємо дані з POST-запиту
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Підключаємося до бази даних
$servername = "localhost"; 
$username = "id20818957_admin";
$password = "Web2023_";
$dbname = "id20818957_feedback";

$conn = new mysqli($servername, $username, $password, $dbname);

// Перевіряємо з'єднання з базою даних
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Готуємо і виконуємо запит INSERT
$stmt = $conn->prepare("INSERT INTO feedback (Name, Email, Message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

// Перевіряємо успішність виконання запиту
if ($stmt->affected_rows > 0) {
    // Дані успішно збережено
    http_response_code(200);
} else {
    // Помилка під час збереження даних
    http_response_code(500);
}

$stmt->close();
$conn->close();
?>