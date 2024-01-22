<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}
if (!isset($_POST["action"])) {
    die('No');
}

if (isset($_GET["edituser"])) {
    extract($_POST);
    if ($_POST['action'] == 'delete') {
        $state = DeleteUser($UserID);
    }
    header('Content-Type: application/json');
    echo json_encode(array('action' => $action, 'result' => $state));
}
