<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}

$data = getallreservations();
$dataclt = getallreservationsPerClients();
?>

<html lang="en" class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios">

<head>
    <meta charset="utf-8" />
    <title>Réservations - Rento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="assets/css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/nprogress.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" />
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
                                                        <h3>Listes des réservations</h3>
                                                    </div>
                                                    <br>
                                                </div>
                                                <div class="card-body" style="margin-bottom: 30px">
                                                    <div class="table-responsive">
                                                        <table id="table" class="table table-striped table-bordered table-hover font-bold" style="width:100%;font-size: 10pt;">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">ReserID</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">User Email</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke;width: 150px">Nom voiture</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date début</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date fin</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Prix total</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Status</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Réservation Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <?php foreach ($data as $item) : ?>
                                                                    <tr>
                                                                        <td><?= htmlentities($item['reservationID']) ?></td>
                                                                        <td><?= htmlentities($item['Email']) ?></td>
                                                                        <td><?= htmlentities($item['Titre']) ?></td>
                                                                        <td style="width:100px"><?= date_format(new DateTime(htmlentities($item['Date_debut'])), 'd/m/y') ?></td>
                                                                        <td style="width:100px"><?= date_format(new DateTime(htmlentities($item['Date_fin'])), 'd/m/y') ?></td>
                                                                        <td><?= htmlentities($item['Prix_total']) ?> DH</td>
                                                                        <td><?= htmlentities($item['Status']) ?></td>
                                                                        <td style="width:100px"><?= date_format(new DateTime(htmlentities($item['Reservation_date'])), 'd/m/y') ?></td>
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
                        </div>
                        <div class="dashboard-main-wrapper">
                            <div class="dashboard-wrapper">
                                <div class="container-fluid  dashboard-content">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <div class="mb-0 w-100 text-center font-bold alert alert-info">
                                                        <h3>Nombre des réservations par client</h3>
                                                    </div>
                                                    <br>
                                                </div>
                                                <div class="card-body" style="margin-bottom: 30px">
                                                    <div class="table-responsive">
                                                        <table id="table" class="table table-striped table-bordered table-hover font-bold" style="width:100%;font-size: 10pt;">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nom d'utilisateur</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">User Email</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nombre des réservations</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date de réservation</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <?php foreach ($dataclt as $i) : ?>
                                                                    <tr>
                                                                        <td class="text-center"><?= htmlentities($i['Username']) ?></td>
                                                                        <td class="text-center"><?= htmlentities($i['Email']) ?></td>
                                                                        <td class="text-center"><?= htmlentities($i['Nombre des réservations']) ?></td>
                                                                        <td class="text-center" style="width:80px"><?= htmlentities($i['Reservation_date']) ?></td>
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
                        </div>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/iziToast.min.js"></script>
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
    <script src="assets/plugins/jquery.tabledit.min.js"></script>
    <script src="assets/plugins/jquery.slimscroll.min.js"></script>
    <script>
        $(document).ready(function() {
            $(function() {
                $('#content').slimScroll({
                    height: '500px',
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

        $(function() {
            var processUrl = '../admin/process/reserv'
            $('#table').Tabledit({
                url: processUrl + '?editreserv',
                serverSide: true,
                restoreButton: false,
                hideIdentifier: true,
                processing: true,
                paging: true,
                buttons: {
                    edit: {
                        class: 'btn btn-sm btn-primary',
                        html: '<span class="fa fa-pen"></span>',
                        action: 'edit'
                    },
                    delete: {
                        class: 'btn btn-sm btn-danger',
                        html: '<span class="fa fa-trash"></span>',
                        action: 'delete'
                    },
                    save: {
                        class: 'btn btn-sm btn-success',
                        html: '<span class="fa fa-save"></span>',
                        action: 'save'
                    },
                    confirm: {
                        class: 'btn btn-sm btn-danger',
                        html: 'Confirmer ?',
                    },
                },
                columns: {
                    identifier: [0, 'reservationID'],
                    editable: [
                        [6, 'Status', '{"En Attende": "En Attende", "Accepté": "Accepté", "Refusée": "Refusée"}']
                    ]
                },
                onSuccess: function(data, textStatus, jqXHR) {
                    if (data.result) {
                        iziToast.success({
                            title: 'Success',
                            message: 'Modification enregistrée avec succès.',
                            position: 'topRight',
                            icon: 'fa fa-check',
                            timeout: 3000,
                            transitionIn: 'bounceInLeft'
                        });
                    } else {
                        iziToast.error({
                            title: 'Error',
                            message: 'Modification non enregistrée.',
                            position: 'topRight',
                            icon: 'fa fa-close',
                            timeout: 3000,
                            transitionIn: 'bounceInLeft'
                        });
                    }
                },
                onFail: function(jqXHR, textStatus, errorThrown) {
                    iziToast.error({
                        title: 'Error',
                        message: 'Modification non enregistrée.',
                        position: 'topRight',
                        icon: 'fa fa-close',
                        timeout: 3000,
                        transitionIn: 'bounceInLeft'
                    });
                },
            });
        });
    </script>
    <div id="flotTip" style="display: none; position: absolute;"></div>

</body>

</html>