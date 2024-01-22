<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();
if (isset($_COOKIE["tempdata"])) {
    $tempdata = json_decode($_COOKIE['tempdata'], true);
} else {
    header('location:noreservation');
}

$extras = getextras();
$car = getcarbyid(base64_decode($_GET['id']));
$soutotal = calcprixperdates($tempdata['date_retour'], $tempdata['date_depart'], $car['Prix_jour']);
?>
<html lang="en-US">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
</head>

<body class="page page-two-column">
    <?php include_once './layouts/header.php' ?>
    <div id="conteiner">
        <div id="progress-bar">
            <div id="progress-bar-steps">
                <div class="progress-bar-step done">
                    <div class="step_number">1</div>
                    <div class="step_name">Demande</div>
                    <div class="clear"></div>
                </div>
                <div class="progress-bar-step done">
                    <div class="step_number">2</div>
                    <div class="step_name">Voiture</div>
                    <div class="clear"></div>
                </div>
                <div class="progress-bar-step current">
                    <div class="step_number">3</div>
                    <div class="step_name">Extras</div>
                    <div class="clear"></div>
                </div>
                <div class="progress-bar-step">
                    <div class="step_number">4</div>
                    <div class="step_name">Réserver</div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div id="main">
            <br>
            <br>
            <br>
            <br>
            <div id="primary">
                <aside id="secondary" class="sidebar-left">
                    <div class="widget">
                        <h3 class="widget-title">
                            <img src="/assets/images/order_info.png" alt="">
                            Informations sur la commande
                        </h3>
                        <h4>Voiture
                            <a href="voitures" title="">Edit</a>
                        </h4>
                        <div class="widget-content main-block product-widget-mini">
                            <!--Voiture Image-->
                            <div class="">
                                <img style="transform: scale(0.7);
                                        margin-left: -73px;
                                        margin-top: -60px;
                                        margin-bottom: -40px" src="/assets/images/Cars/<?= htmlentities($car['Image']) ?>" alt="">
                            </div>
                            <!--Voiture Info-->
                            <div class="product-info">
                                <div class="entry-format">
                                    <div style="font-weight: bold; font-size: medium">
                                        <?= htmlentities($car['Titre']) ?>
                                    </div>
                                    <span style="font-weight: bold; font-size: 12px; color: #011627">
                                        <?= htmlentities($car['Categorie']) ?>
                                    </span>
                                </div>
                                <div class="features">
                                    <p><img src="/assets/images/passenger-icon.png" alt=""> <?= htmlentities($car['nb_passagers']) ?> Passagers </p>
                                    <p><img src="/assets/images/suitcase-icon.png" alt=""> <?= htmlentities($car['nb_valise']) ?> Valises</p>
                                    <p><img src="/assets/images/transmission-icon.png" alt=""> <?= htmlentities($car['transmition']) ?> Transmission</p>
                                    <p><img src="/assets/images/air-icon.png" alt=""> Climatisation</p>
                                    <p><img src="/assets/images/km_l-icon.png" alt="">
                                        <?= htmlentities($car['Moteur']) ?>
                                    </p>
                                </div>
                                <div class="details">
                                    <div class="view-details">[+] Voir les détails de la voiture</div>
                                    <div class="close-details">[-] Fermer les détails de la voiture</div>
                                    <ul class="details-more" style="display: none;">
                                        <li>Boite de vitesse : <?= htmlentities($car['boite_vitesse']) ?></li>
                                        <li>Radio : <?= htmlentities($car['Radio']) ?></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h4> Date &amp; Location <a href="voitures" title="">Edit</a></h4>
                        <div class="widget-content widget-info">
                            <h4>Date début de réservation</h4>
                            <p>
                                <?= htmlentities($tempdata['date_depart']) ?>
                                à
                                <?= htmlentities($tempdata['heure_depart']) ?>
                            </p>
                            <h4>Date fin de réservation</h4>
                            <p>
                                <?= htmlentities($tempdata['date_retour']) ?>
                                à
                                <?= htmlentities($tempdata['heure_retour']) ?>
                            </p>
                            <h4>Lieu de départ</h4>
                            <p>
                                <?php
                                switch ($tempdata['lieu_depart']) {
                                    case 1:
                                        echo '✈ Aéroport Tanger - Tanger';
                                        break;
                                    case 2:
                                        echo '✈ Aeroport Tetouan - Tetouan Aéroport';
                                        break;
                                    case 3:
                                        echo '✈ Aéroport Rabat - Rabat Aéroport';
                                        break;
                                    case 4:
                                        echo '✈ Aéroport Casablanca - Casablanca Aéroport';
                                        break;
                                    case 5:
                                        echo '✈ Aéroport Marrakech - Marrakech Aéroport';
                                        break;
                                    case 6:
                                        echo '✈ Aeroport Agadir - Agadir aéroport';
                                        break;
                                    case 7:
                                        echo '✈ Aeroport Ouarzazate - Ouarzazate Aéroport';
                                        break;
                                    case 8:
                                        echo '✈ Aeroport Essaouira - Essaouira Aéroport';
                                        break;
                                    case 9:
                                        echo '✈ Aeroport Fes - Fès Aéroport';
                                        break;
                                    case 10:
                                        echo '✈ Aeroport Oujda - Oujda Aéroport';
                                        break;
                                    case 11:
                                        echo '✈ Aeroport Nador - Nador Aéroport';
                                        break;
                                    case 12:
                                        echo '🚉 Gare de Tanger - Tanger gare';
                                        break;
                                    case 13:
                                        echo '🚉 Gare de Kenitra - Kenitra gare';
                                        break;
                                    case 14:
                                        echo '🚉 Gare de Rabat - Rabat gare agdal';
                                        break;
                                    case 15:
                                        echo '🚉 Gare de Casablanca - Casa voyageurs gare';
                                        break;
                                    case 16:
                                        echo '🚉 Gare de Marrakech - Marrakech gare';
                                        break;
                                    case 17:
                                        echo '🚉 Gare de Fès - Fès gare';
                                        break;
                                    case 18:
                                        echo '🏠 Ville de Tanger - Tanger ville';
                                        break;
                                    case 19:
                                        echo '🏠 Ville de Rabat - Rabat Ville';
                                        break;
                                    case 20:
                                        echo '🏠 Ville de Casablanca - CASABLANCA Ville';
                                        break;
                                    case 21:
                                        echo '🏠 Ville de Marrakech - Marrakech Ville';
                                        break;
                                    case 22:
                                        echo '🏠 Ville d\'Agadir - Agadir Ville';
                                        break;
                                    case 23:
                                        echo '🏠 Ville de Ouarzazate - Ouarzazate Ville';
                                        break;
                                    case 24:
                                        echo '🏠 Ville de Fès - Fes Ville';
                                        break;
                                }
                                ?>
                            </p>
                            <h4>Lieu de retour</h4>
                            <p>
                                <?php
                                switch ($tempdata['lieu_retour']) {
                                    case 1:
                                        echo '✈ Aéroport Tanger - Tanger';
                                        break;
                                    case 2:
                                        echo '✈ Aeroport Tetouan - Tetouan Aéroport';
                                        break;
                                    case 3:
                                        echo '✈ Aéroport Rabat - Rabat Aéroport';
                                        break;
                                    case 4:
                                        echo '✈ Aéroport Casablanca - Casablanca Aéroport';
                                        break;
                                    case 5:
                                        echo '✈ Aéroport Marrakech - Marrakech Aéroport';
                                        break;
                                    case 6:
                                        echo '✈ Aeroport Agadir - Agadir aéroport';
                                        break;
                                    case 7:
                                        echo '✈ Aeroport Ouarzazate - Ouarzazate Aéroport';
                                        break;
                                    case 8:
                                        echo '✈ Aeroport Essaouira - Essaouira Aéroport';
                                        break;
                                    case 9:
                                        echo '✈ Aeroport Fes - Fès Aéroport';
                                        break;
                                    case 10:
                                        echo '✈ Aeroport Oujda - Oujda Aéroport';
                                        break;
                                    case 11:
                                        echo '✈ Aeroport Nador - Nador Aéroport';
                                        break;
                                    case 12:
                                        echo '🚉 Gare de Tanger - Tanger gare';
                                        break;
                                    case 13:
                                        echo '🚉 Gare de Kenitra - Kenitra gare';
                                        break;
                                    case 14:
                                        echo '🚉 Gare de Rabat - Rabat gare agdal';
                                        break;
                                    case 15:
                                        echo '🚉 Gare de Casablanca - Casa voyageurs gare';
                                        break;
                                    case 16:
                                        echo '🚉 Gare de Marrakech - Marrakech gare';
                                        break;
                                    case 17:
                                        echo '🚉 Gare de Fès - Fès gare';
                                        break;
                                    case 18:
                                        echo '🏠 Ville de Tanger - Tanger ville';
                                        break;
                                    case 19:
                                        echo '🏠 Ville de Rabat - Rabat Ville';
                                        break;
                                    case 20:
                                        echo '🏠 Ville de Casablanca - CASABLANCA Ville';
                                        break;
                                    case 21:
                                        echo '🏠 Ville de Marrakech - Marrakech Ville';
                                        break;
                                    case 22:
                                        echo '🏠 Ville d\'Agadir - Agadir Ville';
                                        break;
                                    case 23:
                                        echo '🏠 Ville de Ouarzazate - Ouarzazate Ville';
                                        break;
                                    case 24:
                                        echo '🏠 Ville de Fès - Fes Ville';
                                        break;
                                }
                                ?>
                            </p>
                            <div class="subtotal_content">
                                <div class="subtotal">
                                    Sous-total: <b><span class="price"><?= htmlentities($soutotal) ?> DH</span></b>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div id="content" class="sidebar-middle">
                    <form action="review-reservation" method="post">
                        <div class="widget main-widget product-widget main-widget-3column">
                            <div class="widget-title">
                                <div>
                                    <img src="/assets/images/list.png" alt="">
                                    Available Extras
                                </div>
                                <div class="clear"></div>
                            </div>
                            <?php foreach ($extras as $item) : ?>
                                <div class="post">
                                    <div class="main-block_container">
                                        <div class="checkbox-block">
                                            <span class="checkbox" style="background-position: 0 0;">
                                            </span>
                                            <input class="get_value" type="checkbox" name="extras[]" value="<?= htmlentities($item['Nom']) . ',' . htmlentities($item['Prix']) ?>">
                                        </div>
                                        <div class="main-block">
                                            <div class="product-img">
                                                <img src="/assets/images/<?= htmlentities($item['Image']); ?>" alt="">
                                            </div>
                                            <div class="product-info">
                                                <h3 class="entry-format"><?= htmlentities($item['Nom']); ?></h3>
                                                <div>
                                                    <?= htmlentities($item['Description']); ?>
                                                </div>
                                                <div class="details">
                                                    <div class="view-details">[+] More details</div>
                                                    <div class="close-details">[-] Close details</div>
                                                </div>
                                            </div>
                                            <p class="details-more" style="display: none;">
                                                <?= htmlentities($item['Details']); ?>
                                            </p>
                                        </div>
                                        <div class="additional-block">
                                            <p><?= htmlentities($item['Prix']); ?> DH</p>
                                            <!-- <input type="hidden" name="price[]" value="<? /*= htmlentities($item['Prix']); */ ?>">-->
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="post-delimiter"></div>
                            <?php endforeach; ?>
                            <input name="carID" type="hidden" value="<?= htmlentities($_GET['id']) ?>">
                        </div>
                        <div class="next_page">
                            <input class="continue_button blue_buttons" type="submit" name="pay" value="Continuer à payer">
                        </div>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>

    <?php include_once './layouts/footer.php' ?>
    <div id="overlay_block"></div>

    <script src="assets/js/jquery-1.11.3.min.js"></script>
    <script src="assets/js/jquery.form-validator.min.js"></script>
    <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/jquery.blueberry.js"></script>
    <script src="assets/js/custom-form-elements.js"></script>
    <script src="assets/js/jquery.meio.mask.js"></script>
    <script>
        $.validate({
            lang: 'fr'
        });
    </script>
    <?php isuser(); ?>
</body>

</html>