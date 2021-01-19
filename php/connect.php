<?php
   //login.php
    $host='10.20.30.10';
    $dbase='sawdust';
    $web_user='webuser';
    $passw='web@me';

    $conn = mysqli_connect($host, $web_user, $passw, $dbase);

    if (!$conn) {
    die('Connection failed: '.mysqli_connect_error());
    }

    // if (!$admin_conn) {
    // die('Connection failed: '.mysqli_connect_error());
    // }
?>