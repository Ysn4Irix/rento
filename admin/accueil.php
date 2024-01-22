<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

$counts = counts();
$data = totalreservationpermonth();

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}
?>

<html lang="en" class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios">

<head>
    <meta charset="utf-8" />
    <title>Admin - Rento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="assets/css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/nprogress.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" href="assets/img/favicon.ico" />
</head>

<body data-gr-c-s-loaded="true">
    <section class="vbox">
        <!-- header here -->
        <?php include_once('../admin/layouts/header.php'); ?>
        <section>
            <section id="main" class="hbox stretch">
                <!-- aside here -->
                <?php include_once('../admin/layouts/aside.php'); ?>
                <section id="content">
                    <section class="vbox">
                        <!-- content here-->
                        <section class="scrollable padder">
                            <div class="row wrapper text-center">
                                <div class="col-xs-6 col-md-3 b-r b-light">
                                    <span class="h3 text-danger font-bold m-t m-b-xs block"><?= htmlentities($counts['users']) ?></span>
                                    <small class="h5 text-muted m-b block">Utilisateurs</small>
                                </div>
                                <div class="col-xs-6 col-md-3 b-r b-light">
                                    <span class="h3 text-danger font-bold m-t m-b-xs block"><?= htmlentities($counts['cars']) ?></span>
                                    <small class="h5 text-muted m-b block">Voitures en stock</small>
                                </div>
                                <div class="col-xs-6 col-md-3 b-r b-light">
                                    <span class="h3 text-danger font-bold m-t m-b-xs block"><?= htmlentities($counts['reservations']) ?></span>
                                    <small class="h5 text-muted m-b block">Réservations</small>
                                </div>
                                <div class="col-xs-6 col-md-3">
                                    <span class="h3 text-success font-bold m-t m-b-xs block"><?= htmlentities($counts['marques']) ?></span>
                                    <small class="h5 text-muted m-b block">Marques de voiture</small>
                                </div>
                            </div>
                            <section class="panel no-borders">
                                <header class="panel-heading">
                                    <h4 class="font-thin">Statistics | Total Réservations Par Mois</h4>
                                </header>
                                <div class="panel-body">
                                    <div id="home-stats" class="m-b-xl hidden-xs" style="height: 250px; padding: 0; position: relative;">
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
                <aside class="bg-light lter b-l aside-md hide" id="notes">
                    <div class="wrapper">Notification</div>
                </aside>
            </section>
        </section>
    </section>
    <script>
        var reservationsLineChart = [{
            "label": "Réservartion",
            "data": [
                <?php 
                if (is_array($data) || is_object($data)):
                    foreach ($data as $item) :
                        echo '[' . $item['Mois de reservation'] . ',' . $item['nb_réservation'] . ']' . ',';
                    endforeach;
                endif;
                ?>
            ]
        }];
    </script>
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/iziToast.min.js"></script>
    <script src="assets/plugins/Chart.min.js"></script>
    <script src="assets/js/app.js"></script>
    <div id="flotTip" style="display: none; position: absolute;"></div>
</body>

</html>