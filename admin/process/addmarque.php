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

$response = array(
    'status' => 0,
    'message' => 'Erreur d\'envoi des données'
);

extract($_POST);

$state = addMarque($nmarque);
if ($state) {
    $response['status'] = 1;
    $response['message'] = 'Marque ajoutée avec succée';
} else {
    $response['message'] = 'Erreur d\'ajout';
}

echo json_encode($response);
