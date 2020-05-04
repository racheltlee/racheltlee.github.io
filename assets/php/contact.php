<?php
    $name = $_Post['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'racheltlee@berkeley.edu';
    $email_subject = "New Email";
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "rachi821@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
?>