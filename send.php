<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$name = $_POST['name'];}


/* Сюда впишите свою эл. почту */
 $address = "subby88@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тест2 обратная связь  \nТелефон: $phone\nИмя: $name";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ <vpluce.ru>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

header('Location: index.html');
?>