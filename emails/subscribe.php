<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// --- CONFIGURATION START ---
$recipient_email = 'contact.iconicinnovations@gmail.com';

$smtp_config = [
    'host'     => 'smtp.gmail.com',
    'username' => 'contact.iconicinnovations@gmail.com',
    'password' => 'ilngwfpleejzuetu', // Your Gmail App Password
    'port'     => 587,
    'secure'   => PHPMailer::ENCRYPTION_STARTTLS,
    'sender_address' => 'contact.iconicinnovations@gmail.com',
    'sender_name' => 'Website Contact Form'
];
// --- CONFIGURATION END ---

// 1. Ensure the request method is POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed. This script only processes POST requests.");
}

// 2. Initialize an array for errors
$errors = [];

// 3. Validation and Sanitization

// A. Name
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
if (empty($name)) {
    $errors[] = "Name is required.";
}

// B. Email
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "A valid email address is required.";
}



// D. Subject (COMMENTED OUT)
// $subject_title = isset($_POST['title']) ? trim(strip_tags($_POST['title'])) : '';
// if (empty($subject_title)) {
//     $errors[] = "Subject (Title) is required.";
// }
// $email_subject = "New Contact from Website: " . $subject_title;

// Since we commented out subject, we’ll use a fixed subject
$email_subject = "New Email Subscriber from Website";


// 4. Stop if there are validation errors
if (!empty($errors)) {
    http_response_code(400);
    exit("Error: " . implode(" ", $errors));
}

// 5. Construct the Email Body
$email_body  = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: {$name}\n";
$email_body .= "Email: {$email}\n";


// 6. Send Email with PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtp_config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_config['username'];
    $mail->Password   = $smtp_config['password'];
    $mail->SMTPSecure = $smtp_config['secure'];
    $mail->Port       = $smtp_config['port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($smtp_config['sender_address'], $smtp_config['sender_name']);
    $mail->addAddress($recipient_email);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = $email_subject;
    $mail->Body    = $email_body;

    $mail->send();

    http_response_code(200);
    echo "<script>

        // alert('Thank you, {$name}. Your email subscription is successful!');
        
        window.history.back(); // Go back to the page where the form was submitted
        </script>";
    exit;


} catch (Exception $e) {
    http_response_code(500);
    error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    echo "Sorry, your message could not be sent. Please try again later. (Error: {$e->getMessage()})";
}
?>
