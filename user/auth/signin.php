<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (isset($_POST['login_user'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $user = userLogin($email, md5($password));
    $error = true;
    if (!$user) {
        $error = false;
    } else {
        $_SESSION['user'] = $user;
    }
}
?>

<!DOCTYPE html>
<html lang="en" class="bg-dark">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="utf-8" />
    <title>Connexion - Rento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="../css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="../../assets/css/all.min.css" />
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" type="image/x-icon" href="/assets/images/favicon.ico" />
</head>

<body>
    <section id="auth-content" class="m-t-lg wrapper-md animated fadeInUp">
        <div class="container aside-xxl">
            <p class="navbar-brand block">
                Bienvenue.
            </p>
            <section class="panel panel-default bg-white m-t-l">
                <header class="panel-heading text-center">
                    <strong>Se Connecter</strong>
                </header>
                <form method="post" class="panel-body wrapper-lg">
                    <div class="form-group">
                        <label class="control-label" for="mail">Email</label>
                        <input id="mail" type="text" class="form-control input-lg" name="email" data-validation="email" />
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="pass">Mot de passe</label>
                        <input id="pass" type="password" class="form-control input-lg" name="password" data-validation="required" />
                    </div>
                    <br>
                    <div class="form-group">
                        <input data-validation="recaptcha" data-validation-recaptcha-sitekey="[RECAPTCHA_SITEKEY]">
                    </div>
                    <a href="forgot-password" class="pull-right m-t-xs"><small>Mot de passe oublié ?</small></a>
                    <input type="submit" value="Connexion" class="btn btn-primary" name="login_user">
                    <div class="line line-dashed"></div>
                    <p class="text-muted text-center">
                        <small>Vous n'avez pas de compte ?</small>
                    </p>
                    <a href="signup" class="btn btn-default btn-block">Créer un compte</a>
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
    if (isset($_POST['login_user'])) {
        if (!$error) {
            echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Utilisateur non exists\',
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
                message: \'Connexion Success Redirection\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\',
                onClosed: function(){
                     window.location.href = "";
                }
            });
        </script>';
        }
    }
    ?>
    <script>
        $.validate({
            lang: 'fr',
            modules: 'security',
            //reCaptchaSiteKey: '6Let3bEZAAAAAHW0jlr7uqMmZXp2hdltqppgj4Aa',
            reCaptchaSiteKey: '6LcKrd0UAAAAAAF3zt9Df3mzp4O2O6lS07ta32OU',
            reCaptchaTheme: 'light'
        });
    </script>

</body>

</html>