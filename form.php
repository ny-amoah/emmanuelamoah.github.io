<?php
    $name = htmlspecialchars($_POST['name']);
    $senderEmail = htmlspecialchars($_POST['conatactEmail']);
    $subject = htmlspecialchars($_POST['subject']);
    $m = htmlspecialchars($_POST['message']);

    $message = '
        <html>
            <body style="background: black;">
                <h1 style="color: green; text-align: center;">Name</h1>
                <p>'.$name.'</p>
                <h1 style="text-align: center;">Message</h1>
                <p>'.$m.'</p><br />
                <span>Sender Email: '.$senderEmail.'</span><br />
            </body>
        </html>
    ';

    $to = 'emmanuelamoah7919@gmail.com';
    $subject = $_POST['subject'];
    $headers = "From: ".$name." <banyanful@romincorp.com>\r\nContent-type:text/html;charset=utf-8"; 
    if(mail($to, $subject, $message, $headers)){
        $sent = 'sent';
    }
?>

<a href="index.html#contact"></a>
<script>
    <?php if(isset($sent)){ ?>
        alert("Message Sent!");
    <?php }

    else{ ?>
        alert("An error occured. Please try again later.");
    <?php } ?>
    document.getElementsByTagName('a')[0].click();
</script>