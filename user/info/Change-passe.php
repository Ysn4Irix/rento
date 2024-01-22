<?php
include_once('../../includes/tools.php');
include_once('../../includes/dbfunctions.php');
session_start();

if (!isset($_SESSION['user'])) {
    header('location: /rento/user/auth/signin');
}

if (isset($_POST['maj'])) {
    $msg = change_userpassword(
        $_SESSION['user']['UserID'],
        $_POST['old_pass'],
        $_POST['new_pass']
    );
}
?>
<html lang="en-US">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="../../assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel="stylesheet" href="../../assets/css/style.css" type="text/css" media="all" />
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css" />
    <link rel="stylesheet" href="../../assets/css/all.min.css" />
</head>

<body class="page page-two-column">
    <div id="conteiner">
        <?php include '../../layouts/header.php' ?>
        <div id=main>
            <div id=primary>
                <div id="content" class="slider-form">
                    <form id="slider-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="main-form">
                        <div id="book_car" class="title-form current">
                            <b><span> Changer votre mot de passe : </span></b>
                        </div>
                        <div id="book_car_content" class="content-form">
                            <div class="location-block" style="margin-left: 330px;">
                                <div class="form-block location">Ancien mot de passe</div>
                                <div>
                                    <input class="location" type="password" name="old_pass" data-validation="required">
                                </div>
                                <br>
                                <div class="form-block location">Nouveau mot de passe</div>
                                <div>
                                    <input class="location" type="password" name="new_pass" data-validation="length" data-validation-length="min6">
                                </div>
                                <label class="form-block location">Confirmer mot de passe</label>
                                <br>
                                <div>
                                    <input class="location fa fa-close" type="password" data-validation="confirmation" data-validation-confirm="new_pass">
                                </div>
                            </div>

                            <div class="clear"></div>
                            <div class="form-block form-submit">
                                <input class="orange_button form-update" type="submit" name="maj" value="Mise à jour">
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <?php include '../../layouts/footer.php' ?>
    <div id="overlay_block"></div>

    <script src="../../assets/js/jquery-1.11.3.min.js"></script>
    <script src="../../user/js/jquery.form-validator.min.js"></script>
    <script src="../../assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="../../assets/js/jquery-ui.js"></script>
    <script src="../../assets/js/custom-form-elements.js"></script>
    <script src="../../assets/js/jquery.meio.mask.js"></script>
    <script src="../../assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="../../assets/js/jquery.blueberry.js"></script>
    <script src="../../assets/js/script.js"></script>
    <script src="../../assets/js/iziToast.min.js"></script>
    <?php
    isuser();
    if (isset($_POST['maj'])) {
        if (!$msg) {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Votre mot de passe est incorrect\',
                position: \'topRight\',
                icon: \'fa fa-times\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
        } else {
            echo '<script>
            iziToast.success({
                title: \'Success\',
                message: \'Mise à jour avec succès\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\',
                onClosed: function(){
                    window.location.href = "/user/info/Deconnexion";
                }
            });
        </script>';
        }
    }
    ?>
    <script>
        $.validate({
            lang: 'fr',
            modules: 'security'
        });
    </script>
</body>

</html>