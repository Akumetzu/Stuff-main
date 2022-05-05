<?php

// сюда нужно вписать токен вашего бота
define('TELEGRAM_TOKEN', '5258011916:AAHqdUNSf_INdU8TCNZSiNAVvtvtmRhFIK4');

// сюда нужно вписать ваш внутренний айдишник
define('TELEGRAM_CHATID', '-793226119');

message_to_telegram("Новая заявка с сайта\n\nИмя: {$_POST["name"]} \nКонтакт для связи: {$_POST["contact"]} \nОписание проекта: {$_POST["description"]} \nБюджет: {$_POST["budget"]}");

function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
            ),
        )
    );
    curl_exec($ch);
}

?>