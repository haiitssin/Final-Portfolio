<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { //checks to make sure it is using POST method
     
    $name = isset($_POST["name"]) ? htmlspecialchars(trim($_POST["name"])) : ""; // checks and gets rid of white space or spaces in the input, that is what trim() is for i think
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : ""; 
    $message = isset($_POST["message"]) ? htmlspecialchars(trim($_POST["message"])) : ""; //htmlspecialchars is important!! converts special characters to html XSS attacks, more on it below.

    // Check if filled 
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all required fields.";
        exit;
    }

    // checks email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $to = "snommlem@gmail.com"; 
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Sends email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Error: Invalid request.";
}

echo "Hello, World!"; 
//Cross Site Scripting (XSS): if u dont convert some stuff to html//
// people can inject scripts into the page, for example the form i think. then they can steal info, redirect users, and other hacker stuff. //
?>
