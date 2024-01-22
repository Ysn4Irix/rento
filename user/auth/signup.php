<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $error = "success";
    $exists = userExists($email);
    if ($exists) {
        $error = "exists";
    } else {
        $state = userRegister($username, $email, md5($password));
        if (!$state) {
            $error = "error";
        }
    }
}
?>
<html lang="en" class="bg-dark">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="utf-8" />
    <title>
        Inscription - Rento
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="../css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="../../assets/css/all.min.css" />
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" href="/assets/images/favicon.ico" />
</head>

<body>
    <section id="auth-content" class="m-t-lg wrapper-md animated fadeInUp">
        <div class="container aside-xxl">
            <p class="navbar-brand block">Inscrivez-vous maintenant.</p>
            <section class="panel panel-default bg-white m-t-lg">
                <header class="panel-heading text-center">
                    <strong>Inscription</strong>
                </header>
                <form method="post" class="panel-body wrapper-lg">
                    <div class="form-group">
                        <label class="control-label" for="user">Nom d'utilisateur</label>
                        <input id="user" type="text" class="form-control input-lg" name="username" data-validation="required">
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="mail">Email</label>
                        <input id="mail" type="text" class="form-control input-lg" name="email" data-validation="email">
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="password">Mot de passe</label>
                        <input type="password" class="form-control input-lg" name="password" id="password" data-validation="length" data-validation-length="min6">
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="passcr">Confirmation du mot de passe</label>
                        <input id="passcr" type="password" class="form-control input-lg" data-validation="confirmation" data-validation-confirm="password">
                    </div>
                    <br>
                    <div class="form-group">
                        <input data-validation="recaptcha" data-validation-recaptcha-sitekey="[RECAPTCHA_SITEKEY]">
                    </div>
                    <input type="submit" value="Inscription" class="btn btn-primary btn-block" name="register">
                    <div class="line line-dashed"></div>
                    <p class="text-muted text-center"><small>Vous avez déjà un compte ?</small></p>
                    <a href="signin" class="btn btn-default btn-block">Connexion</a>
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
    if (isset($_POST['register'])) {
        if ($error == "error") {
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
        } else if ($error == "success") {
            echo '<script>
            iziToast.success({
                title: \'Success\',
                message: \'Inscription Success Redirection\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\',
                onClosed: function(){
                    window.location.href = "/user/auth/signin";
                }
            });
        </script>';
        } else {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Utilisateur déja exists\',
                position: \'topRight\',
                icon: \'fa fa-close\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
        }
    }
    ?>
    <script>
        $.validate({
            lang: 'fr',
            modules: 'security',
            reCaptchaSiteKey: '6LcKrd0UAAAAAAF3zt9Df3mzp4O2O6lS07ta32OU',
            reCaptchaTheme: 'light',
        });
    </script>
</body>

</html>