<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (!isset($_SESSION['admin'])) {
    header('location:../admin/auth');
}

$data = getallcontacts();
$counts = countMarques();
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
                                                            Boite de réceptions <span class="badge bg-danger text-danger">
                                                                <?= htmlentities($counts)  ?>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <section class="hidden-xs" id="mail-nav">
                                                <ul class="nav nav-pills nav-stacked no-radius">
                                                    <?php foreach ($data as $value) : ?>
                                                        <li class="active">
                                                            <a href="?id=<?= htmlentities(base64_encode($value['ID'])) ?>" id="link">
                                                                <i class="fa fa-fw fa-file-text"></i>
                                                                Message de <b style="color: black;"><?= htmlentities($value['Email']) ?></b>
                                                            </a>
                                                        </li>
                                                    <?php endforeach; ?>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                </aside>
                                <?php if (isset($_GET['id'])) : ?>
                                    <aside>
                                        <section class="vbox">
                                            <section class="scrollable wrapper">
                                                <form method="GET" action="" accept-charset="UTF-8">
                                                    <section class="panel no-borders">
                                                        <header class="panel-heading">
                                                            <h4 class="font-thin">Details de message</b></h4>
                                                        </header>
                                                        <?php $infos = getcontactinfobyid(base64_decode($_GET['id'])) ?>
                                                        <div class="panel-body" style="height: 220px">
                                                            <div class="form-group pull-in clearfix">
                                                                <div class="col-sm-6">
                                                                    <label>Nom de l'expéditeur</label>
                                                                    <div type="text" class="form-control" style="border-color: black;">
                                                                        <?= htmlentities($infos['Nom'])  ?>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-6">
                                                                    <label>Email de l'expéditeur</label>
                                                                    <div type="text" class="form-control" style="border-color: black;">
                                                                        <?= htmlentities($infos['Email']) ?>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group pull-in clearfix">
                                                                <div class="block" style="margin: 15px;">
                                                                    <label>Message</label>
                                                                    <div type="text" class="form-control" style="border-color: black; height: 100px;">
                                                                        <?= htmlentities($infos['Message'])  ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br>
                                                        <footer class="panel-footer text-right bg-light lter">
                                                            <input class="btn btn-primary btn-s-xs trigger" type="button" name="maj" value="Répondre">
                                                        </footer>
                                                    </section>
                                                </form>
                                            </section>
                                        </section>
                                    </aside>
                                    <div id="modal" data-iziModal-fullscreen="false" data-iziModal-title="Réponder au messsage" data-iziModal-subtitle=" Veuillez remplir le formulaire suivant" data-iziModal-icon="icon-mail" hidden>
                                        <form id="send">
                                            <section class="panel no-borders">
                                                <div>
                                                    <div>
                                                        <div class="form-group" style="padding: 30px;">
                                                            <label>Votre message</label>
                                                            <textarea class="form-control" name="msg" id="msg" cols="30" rows="10" data-validation="required"></textarea>
                                                            <input type="hidden" name="Email" value="<?= htmlentities($infos['Email']) ?>">
                                                            <input type="hidden" name="Nom" value="<?= htmlentities($infos['Nom']) ?>">
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <footer class="panel-footer text-right bg-light lter">
                                                <input id="env" class="btn btn-primary btn-s-xs btn-block" type="submit" value="Envoyer" name="env">
                                            </footer>
                                        </form>
                                    </div>
                                <?php endif; ?>

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
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/iziToast.min.js"></script>
    <script src="assets/js/iziModal.min.js"></script>
    <script src="assets/js/jquery.form-validator.min.js"></script>
    <script src="assets/js/toggleDisabled.js"></script>
    <script src="assets/js/security.js"></script>
    <script>
        $("#modal").iziModal({
            headerColor: "#545ca6",
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
        $("#send").on('submit', function(e) {
            e.preventDefault();
            $.ajax({
                url: '../admin/process/sendreply',
                type: 'POST',
                data: new FormData(this),
                dataType: 'json',
                contentType: false,
                cache: false,
                processData: false,
                beforeSend: function() {
                    $('#env').attr("disabled", "disabled");
                    $('#send').css("opacity", ".5");
                },
                success: function(response) {
                    if (response.status == 1) {
                        $('#send')[0].reset();
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
                    $('#send').css("opacity", "");
                    $("#env").removeAttr("disabled");
                }
            });
        });
    </script>
    <div id="flotTip" style="display: none; position: absolute;"></div>
</body>

</html>