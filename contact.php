<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();

if (isset($_POST['contact'])) {
    $nom = $_POST['nom'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $statut = contactus($nom, $email, $message);
    $err = true;
    if (!$statut) {
        $err = false;
    }
}
?>
<html lang="en-US">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel=stylesheet href="assets/css/all.min.css" type=text/css media="all" />
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/animate.css">
</head>

<body class="page page-two-column">
    <div id="conteiner">
        <?php include 'layouts/header.php' ?>
        <div id="main">
            <div id="primary">
                <div id="content" class="slider-form">
                    <form id="slider-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="main-form">
                        <div id="book_car" class="title-form current">
                            <b><span> Contactez Nous </span></b>
                        </div>
                        <div id="book_car_content" class="content-form">
                            <div class="location-block" style="margin-left: 330px;">
                                <div class="form-block location">Votre Nom</div>
                                <div>
                                    <input class="location" type="text" name="nom" data-validation="required">
                                </div>
                                <br>
                                <div class="form-block location">Votre Email</div>
                                <div>
                                    <input class="location" type="text" name="email" data-validation="email">
                                </div>
                                <br>
                                <label class="form-block location">Votre Message</label>
                                <br>
                                <div>
                                    <textarea class="location" type="textarea" style="width: 275px; height: 128px;text-transform: lowercase; font-size: medium" name="message" data-validation="required"></textarea>
                                </div>
                            </div>

                            <div class="clear"></div>
                            <div class="form-block form-submit">
                                <input class="orange_button form-continue" type="submit" name="contact" value="Envoyer">
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
    <?php include 'layouts/footer.php' ?>
    <div id="overlay_block"></div>

    <script src="/assets/js/jquery-1.11.3.min.js"></script>
    <script src="/user/js/jquery.form-validator.min.js"></script>
    <script src="/assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/custom-form-elements.js"></script>
    <script src="/assets/js/jquery.meio.mask.js"></script>
    <script src="/assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="/assets/js/jquery.blueberry.js"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/iziToast.min.js"></script>
    <?php
    if (isset($_POST['contact'])) {
        if (!$err) {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Une erreur est servenue\',
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
                message: \'Merci votre message a été envoyée\',
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
        $('#cat').addClass('current_page_item');
        $('#home').removeClass('current_page_item');
        $('#voiture').removeClass('current_page_item');
    </script>
    <?php isuser(); ?>
</body>

</html>