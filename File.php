<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    exit("Invalid Request");
}

function clean($data){
    return htmlspecialchars(strip_tags(trim($data)));
}

$first = clean($_POST['first_name']);
$last = clean($_POST['last_name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = clean($_POST['phone']);
$service = clean($_POST['service']);
$message = clean($_POST['message']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid Email Address");
}

$to = "css-030-22@must.ac.mw";      // YOUR EMAIL

$subject = "New PaintArch Quote Request";

$body = "
You have received a new enquiry.

First Name: $first

Last Name: $last

Email: $email

Phone: $phone

Service: $service

Project Details:

$message
";

$headers  = "From: PaintArch Website <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if(mail($to,$subject,$body,$headers)){
    echo "<script>
    alert('Message sent successfully.');
    window.location='index.html';
    </script>";
}else{
    echo "<script>
    alert('Failed to send message.');
    history.back();
    </script>";
}
?>