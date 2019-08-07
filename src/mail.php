<?php

$data = $_POST;
echo json_encode($data, JSON_UNESCAPED_UNICODE);

// несколько получателей
$to  = 'sashheka@gmail.com';  // обратите внимание на запятую

// тема письма
$subject = 'Письмо с моего сайта';

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'From: '  . $_POST['username'] . '  ' . $_POST['userphone'] . '  ' . "\r\n";


// Отправляем
mail($to, $subject);

?>