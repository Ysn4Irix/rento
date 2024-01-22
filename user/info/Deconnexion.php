<?php
session_start();
$_SESSION["user"] = null;
unset($_SESSION["user"]);
session_unset();
session_destroy();
header("location:/user/auth/signin");