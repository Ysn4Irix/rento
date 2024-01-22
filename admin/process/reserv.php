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

if (isset($_GET["editreserv"])) {
    extract($_POST);
    if ($_POST['action'] == 'edit') {
        $state = UpdateRervationStatus($reservationID, $Status);
    } elseif ($_POST['action'] == 'delete') {
        $state = DeleteReservation($reservationID);
    }
    header('Content-Type: application/json');
    echo json_encode(array('action' => $action, 'result' => $state));
}
