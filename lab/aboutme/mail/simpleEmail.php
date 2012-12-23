<?php

  set_time_limit(120);
  require_once("class.phpmailer.php");

  function smtp_mail ($from_email, $subject, $body, $extra_hdrs, $user_name) {
    $mail = new PHPMailer();
    $mail->IsSMTP(); // send via SMTP
    $mail->Host = "smtp.163.com"; // SMTP servers 注意：好像听说是只有2006年以前申请的163邮箱具有此功能

    $mail->SMTPAuth = true; // turn on SMTP authentication

    $mail->Username = "jiancongxie";     // SMTP username 注意：普通邮件认证不需要加 @域名
    $mail->Password = "xjcong518";       // SMTP password
    $mail->From = "jiancongxie@163.com"; // 发件人邮箱
    $mail->FromName = "机器人";          // 发件人


    $mail->CharSet = "utf-8"; // 这里指定字符集！

    $mail->Encoding = "base64";
    $mail->AddAddress('xjiancong@gmail.com', "Jimco"); // 收件人邮箱和姓名

    $mail->AddReplyTo("jiancongxie@163.com","163.com");
    //$mail->WordWrap = 50; // set word wrap
    $mail->AddAttachment("d:/a.rar", "abc");

    //$mail->AddAttachment("/var/tmp/file.tar.gz"); // attachment
    //$mail->AddAttachment('stat.rar','更改后的名字.rar');
    //$mail->AddAttachment("/tmp/image.jpg", "new.jpg");

    $mail->IsHTML(true); // send as HTML

    // 邮件主题

    $mail->Subject = $subject;
    // 邮件内容

    $mail->Body = '
    <html><head>
    <meta http-equiv="Content-Language" content="zh-cn">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>
    <p>Name: '.$user_name.'</p>
    <p>From: '.$from_email.'</p>
    <p>'.$body.'</p>
    </body>
    </html>';
    $mail->AltBody ="text/html";
    if(!$mail->Send())
    {
      echo "邮件发送有误 <p>";
      echo "邮件错误信息: " . $mail->ErrorInfo;
      echo "{'result': 0, 'message': '发送失败，请确认网络是否正常！'}";
      exit;
    }
    else {
      // echo "$user_name $subject $from_email 感谢你的来信！<br />";
      echo "{'result': 1, 'username': '$user_name', 'email': '$from_email'}";
    }
  }

  if (isset($_POST['email'])) {
    //send email
    $name = $_POST['name'];
    $email = $_POST['email']; 
    $message = $_POST['message'];
    smtp_mail($email, '来自About me的邮件', $message , 'xiejiancnog.com', $name);
  }

?>