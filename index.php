<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();
$cars = getlatestcars();

if (isset($_POST['continue'])) {
    $data = null;
    $lieu_retour = null;
    $checkdate = true;

    $lieu_depart = $_POST['lieu_depart'];
    $date_depart = $_POST['date_depart'];
    $heure_depart = $_POST['time_debut'];
    $date_retour = $_POST['date_fin'];
    $heure_retour = $_POST['time_fin'];

    if (!isset($_POST['lieu_retour'])) {
        $lieu_retour = $_POST['lieu_depart'];
    } else {
        $lieu_retour = $_POST['lieu_retour'];
    }

    if (date($_POST['date_fin']) < date($_POST['date_depart'])) {
        $checkdate = false;
    } else {
        $data = array(
            "lieu_depart" => $lieu_depart,
            "lieu_retour" => $lieu_retour,
            "date_depart" => $date_depart,
            "heure_depart" => $heure_depart,
            "date_retour" => $date_retour,
            "heure_retour" => $heure_retour
        );

        setcookie("tempdata", json_encode($data), time() + 86400, '/');
        header('location:voitures');
    }
}

if (isset($_POST['subs'])) {
    $email = $_POST['subs_email'];
    $statut = subscribe($email);
    $err = true;
    if (!$statut) {
        $err = false;
    }
}
?>

<html lang="fr-FR">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/iziToast.min.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/animate.css">
</head>

<body class="left-slider two-column loaded">
    <div id="conteiner">
        <?php include_once './layouts/header.php' ?>
        <div id="slider">
            <div id="slider-img">
                <div id="slider-pattern"></div>
            </div>
            <div id="slider-content">
                <div id="slider-post">
                    <div class="post">
                        <div class="entry-header animated fadeInRight delay-1s">
                            <h3 class="entry-format">D'excellents contrats de location de voitures.</h3>
                            <br />
                        </div>
                        <div class="entry-content">
                            <br><br>
                        </div>
                    </div>
                    <div id="slider-front-img" class="animated fadeInRight delay-1s">
                        <img src=/assets/images/slider_front_img.png alt />
                    </div>
                </div>
                <form id="slider-form" class="main-form animated zoomIn delay-1s" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="main_form_navigation">
                        <div id="book_car" class="title-form current">
                            <strong style="padding-top: 10px; margin-bottom: 10px;">Réserver une voiture</strong>
                        </div>
                    </div>
                    <div id="book_car_content" class="content-form">
                        <div class="location-block">
                            <div class="form-block location">Lieu de départ</div>
                            <select name="lieu_depart" class="lieu_depart" data-validation="required">
                                <option selected disabled style=" text-align: center;"> Sélectionner</option>
                                <option value="1">✈ Aéroport Tanger - Tanger</option>
                                <option value="2">✈ Aeroport Tetouan - Tetouan Aéroport</option>
                                <option value="3">✈ Aéroport Rabat - Rabat Aéroport</option>
                                <option value="4">✈ Aéroport Casablanca - Casablanca Aéroport</option>
                                <option value="5">✈ Aéroport Marrakech - Marrakech Aéroport</option>
                                <option value="6">✈ Aeroport Agadir - Agadir aéroport</option>
                                <option value="7">✈ Aeroport Ouarzazate - Ouarzazate Aéroport</option>
                                <option value="8">✈ Aeroport Essaouira - Essaouira Aéroport</option>
                                <option value="9">✈ Aeroport Fes - Fès Aéroport</option>
                                <option value="10">✈ Aeroport Oujda - Oujda Aéroport</option>
                                <option value="11">✈ Aeroport Nador - Nador Aéroport</option>
                                <option value="12">🚉 Gare de Tanger - Tanger gare</option>
                                <option value="13">🚉 Gare de Kenitra - Kenitra gare</option>
                                <option value="14">🚉 Gare de Rabat - Rabat gare agdal</option>
                                <option value="15">🚉 Gare de Casablanca - Casa voyageurs gare</option>
                                <option value="16">🚉 Gare de Marrakech - Marrakech gare</option>
                                <option value="17">🚉 Gare de Fès - Fès gare</option>
                                <option value="18">🏠 Ville de Tanger - Tanger ville</option>
                                <option value="19">🏠 Ville de Rabat - Rabat Ville</option>
                                <option value="20">🏠 Ville de Casablanca - CASABLANCA Ville</option>
                                <option value="21">🏠 Ville de Marrakech - Marrakech Ville</option>
                                <option value="22">🏠 Ville d'Agadir - Agadir Ville</option>
                                <option value="23">🏠 Ville de Ouarzazate - Ouarzazate Ville</option>
                                <option value="24">🏠 Ville de Fès - Fes Ville</option>
                            </select>
                        </div>
                        <div class="location-block">
                            <input id="location-checkbox" type="checkbox" name="checkbox_location" />
                            <label>Retour dans un autre lieu</label>
                        </div>
                        <div class="location-block return_location">
                            <div class="form-block location">Lieu de retour</div>
                            <!--  <input class="location" type="text" value placeholder="Enter Adresse, ville , zip code"
                                 name="return_location" data-validation="required"/>-->
                            <select name="lieu_retour" class="lieu_depart" data-validation="required">
                                <option selected disabled style=" text-align: center;"> Sélectionner</option>
                                <option value="1">✈ Aéroport Tanger - Tanger</option>
                                <option value="2">✈ Aeroport Tetouan - Tetouan Aéroport</option>
                                <option value="3">✈ Aéroport Rabat - Rabat Aéroport</option>
                                <option value="4">✈ Aéroport Casablanca - Casablanca Aéroport</option>
                                <option value="5">✈ Aéroport Marrakech - Marrakech Aéroport</option>
                                <option value="6">✈ Aeroport Agadir - Agadir aéroport</option>
                                <option value="7">✈ Aeroport Ouarzazate - Ouarzazate Aéroport</option>
                                <option value="8">✈ Aeroport Essaouira - Essaouira Aéroport</option>
                                <option value="9">✈ Aeroport Fes - Fès Aéroport</option>
                                <option value="10">✈ Aeroport Oujda - Oujda Aéroport</option>
                                <option value="11">✈ Aeroport Nador - Nador Aéroport</option>
                                <option value="12">🚉 Gare de Tanger - Tanger gare</option>
                                <option value="13">🚉 Gare de Kenitra - Kenitra gare</option>
                                <option value="14">🚉 Gare de Rabat - Rabat gare agdal</option>
                                <option value="15">🚉 Gare de Casablanca - Casa voyageurs gare</option>
                                <option value="16">🚉 Gare de Marrakech - Marrakech gare</option>
                                <option value="17">🚉 Gare de Fès - Fès gare</option>
                                <option value="18">🏠 Ville de Tanger - Tanger ville</option>
                                <option value="19">🏠 Ville de Rabat - Rabat Ville</option>
                                <option value="20">🏠 Ville de Casablanca - CASABLANCA Ville</option>
                                <option value="21">🏠 Ville de Marrakech - Marrakech Ville</option>
                                <option value="22">🏠 Ville d'Agadir - Agadir Ville</option>
                                <option value="23">🏠 Ville de Ouarzazate - Ouarzazate Ville</option>
                                <option value="24">🏠 Ville de Fès - Fes Ville</option>
                            </select>
                        </div>
                        <div class="form-block pick-up">
                            <h4>Date début de réservation</h4>
                            <input class="datepicker" type="date" value name="date_depart" data-validation="required" />
                            <input class="time-select" type="time" size="5" name="time_debut" data-validation="required">
                            <div class="clear"></div>
                        </div>
                        <div class="form-block drop-off">
                            <h4>Date fin de réservation</h4>
                            <input class="datepicker" type="date" name="date_fin" value="" data-validation="required" />
                            <input class="time-select" type="time" size="5" name="time_fin" data-validation="required">
                            <div class="clear"></div>
                        </div>
                        <div class="form-block form-submit form-continue">
                            <input class="orange_button form-continue" type="submit" value="Continue" name="continue" />
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                    <div class="clear"></div>
                </form>
            </div>
        </div>
        <div id="main">
            <div id="primary">
                <div id="content">
                    <div class="post">
                        <div class="entry-header">
                            <div style="text-align: center; margin-top: 5px">
                                <h3 class="entry-format">
                                    Nous sommes la première agence de location de voitures avec 100 000 clients satisfaits.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <aside id="secondary">
                    <div class="first-column">
                        <div class="feature-single">
                            <img class=feature-title-img src=/assets/images/1-icon.png alt />
                            <div class="feature-title">
                                Tarifs réduits spéciaux pour la réservation d'une voiture
                            </div>
                        </div>
                        <div class="feature-single" style="margin-left: 20px">
                            <img class=feature-title-img src=/assets/images/2-icon.png alt />
                            <div class="feature-title">
                                Un service clientèle dédié
                            </div>
                        </div>
                    </div>
                    <div class="second-column">
                        <div class="feature-single">
                            <img class=feature-title-img src=/assets/images/3-icon.png alt />
                            <div class="feature-title">
                                Gérez votre réservation en ligne
                            </div>
                        </div>
                        <br>
                        <div class="feature-single" style="margin-right: 15px;">
                            <img class=feature-title-img src=/assets/images/4-icon.png alt />
                            <div class="feature-title">
                                Vous êtes assuré d'avoir une voiture
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="clear"></div>
            </div>
        </div>

        <div id="main">
            <div id="primary">
                <div style="text-align: center">
                    <h1>Dernières voitures ajoutées</h1>
                    <br><br>
                </div>
                <?php foreach ($cars as $item) : ?>

                    <div class="widget main-widget product-widget">
                        <!-- <div class=content-overlay><img class=ajax-loader src=assets/images/ajax-loader.gif alt/></div>-->
                        <form action="extras" method="post">
                            <div class="widget-title">
                                <div class="clear"></div>
                                <div class="clear"></div>
                            </div>
                            <div class="post">
                                <div class="main-block_container">
                                    <div class="main-block">
                                        <div class="product-img">
                                            <img src="assets/images/Cars/<?= htmlentities($item['Image']); ?>" alt />
                                        </div>
                                        <div class="product-info">
                                            <div class="entry-format"> <?= htmlentities($item['Titre']) ?>
                                                <span>| <?= htmlentities($item['Categorie']) ?></span>
                                            </div>
                                            <div class="features">
                                                <h3>
                                                    <img src="/assets/images/passenger-icon.png" alt />
                                                    <?= htmlentities($item['nb_passagers']); ?> Passagers
                                                </h3>
                                                <h3>
                                                    <img src="/assets/images/suitcase-icon.png" alt />
                                                    <?= htmlentities($item['nb_valise']); ?> Valises
                                                </h3>
                                                <h3>
                                                    <img src="/assets/images/transmission-icon.png" alt />
                                                    <?= htmlentities($item['transmition']); ?> transmission
                                                </h3>
                                                <h3>
                                                    <img src="/assets/images/air-icon.png" alt />
                                                    Climatisation
                                                </h3>
                                                <h3>
                                                    <img src="/assets/images/km_l-icon.png" alt />
                                                    <?= htmlentities($item['Moteur']); ?>
                                                </h3>
                                            </div>
                                            <div class="details">
                                                <div class="view-details">[+] Voir les détails de la voiture</div>
                                                <div class="close-details">[-] Fermer les détails de la voiture</div>
                                                <ul class="details-more">
                                                    <li>Boite de vitesse : <?= htmlentities($item['boite_vitesse']); ?></li>
                                                    <li>Radio : <?= htmlentities($item['Radio']); ?></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="additional-block">
                                        <div>
                                            <h2 class="span">PRIX</h2>
                                            <br>
                                            <h4><?= htmlentities($item['Prix_jour']); ?> DH / jour</h4>
                                            <p class="span"></p>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="post-delimiter"></div>
                        </form>
                    </div>
                <?php endforeach; ?>
            </div>
            <div id="sign_up_conteiner">
                <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" id="sign_up">
                    <div class="sign_up_text"> s'abonner à nos lettres d'information</div>
                    <div class="sign_up_form">
                        <input id="sign_up_email" type="text" placeholder="Email" name="subs_email" data-validation="email">
                        <input name="subs" class="orange_button" type="submit" value="S'abonner">
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </form>
            </div>
        </div>
        <?php include_once './layouts/footer.php' ?>
    </div>
    <div id="overlay_block"></div>


    <script src="/assets/js/jquery-1.11.3.min.js"></script>
    <script src="/assets/js/jquery.form-validator.min.js"></script>
    <script src="/assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/jquery.blueberry.js"></script>
    <script src="/assets/js/custom-form-elements.js"></script>
    <script src="/assets/js/jquery.meio.mask.js"></script>
    <script src="/assets/js/iziToast.min.js"></script>
    <?php
    if (isset($_POST['subs'])) {
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
                message: \'Merci pour votre abonnement\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
        }
    }

    if (isset($_POST['continue'])) {
        if (!$checkdate) {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'La date de fin de réservation doit être supérieure à la date de début de réservation\',
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
        $('#voiture').removeClass('current_page_item');
        $('#cat').removeClass('current_page_item');
    </script>
    <?php isuser(); ?>
</body>

</html>