<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}

$data = getallsubsEmails();
?>
<html lang="en" class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios">

<head>
    <meta charset="utf-8" />
    <title>Contacts - Rento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="assets/css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/nprogress.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" />
    <link rel="stylesheet" href="assets/css/iziModal.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" href="assets/img/favicon.ico" />
</head>

<body data-gr-c-s-loaded="true">
    <section class="vbox">
        <!-- header here -->
        <?php include_once('layouts/header.php'); ?>
        <section>
            <section id="main" class="hbox stretch">
                <!-- aside here -->
                <?php include_once('layouts/aside.php'); ?>
                <section id="content">
                    <section class="vbox">
                        <section class="scrollable">
                            <section class="hbox stretch">
                                <aside class="aside-xl bg-light">
                                    <section class="vbox">
                                        <section class="scrollable">
                                            <div class="wrapper">
                                                <div class="clearfix">
                                                    <a href="#" class="pull-left thumb m-r">
                                                        <img src="assets/img/envelope.svg" class="img-circle" alt="admin" />
                                                    </a>
                                                    <div class="clear">
                                                        <div class="h4 m-t-xs m-b-xs font-thin" style="margin-top: 15px;">
                                                            Liste des emails inscrits à la newsletter
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <section class="hidden-xs" id="mail-nav" style="margin: 15px;">
                                                <table class="table table-hover table-bordered">
                                                    <thead>
                                                        <tr class="bg-dark">
                                                            <th scope="col">#</th>
                                                            <th scope="col">Adresse email</th>
                                                            <th scope="col">Date d'abonnement</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php foreach ($data as $value) : ?>
                                                            <tr style="font-weight: bolder;">
                                                                <th><?= htmlentities($value['ID']) ?></th>
                                                                <td><?= htmlentities($value['Abonne_email']) ?></td>
                                                                <td><?= htmlentities($value['Creation_date']) ?></td>
                                                            </tr>
                                                        <?php endforeach; ?>
                                                    </tbody>
                                                </table>
                                            </section>
                                        </section>
                                    </section>
                                </aside>
                            </section>
                        </section>
                        <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
                    </section>
                </section>
                <aside class="bg-light lter b-l aside-md hide" id="notes">
                    <div class="wrapper">Notification</div>
                </aside>
            </section>
        </section>
    </section>
    <script src="assets/js/app.js"></script>
    <scripts src="assets/js/jquery-1.11.3.min.js"></scripts>
    <div id="flotTip" style="display: none; position: absolute;"></div>
</body>

</html>