<?php 

namespace App\Service;

class MailingService
{
    public function sendMail(Object $mail)
    {
        $formatedMail = [
            'fromName' => $mail->name,
            'fromEmail' => $mail->email,
            'message' => $mail->message,
            'to' => 'https://m.youtube.com/watch?v=dQw4w9WgXcQ'
        ];
        return $formatedMail;
    }
}