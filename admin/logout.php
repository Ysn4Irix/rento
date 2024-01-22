<?php
session_start();
$_SESSION["admin"] = null;
unset($_SESSION["admin"]);
session_unset();
session_destroy();
header("location:/admin/auth");
