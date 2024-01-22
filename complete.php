<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();

if (isset($_POST['order'])) {
    $reserID = 0;
    $reserID = addreservation($_SESSION['user']['UserID']
        , $_POST["carID"]
        , $_POST["dateD"]
        , $_POST["heureD"]
        , $_POST["dateF"]
        , $_POST["heureF"]
        , $_POST['prixtotal']);

    $stateuser = updateuserinfo($_POST['first_name']
        , $_POST['last_name']
        , $_POST['num_tele']
        , $_POST['postal_code']
        , $_POST['fact_address']
        , $_POST['ville']
        , $_SESSION['user']['UserID']);

    $fournumbers = str_repeat('XXXX', 3) . substr($_POST['num_carte'], -4);
    $statepay = adduserpaymaent($_SESSION['user']['UserID']
        , $reserID
        , $fournumbers
        , $_POST['card_first_name']
        , $_POST['expiration_date']
        , $_POST['expiration_mois']
        , $_POST['cvv']
        , $_POST['fact_address']);
}
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
                <form id="slider-form" method="post" class="main-form">
                    <div id="book_car" class="title-form current">
                        <?php if ($reserID != 0 && $stateuser && $statepay) {
                            echo '<div style="margin: 50px; padding: 20px; text-align: center; line-height: 30px">
                                <h2>Merci pour votre commande</h2>
                                <h3>Votre commande est en cours de traitement</h3>
                                 <h3>vous recevrez un appel une fois que nous aurons vérifié vos informations</h3>
                                <h4 style="font-weight: bold">Votre numéro de commande est : </h4><br>
                                <h2 style="font-weight: bold; color: red">' . $reserID . '</h2>
                            </div>';
                        } else {
                            echo '<div style="margin: 50px; padding: 20px; text-align: center; line-height: 30px">
                                <h2>Une erreur est survenue</h2>
                                <h3>Réessayer plus tard</h3>
                            </div>';
                        }
                        ?>
                        <div style="margin: 30px; padding: 20px; text-align: center;">
                            <a id="byn"
                               href="">Revenir à la page d'accueil</a>
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
