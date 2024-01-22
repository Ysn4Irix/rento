<?php
include_once('../../includes/tools.php');
include_once('../../includes/dbfunctions.php');
session_start();

if (!isset($_SESSION['user'])) {
    header('location:../../user/auth/signin');
}

if (isset($_POST['maj'])) {
    $msg = updateuserinfo(
        $_POST['firstname'],
        $_POST['lastname'],
        $_POST['userphone'],
        $_POST['user_cp'],
        $_POST['user_adresse'],
        $_POST['user_ville'],
        $_SESSION['user']['UserID']
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
    <link rel="stylesheet" href="../../assets/css/all.min.css" />
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css" />
</head>

<body class="page page-two-column">
    <div id="conteiner">
        <?php include_once '../../layouts/header.php' ?>
        <div id=main>
            <div id=primary>
                <div id="content" class="slider-form">
                    <form id="slider-form" action="<?php $userdata = getuserbyid($_SESSION['user']['UserID']); ?>" class="main-form" method="post">
                        <?php
                        $last_space = strrpos($userdata['Nom_complet'], ' ');
                        $first_name = substr($userdata['Nom_complet'], 0, $last_space);
                        $last_name = substr($userdata['Nom_complet'], $last_space); ?>
                        <div id="book_car" class="title-form current">
                            <b><span> Votre Profile : </span></b>
                        </div>
                        <div id="book_car_content" class="content-form">
                            <div class="location-block" style="margin-left: 100px;">
                                <div class="form-block location">Nom</div>
                                <div>
                                    <input class="location" type="text" value="<?= $last_name ?>" name="firstname" data-validation="required">
                                </div>
                                <br>
                                <div class="form-block location">Téléphone</div>
                                <div>
                                    <input class="location" type="tel" value="<?= $userdata['Tele'] ?>" name="userphone" data-validation="required">
                                </div>
                            </div>

                            <div class="location-block pick-up" style="margin-left: 40px;">
                                <div class="form-block location">Prénom</div>
                                <div>
                                    <input class="location" type="text" value="<?= $first_name ?>" name="lastname" data-validation="required">
                                </div>
                                <br>
                                <div class="form-block location">Adresse</div>
                                <div>
                                    <input class="location" type="text" value="<?= $userdata['Address'] ?>" name="user_adresse" data-validation="required">
                                </div>
                            </div>

                            <div class="location-block pick-up" style="margin-left: 40px;">
                                <div class="form-block location">Ville</div>
                                <div>
                                    <input class="location" type="text" value="<?= $userdata['Ville'] ?>" name="user_ville" data-validation="required">
                                </div>
                                <br>

                                <div class="form-block location">Email</div>
                                <div>
                                    <input class="location" type="text" value="<?= $userdata['Email'] ?>" name="useremail" style="background-color: #d3d3d3" disabled>
                                </div>
                            </div>
                            <div class="location-block pick-up" style="margin-left: 345px;">
                                <br>
                                <div class="form-block location">Code Postale</div>
                                <div>
                                    <input class="location" type="text" value="<?= $userdata['CP'] ?>" name="user_cp" data-validation="number">
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
    <script src="../../assets/js/jquery.form-validator.min.js"></script>
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
                message: \'Une erreur est servenue vérifier vos informations\',
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
                message: \'Mise à jour avec succès\',
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
</body>

</html>