<?php
if(isset($_POST['submit'])) {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email address where you want to receive messages
    $to = 'ahmedsadiq365@gmail.com';

    // Email subject
    $email_subject = 'New message from your website';

    // Email message
    $email_message = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Send email
    if(mail($to, $email_subject, $email_message, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>
