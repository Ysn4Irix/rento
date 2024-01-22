<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location: ../admin/auth');
}
if (!isset($_POST["action"])) {
    die('No');
}

if (isset($_GET["editvoiture"])) {
    extract($_POST);
    if ($_POST['action'] == 'edit') {
        $state = UpdateCarInfo($VoitureID, $Titre, $nb_porte, $boite_vitesse, $Prix_jour, $Categorie);
    } elseif ($_POST['action'] == 'delete') {
        $state = DeleteCar($VoitureID);
    }
    header('Content-Type: application/json');
    echo json_encode(array('action' => $action, 'result' => $state));
}
