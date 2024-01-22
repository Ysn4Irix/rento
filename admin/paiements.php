<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}

$data = getallpaiements();
$marques = getallcarsPermarque();
$allmarques = getallmarque();
?>

<html lang="en" class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios">

<head>
    <meta charset="utf-8" />
    <title>Paiements - Rento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="assets/css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/nprogress.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" />
    <link rel="stylesheet" href="assets/css/iziModal.min.css" />
    <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" href="assets/img/favicon.ico" />
</head>

<body>
    <section class="vbox">
        <!-- header here -->
        <?php include_once('../admin/layouts/header.php'); ?>
        <section>
            <section id="main" class="hbox stretch">
                <!-- aside here -->
                <?php include_once('../admin/layouts/aside.php'); ?>
                <section id="content" style="padding-bottom: 50px">
                    <section class="vbox">
                        <div id="divs" class="dashboard-main-wrapper">
                            <div class="dashboard-wrapper">
                                <div class="container-fluid  dashboard-content">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <div class="mb-0 w-100 text-center font-bold alert alert-info">
                                                        <h3>Listes des informations de paiement</h3>
                                                    </div>
                                                    <br>
                                                </div>
                                            </div>

                                            <div class="card-body" style="margin-bottom: 30px;">
                                                <div class="table-responsive">
                                                    <table id="table" class="table table-striped table-bordered table-hover font-bold" style="font-size: 10pt;">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">PaiementID</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nom d'utilisateur</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">ReservationID</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Numéro Carte</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nom carte</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Année</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Mois</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">CVV</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Adresse paiement</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date d'ajoute</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <?php foreach ($data as $item) : ?>
                                                                <tr>
                                                                    <td class="text-center"><?= htmlentities($item['PaiementID']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Username']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['ReservationID']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Numero_carte']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Nom_carte']) ?> </td>
                                                                    <td class="text-center"><?= htmlentities($item['Annee_carte']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Mois_carte']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Cvv']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Paiement_Adresse']) ?></td>
                                                                    <td style="width:100px"><?= date_format(new DateTime(htmlentities($item['Creation_date'])), 'd/m/y') ?></td>
                                                                </tr>
                                                            <?php endforeach; ?>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/plugins/jquery.dataTables.min.js"></script>
    <script src="assets/plugins/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
    <script src="assets/plugins/buttons.bootstrap4.min.js"></script>
    <script src="assets/plugins/jquery.slimscroll.min.js"></script>
    <script>
        $(document).ready(function() {
            $(function() {
                $('#content').slimScroll({
                    height: '600px',
                    alwaysVisible: false
                });
            });

            $('#table').dataTable({
                dom: 'Bfrtip',
                responsive: true,
                pageLength: 5,
                paging: true,
                buttons: [
                    'copy', 'excel', 'pdf'
                ],
                language: {
                    "url": "assets/plugins/French.json",
                },
            });
        });
    </script>
    <div id="flotTip" style="display: none; position: absolute;"></div>

</body>

</html>