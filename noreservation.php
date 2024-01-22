<?php
include_once('includes/tools.php');
session_start();
?>
<html lang="en-US">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico"
          sizes="16x16 24x24 32x32"/>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel=stylesheet href="/assets/css/jquery-ui.css" type=text/css media="all"/>
    <link rel="stylesheet" href="/assets/css/style.css" type="text/css" media="all"/>
</head>

<body class="page page-two-column">
<div id="conteiner">
    <?php include 'layouts/header.php' ?>
    <div id="main">
        <div id="primary">
            <div id="content" class="slider-form">
                <form id="slider-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="main-form">
                    <div id="book_car" class="title-form current">
                        <div style="margin: 50px; padding: 20px; text-align: center; line-height: 30px">
                            <h2>Vous devez remplir le formulaire de réservation de voiture pour compléter votre
                                commande</h2>
                        </div>
                        <div style="margin: 50px; padding: 20px; text-align: center;">
                            <a id="byn"
                               href="">Réservation de voiture</a>
                        </div>
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
<?php isuser(); ?>
</body>

</html>
