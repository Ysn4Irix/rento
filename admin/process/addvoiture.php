<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location: ../admin/auth');
}
if (!isset($_POST)) {
    die('No');
}

$uploadDir = '../../assets/images/Cars/';
$response = array(
    'status' => 0,
    'message' => 'Erreur d\'envoi des données'
);

extract($_POST);
$uploadedFile = '';
$uploadstatus = 1;

$fileName = basename($_FILES["imagev"]["name"]);
$targetFilePath = $uploadDir . $fileName;

if (move_uploaded_file($_FILES["imagev"]["tmp_name"], $targetFilePath)) {
    $uploadedFile = $fileName;
} else {
    $uploadstatus = 0;
    $response['message'] = 'Erreur de telechargement de fichier';
}

if ($uploadstatus == 1) {
    $state = addVoiture($nvoiture, $marque, $nvalise, $npassagers, $nporte, $uploadedFile, $prix, $categorie, $boitev, $moteur);
    if ($state) {
        $response['status'] = 1;
        $response['message'] = 'Voiture ajoutée avec succée';
    }
}
echo json_encode($response);
