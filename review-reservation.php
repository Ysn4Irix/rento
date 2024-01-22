<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();

$last_space = strrpos($_SESSION['user']['Nom_complet'], ' ');
$first_name = substr($_SESSION['user']['Nom_complet'], 0, $last_space);
$last_name = substr($_SESSION['user']['Nom_complet'], $last_space);

if (!isset($_SESSION['user'])) {
    header('location:nouser');
}

if (isset($_COOKIE["tempdata"])) {
    $tempdata = json_decode($_COOKIE['tempdata'], true);
} else {
    header('location:noreservation');
}
if (isset($_POST['pay'])) {
    $car = getcarbyid(base64_decode($_POST['carID']));
    $soutotal = calcprixperdates($tempdata['date_retour'], $tempdata['date_depart'], $car['Prix_jour']);
} else {
    header('location:index');
}

?>
<html lang="fr-FR">

<head>
    <title>Rento - Réservation</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="assets/css/jquery-ui.css" type="text/css" media="all" />
    <link rel=stylesheet href="assets/css/style.css" type="text/css" media="all" />
</head>

<body class="page page-two-column no-main-form">
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
                <div class="progress-bar-step done">
                    <div class="step_number">3</div>
                    <div class="step_name">Extras</div>
                    <div class="clear"></div>
                </div>
                <div class="progress-bar-step current">
                    <div class="step_number">4</div>
                    <div class="step_name">Réserver</div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div id="main">
            <form action="complete" method="post">
                <div id="primary">
                    <aside id="secondary" class="sidebar-left">
                        <div class="widget">
                            <h3 class="widget-title">
                                <img src="/assets/images/order_info.png" alt />
                                Info Commande
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
                                        margin-bottom: -40px" src="assets/images/Cars/<?= htmlentities($car['Image']) ?>" alt="">
                                    <input type="hidden" name="carID" value="<?= htmlentities($car['VoitureID']) ?>">
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
                            <h4> Date &amp; Location <a href="" title="">Edit</a></h4>
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
                                <input type="hidden" name="dateD" value="<?= $tempdata['date_depart'] ?>">
                                <input type="hidden" name="dateF" value="<?= $tempdata['date_retour'] ?>">
                                <input type="hidden" name="heureD" value="<?= $tempdata['heure_depart'] ?>">
                                <input type="hidden" name="heureF" value="<?= $tempdata['heure_retour'] ?>">
                                <div class="subtotal_content">
                                    <div class="subtotal">
                                        Sous-total: <b><span class="price"><?= htmlentities($soutotal) ?> DH</span></b>
                                    </div>
                                </div>
                            </div>
                            <h4>Extras</h4>
                            <div class="widget-content widget-extras">
                                <?php $totalex = 0;
                                if (isset($_POST['extras']))
                                    foreach ($_POST['extras'] as $value) {
                                        $ex = explode(',', htmlentities($value), 2);
                                        echo '<p>' . $ex[0] . '</p>';
                                        echo '<span class="price" style = "font-weight: bold" >' . $ex[1] . ' DH' . '</span><br>';
                                        $totalex += $ex[1];
                                    } ?>
                            </div>
                            <div class="widget-footer widget-footer-total">
                                Total: <span class="price">
                                    <?= $soutotal + intval($totalex); ?>
                                    <input type="hidden" name="prixtotal" value="<?= $soutotal + intval($totalex); ?>">
                                    DH
                                </span>
                            </div>
                        </div>
                    </aside>
                    <div id="content" class="sidebar-middle">
                        <div class="widget main-widget">
                            <div class="widget-title">
                                <div>
                                    <img src="/assets/images/list.png" alt />
                                    Formulaire de réservation
                                </div>
                                <div class="clear"></div>
                            </div>
                            <h4>Remarque</h4>
                            <div class="widget-content widget-note">
                                <h4>En remplissant cette réservation, vous recevrez :</h4>
                                <ul>
                                    <li>
                                        Votre bon de location à présenter à l'arrivée au bureau de location
                                    </li>
                                    <li>Un numéro d'assistance clientèle gratuit</li>
                                </ul>
                            </div>
                            <h4>Personal information</h4>
                            <div class="widget-content">
                                <div class="form_element">
                                    <div>Nom</div>
                                    <input type="text" placeholder="Votre nom" name="first_name" value="<?= $last_name ?>" data-validation="required" />
                                </div>
                                <div class="form_element">
                                    <div>Prénom</div>
                                    <input type="text" placeholder="Votre prénom" name="last_name" value="<?= $first_name ?>" data-validation="required" />
                                </div>
                                <div class="form_element"></div>
                                <div class="clear"></div>
                                <div class="form_element">
                                    <div>Email</div>
                                    <input type="email" placeholder="Votre email" style="background-color: #d3d3d3" name="email_address" value="<?= $_SESSION['user']['Email'] ?>" disabled />
                                </div>
                                <div class="form_element">
                                    <div>Télephone</div>
                                    <input type="text" placeholder="Votre numéro" name="num_tele" value="<?= $_SESSION['user']['Tele'] ?>" data-validation="number" />
                                </div>
                                <div class="clear"></div>
                            </div>
                            <h4>Credit card information</h4>
                            <div class="widget-content personal_info">
                                <div class="form_element">
                                    <div>Type de carte</div>
                                    <img src="/assets/images/visa.png" alt />
                                    <img src="/assets/images/master_card.png" alt />
                                    <img src="/assets/images/american_express.png" alt />
                                </div>
                                <div class="clear"></div>
                                <div class="form_element">
                                    <div>Numéro Carte</div>
                                    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" name="num_carte" data-validation="creditcard" data-validation-allowing="visa, mastercard, amex" />
                                </div>
                                <div class="form_element">
                                    <div>Date d'expiration</div>
                                    <div class="product-select-count">
                                        <select class="car-type-select" name="expiration_mois" style="background-color: #f9f9f9; border: 1px solid #d2d2d2; border-radius: 5px">
                                            <option selected="selected">1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                    <div class="product-select-count expiration_date_year">
                                        <select class="car-type-select" name="expiration_date" style="background-color: #f9f9f9; border: 1px solid #d2d2d2; border-radius: 5px">
                                            <option selected="selected">2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form_element">
                                    <div>CVV</div>
                                    <input class="cvv" type="number" placeholder="XXX" name="cvv" data-validation="cvv" />
                                </div>
                                <div class="clear"></div>
                                <div class="form_element">
                                    <div>Nom sur carte</div>
                                    <input type="text" value placeholder="Votre nom" name="card_first_name" data-validation="required" />
                                </div>
                                <div class="clear"></div>
                            </div>
                            <h4>Adresse de facturation</h4>
                            <div class="widget-content personal_info">
                                <div class="form_element">
                                    <div>Ville</div>
                                    <input type="text" placeholder="Enter ville" name="ville" value="<?= $_SESSION['user']['Ville'] ?>" data-validation="required" />
                                </div>
                                <div class="form_element">
                                    <div>Pays</div>
                                    <input class="postal_code" style="background-color: #d3d3d3" type="text" value="Maroc" disabled="disabled" name="pays" />
                                </div>
                                <div class="form_element">
                                    <div>Code Postal</div>
                                    <input class="postal_code" type="text" placeholder="XXXXX" name="postal_code" value="<?= $_SESSION['user']['CP'] ?>" data-validation="number">
                                </div>
                                <div class="clear"></div>
                                <div class="form_element billing_address">
                                    <div>Adresse de facturation</div>
                                    <input type="text" placeholder="Enter votre address" name="fact_address" value="<?= $_SESSION['user']['Address'] ?>" data-validation="required" />
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="next_page">
                            <input class="continue_button blue_btn" type="submit" name="order" value="Réserver" />
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
        <div class="clear"></div>
        <?php include_once './layouts/footer.php' ?>
    </div>
    <div id="overlay_block"></div>
    <script src="/assets/js/jquery-1.11.3.min.js"></script>
    <script src="/assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/jquery.blueberry.js"></script>
    <script src="/assets/js/custom-form-elements.js"></script>
    <script src="/assets/js/jquery.meio.mask.js"></script>
    <script src="/assets/js/jquery.form-validator.min.js"></script>
    <script src="assets/js/plugins/form-validator/security.js"></script>
    <script>
        $.validate({
            lang: 'fr',
            modules: 'security'
        });
        $('#voiture').addClass('current_page_item');
        $('#home').removeClass('current_page_item');
        $('#cat').removeClass('current_page_item');
    </script>
    <?php isuser(); ?>
</body>

</html>