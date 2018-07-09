<?php

$name = $_POST['user-name'];
$email = $_POST['email'];
$message = $_POST['message'];

$delivery = $_POST['delivery'];
$delivery = isset($delivery) ? 'Да' : 'Нет';
$card = $_POST['card'];
$card = isset($card) ? 'Да' : 'Нет';
$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'Нет' : 'Да';

$mail_message = '
    <html>
    <head>
        <title>Сообщение</title>
    </head>
    <body>
        <h2>Сообщение</h2>
        <ul>
            <li><b>Имя:</b>' . $name . '</li>
            <li><b>Емайл:</b>' . $email . '</li>
            <li><b>Сообщение:</b>' . $message . '</li>
        </ul>
    </body>
    </html>';

$headers = "From: Администратор сайта <katya@spiralscout.com>\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('katya@spiralscout.com', 'Сообщение', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Сообщение отправлено";
} else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>