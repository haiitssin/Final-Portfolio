<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "haiitssin89@gmail.com";
  $subject = "New Message from Contact Form";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  //idk how this works i just found it
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message. Please try again later.";
  }
} else {
  echo "Error: Invalid request.";
}
?>
