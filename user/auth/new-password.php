<?php
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (!isset($_GET['token'])) {
    header('location: /rento/user/auth/signin');
}

if (isset($_POST['forget'])) {
    $password = $_POST['password'];
    $state = update_password($password);
}
?>

<html lang="en" class="bg-dark">
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>

<head>
    <meta charset="utf-8"/>
    <title>
        Recupérer Mot de passe - Rento
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="../css/app.min.css" type="text/css"/>
    <link rel="stylesheet" href="../../assets/css/all.min.css"/>
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css"/>
    <link rel="shortcut icon" sizes="16x16 24x24 32x32"
          href="/assets/images/favicon.ico"/>
</head>

<body>
<section id="content" class="m-t-lg wrapper-md animated fadeInUp">
    <div class="container aside-xxl">
        <p class="navbar-brand block">Recupérer Mot de passe</i></p>
        <section class="panel panel-default bg-white m-t-lg">
            <header class="panel-heading text-center">
                <strong>Enter votre nouveau mot de passe</strong>
            </header>
            <form method="post"
                  class="panel-body wrapper-lg">
                <div class="form-group">
                    <label class="control-label" for="password">Nouveau Mot de passe</label>
                    <input type="password" class="form-control input-lg" name="password"
                           id="password" data-validation="length" data-validation-length="min6">
                </div>
                <div class="form-group">
                    <label class="control-label" for="passcr">Confirmation du mot de passe</label>
                    <input id="passcr" type="password" class="form-control input-lg"
                           data-validation="confirmation" data-validation-confirm="password">
                </div>
                <input type="submit" value="Réinitialiser" class="btn btn-primary btn-block" name="forget">
                <div class="line line-dashed"></div>
            </form>
        </section>
    </div>
</section>

<footer id="footer">
    <div class="text-center padder">
        <p>
            <small><a href="">Rento</a> &copy; 2020</small>
        </p>
    </div>
</footer>

<script src="../js/jquery.min.js"></script>
<script src="../js/bootstrap.js"></script>
<script src="../js/jquery.form-validator.min.js"></script>
<script src="../../assets/js/iziToast.min.js"></script>

<?php
if (isset($_POST['forget'])) {
    if (!$state) {
        echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Une erreur est servenue sur notre system essayez de nouveau plus tard\',
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
                message: \'Mot de passe édité avec succès\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\',
                onClosed: function(){
                    window.location.href = "/user/auth/signin";
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
