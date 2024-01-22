<?php
include_once('includes/tools.php');
include_once('includes/dbfunctions.php');
session_start();
$cars = getallcars();
?>
<html lang="en-US" xmlns:http="http://www.w3.org/1999/xhtml">

<head>
    <title>Rento - Resérvation & Location Voiture</title>
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" sizes="16x16 24x24 32x32" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel=stylesheet href="/assets/css/jquery-ui.css" type=text/css media="all" />
    <link rel="stylesheet" href="/assets/css/style.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/animate.css">
</head>

<body class="page page-two-column">
    <div id="conteiner">
        <?php include 'layouts/header.php' ?>

        <div id=progress-bar>
            <div id=progress-bar-steps>
                <div class="progress-bar-step done">
                    <div class=step_number>1</div>
                    <div class=step_name>Demande</div>
                    <div class=clear></div>
                </div>
                <div class="progress-bar-step current">
                    <div class=step_number>2</div>
                    <div class=step_name>Voiture</div>
                    <div class=clear></div>
                </div>
                <div class=progress-bar-step>
                    <div class=step_number>3</div>
                    <div class=step_name>Extras</div>
                    <div class=clear></div>
                </div>
                <div class=progress-bar-step>
                    <div class=step_number>4</div>
                    <div class=step_name>Réserver</div>
                    <div class=clear></div>
                </div>
            </div>
            <div class=clear></div>
        </div>
        <div id=main>
            <br><br><br>
            <div id=primary>
                <div id="content" class="slider-form">
                    <div class="widget main-widget product-widget">
                        <!--<div class=content-overlay>
                                            <img class=ajax-loader src=assets/images/ajax-loader.gif alt/>
                                        </div>-->
                        <form action="extras" method="post">
                            <div class="widget-title">
                                <div>
                                    <img src="/assets/images/list.png" alt /> Résultats
                                    <span><?= htmlentities(count($cars)) ?></span>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <?php foreach ($cars as $item) : ?>
                                <div class="post">
                                    <div class="main-block_container">
                                        <div class="main-block">
                                            <div class="product-img"><img src="assets/images/Cars/<?= htmlentities($item['Image']); ?>" alt />
                                            </div>
                                            <div class="product-info">
                                                <h3 class="entry-format"><?= htmlentities($item['Titre']); ?>
                                                    <span>| <?= htmlentities($item['Categorie']) ?></span>
                                                </h3>
                                                <div class="features">
                                                    <p>
                                                        <img src="/assets/images/passenger-icon.png" alt />
                                                        <?= htmlentities($item['nb_passagers']); ?> passengers
                                                    </p>
                                                    <p>
                                                        <img src="/assets/images/suitcase-icon.png" alt />
                                                        <?= htmlentities($item['nb_valise']); ?> Valises
                                                    </p>
                                                    <p>
                                                        <img src="/assets/images/transmission-icon.png" alt />
                                                        <?= htmlentities($item['transmition']); ?> transmission
                                                    </p>
                                                    <p>
                                                        <img src="/assets/images/air-icon.png" alt />
                                                        Climatisation
                                                    </p>
                                                    <p>
                                                        <img src="/assets/images/km_l-icon.png" alt />
                                                        <?= htmlentities($item['Moteur']); ?>
                                                    </p>
                                                </div>
                                                <div class="details">
                                                    <div class="view-details">[+] Voir les détails de la voiture</div>
                                                    <div class="close-details">[-] Fermer les détails de la voiture</div>
                                                    <ul class="details-more">
                                                        <li>Boite de vitesse
                                                            : <?= htmlentities($item['boite_vitesse']); ?></li>
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
                                                <a id="byn" href="extras?id=<?= base64_encode(htmlentities($item['VoitureID'])); ?>">Choisir</a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="post-delimiter"></div>
                            <?php endforeach; ?>
                        </form>
                    </div>
                    <!-- <div class=pagination-block>
                     <div class=pagination>
                         <div class=left></div>
                         <div class=current>1</div>
                         <div>2</div>
                         <div>3</div>
                         <div>...</div>
                         <div>10</div>
                         <div class=right></div>
                         <p class=clear></p>
                     </div>
                 </div>-->
                </div>
                <div class="clear"></div>
                <br>
            </div>
        </div>
    </div>
    <?php include 'layouts/footer.php' ?>
    <div id="overlay_block"></div>

    <script src="/assets/js/jquery-1.11.3.min.js"></script>
    <script src="/assets/js/jquery.form-validator.min.js"></script>
    <script src="/assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/custom-form-elements.js"></script>
    <script src="/assets/js/jquery.meio.mask.js"></script>
    <script src="/assets/js/jquery.selectbox-0.2.min.js"></script>
    <script src="/assets/js/jquery.blueberry.js"></script>
    <script src="/assets/js/script.js"></script>
    <script>
        $.validate({
            lang: 'fr'
        });
        $('#voiture').addClass('current_page_item');
        $('#home').removeClass('current_page_item');
        $('#cat').removeClass('current_page_item');
    </script>
    <?php isuser(); ?>
</body>

</html>