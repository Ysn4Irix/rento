<?php
session_start();
include_once('../includes/dbcnx.php');
include_once('../includes/dbfunctions.php');

if (isset($_POST['maj'])) {
    $check = UpdatePassAdmin($_POST['ancien_pass'], $_POST['pass'], $_SESSION['admin']['id']);
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
        <?php include_once('layouts/header.php'); ?>
        <section>
            <section id="main" class="hbox stretch">
                <!-- aside here -->
                <?php include_once('layouts/aside.php'); ?>
                <section id="content">
                    <section class="vbox">
                        <section class="scrollable">
                            <section class="hbox stretch">
                                <aside class="aside-lg bg-light">
                                    <section class="vbox">
                                        <section class="scrollable">
                                            <div class="wrapper">
                                                <div class="clearfix">
                                                    <a href="#" class="pull-left thumb m-r">
                                                        <img src="assets/img/administrator.svg" class="img-circle" alt="admin" />
                                                    </a>

                                                    <div class="clear">
                                                        <div class="h3 m-t-xs m-b-xs font-thin">
                                                            <?= htmlentities($_SESSION['admin']['username']) ?>
                                                        </div>
                                                        <small class="text-muted">
                                                            <i class="fa fa-envelope"></i>
                                                            <?= htmlentities($_SESSION['admin']['email']) ?>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <section class="hidden-xs" id="mail-nav">
                                                <ul class="nav nav-pills nav-stacked no-radius">
                                                    <li>
                                                        <a href="profile">
                                                            <i class="fa fa-fw fa-file-text"></i>
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li class="active">
                                                        <a href="change-password">
                                                            <i class="fa fa-fw fa-key"></i>
                                                            Changer Mot de passe
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="change-email">
                                                            <i class="fa fa-fw fa-envelope"></i>
                                                            Changer Email
                                                        </a>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                </aside>
                                <aside>
                                    <section class="vbox">
                                        <section class="scrollable wrapper">
                                            <form method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>" accept-charset="UTF-8">
                                                <section class="panel no-borders">
                                                    <header class="panel-heading">
                                                        <h4 class="font-thin">
                                                            Changement de <b>Mot de passe</b>
                                                        </h4>
                                                    </header>
                                                    <div class="panel-body">
                                                        <div class="form-group">

                                                            <label>Ancien mot de passe</label>
                                                            <input type="password" class="form-control" name="ancien_pass" data-validation="required">
                                                        </div>
                                                        <div class="line line-dashed line-lg pull-in"></div>
                                                        <div class="form-group">
                                                            <label>Nouveau mot de passe</label>
                                                            <input type="password" class="form-control" name="pass_confirmation" data-validation="length" data-validation-length="min8">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Comfirmer mot de passe</label>
                                                            <input type="password" class="form-control" name="pass" data-validation="confirmation">
                                                        </div>
                                                    </div>
                                                    <footer class="panel-footer text-right bg-light lter">
                                                        <input class="btn btn-success btn-s-xs" type="submit" name="maj" value="Mise à jour">
                                                    </footer>
                                                </section>
                                            </form>
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
    <script src="assets/js/iziToast.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/jquery.form-validator.min.js"></script>
    <script src="assets/js/toggleDisabled.js"></script>
    <script src="assets/js/security.js"></script>
    <?php
    if (isset($_POST['maj'])) {
        if (!$check) {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Ancien mot de passe incorrect !!\',
                position: \'topRight\',
                icon: \'fa fa-close\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
        } else {
            echo '<script>
            iziToast.success({
                title: \'Success\',
                message: \'Bien mise à jour \',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
        }
    }
    ?>
    <script>
        $.validate({
            lang: 'fr'
        });
    </script>
    <div id="flotTip" style="display: none; position: absolute;"></div>
</body>

</html>