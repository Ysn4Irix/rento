<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}

$data = getallmarque();
$marques = getallcarsPermarque();
?>

<html lang="en" class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios">

<head>
    <meta charset="utf-8" />
    <title>Marques - Rento</title>
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
                                                        <h3>Listes des marques</h3>
                                                    </div>
                                                    <br>
                                                </div>
                                                <input id="addv" class="btn btn-success btn-s-xs trigger" style="margin-bottom: 20px" type="button" name="maj" value="Ajouter une marque">
                                                <div id="modal" data-iziModal-fullscreen="false" data-iziModal-title="Ajouter un nouveau marque" data-iziModal-subtitle=" Veuillez remplir le formulaire suivant" data-iziModal-icon="icon-car" hidden>
                                                    <form id="addmarque">
                                                        <section class="panel no-borders">
                                                            <div>
                                                                <div>
                                                                    <div class="form-group" style="padding: 30px;">
                                                                        <label>Nom de marque</label>
                                                                        <input id="nmarque" type="text" class="form-control" name="nmarque" data-validation="required">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <footer class="panel-footer text-right bg-light lter">
                                                            <input id="ajouter" class="btn btn-success btn-s-xs btn-block" type="submit" value="Ajouter" name="ajouter">
                                                        </footer>
                                                    </form>
                                                </div>
                                            </div>

                                            <div class="card-body" style="margin-bottom: 30px">
                                                <div class="table-responsive">
                                                    <table id="table" class="table table-striped table-bordered table-hover font-bold" style="width:100%;font-size: 10pt;">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">ID</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nom</th>
                                                                <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date d'ajoute</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <?php foreach ($data as $item) : ?>
                                                                <tr>
                                                                    <td class="text-center"><?= htmlentities($item['ID']) ?></td>
                                                                    <td class="text-center"><?= htmlentities($item['Nom']) ?></td>
                                                                    <td class="text-center" style="width:100px"><?= date_format(new DateTime(htmlentities($item['Creation_date'])), 'd/m/y') ?></>
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
                                                        <h3>Nombre des voitures par marque</h3>
                                                    </div>
                                                    <br>
                                                </div>
                                                <div class="card-body" style="margin-bottom: 30px">
                                                    <div class="table-responsive">
                                                        <table id="table" class="table table-striped table-bordered table-hover font-bold" style="width:100%;font-size: 10pt;">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nom de marque</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Nombre des voitures</th>
                                                                    <th class="text-center" style="background-color: #374b5e; color: whitesmoke">Date d'ajoute</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <?php foreach ($marques as $i) : ?>
                                                                    <tr>
                                                                        <td class="text-center"><?= htmlentities($i['Nom']) ?></td>
                                                                        <td class="text-center"><?= htmlentities($i['Nombre des voitures']) ?></td>
                                                                        <td class="text-center"><?= htmlentities($i['Creation_date']) ?></td>
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
    <script src="assets/js/iziModal.min.js"></script>
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
    <script src="assets/js/jquery.form-validator.min.js"></script>
    <script src="assets/js/toggleDisabled.js"></script>
    <script src="assets/js/security.js"></script>
    <script src="assets/js/iziModal.min.js"></script>
    <script>
        $("#modal").iziModal({
            headerColor: "#1ab667",
            radius: 10,
        });
        $(document).on("click", ".trigger", function(event) {
            // $('#modal').iziModal('setZindex', 99999);
            // $('#modal').iziModal('open', { zindex: 99999 });
            $('#modal').removeAttr('hidden');
            $("#modal").iziModal("open");
        });
    </script>
    <script>
        $.validate({
            lang: 'fr'
        });
    </script>
    <script>
        $("#addmarque").on('submit', function(e) {
            e.preventDefault();
            $.ajax({
                url: '../admin/process/addmarque',
                type: 'POST',
                data: new FormData(this),
                dataType: 'json',
                contentType: false,
                cache: false,
                processData: false,
                beforeSend: function() {
                    $('#ajouter').attr("disabled", "disabled");
                    $('#addmarque').css("opacity", ".5");
                },
                success: function(response) {
                    if (response.status == 1) {
                        $('#addmarque')[0].reset();
                        iziToast.success({
                            title: 'Success',
                            message: response.message,
                            position: 'topRight',
                            icon: 'fa fa-check',
                            timeout: 3000,
                            transitionIn: 'bounceInLeft'
                        });
                    } else {
                        iziToast.error({
                            title: 'Error',
                            message: response.message,
                            position: 'topRight',
                            icon: 'fa fa-close',
                            timeout: 3000,
                            transitionIn: 'bounceInLeft'
                        });
                    }
                    $('#addmarque').css("opacity", "");
                    $("#ajouter").removeAttr("disabled");
                }
            });
        });
    </script>
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

        $(function() {
            var processUrl = '../admin/process/pmarque'
            $('#table').Tabledit({
                url: processUrl + '?editmarque',
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
                    identifier: [0, 'ID'],
                    editable: [
                        [1, 'Nom']
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