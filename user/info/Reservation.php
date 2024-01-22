<?php
include_once('../../includes/tools.php');
include_once('../../includes/dbfunctions.php');
session_start();

if (!isset($_SESSION['user'])) {
    header('location:../../user/auth/signin');
}

$UserR = getreservationbyuser($_SESSION['user']['UserID']);
?>
<html lang="en-US">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="../../assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel="stylesheet" href="../../assets/css/style.css" type="text/css" media="all" />
</head>

<body class="page page-two-column">
    <div id="conteiner">
        <?php include '../../layouts/header.php' ?>
        <div style="margin-bottom: 100px">
        </div>
        <div id=main>
            <div id=primary>
                <div id="content" class="slider-form">
                    <div class="widget main-widget product-widget">
                        <form action="<?php echo $_SERVER['PHP_SELF']; ?>">
                            <div class="widget-title">
                                <div>
                                    <b>Votre Réservations</b>
                                </div>
                                <div class="clear"></div>
                                <br>
                                <div class="product-info">
                                    <?php
                                    if (empty($UserR)) {
                                        echo '<div style="font-weight: bold; color: red;"> 
                                                 Il n\'y a pas de commandes
                                        </div>';
                                    }
                                    ?>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="post">
                                <?php foreach ($UserR as $item) : ?>
                                    <div style="border-right: 120px solid #f3f3f3;">
                                        <div class="main-block">
                                            <div class="product-img" style="transform: scale(0.8);">
                                                <img src="../../assets/images/Cars/<?= htmlentities($item['Image']) ?>" alt />
                                            </div>
                                            <div class="product-info">
                                                <h3 class="entry-format" style="font-weight: bold; font-size: 16pt">
                                                    <?= htmlentities($item['Titre']) ?>
                                                    <span>| <?= htmlentities($item['Categorie']) ?></span>
                                                </h3>
                                                <br>
                                                <div class="features" style="font-size: 12pt; width: 500px;">
                                                    <p>
                                                        <b style="margin-right: 20px;"> Date début de réservation : </b>
                                                        <?= htmlentities($item['Date_debut']) ?>
                                                    </p>
                                                    <br>
                                                    <p>
                                                        <b style="margin-right: 20px;"> Date fin de réservation : </b>
                                                        <?= htmlentities($item['Date_fin']) ?>
                                                    </p>
                                                    <br>
                                                    <p>
                                                        <b style="margin-right: 20px;"> Statut de réservation : </b>
                                                        <b><?= htmlentities($item['Status']) ?></b>
                                                    </p>
                                                    <br>
                                                    <p>
                                                        <b style="margin-right: 20px;"> Prix Totale : </b>
                                                        <b><?= htmlentities($item['Prix_total']) ?> DH</b>
                                                    </p>
                                                    <br>
                                                    <p>
                                                        <b style="margin-right: 20px;"> Date de réservation : </b>
                                                        <?= htmlentities($item['Reservation_date']) ?>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="post-delimiter"></div>
                                <?php endforeach; ?>
                            </div>
                        </form>
                    </div>
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
    <?php isuser(); ?>
    <script>
        $.validate({
            lang: 'fr'
        });
    </script>
</body>

</html>