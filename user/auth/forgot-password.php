<?php
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (isset($_POST['forget'])) {
    $email = $_POST['email'];
    $state = reset_userpassword($email);
}

?>

<html lang="en" class="bg-dark">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="utf-8" />
    <title>
        Forgot password - Rento
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="../css/app.min.css" type="text/css" />
    <link rel="stylesheet" href="../../assets/css/all.min.css" />
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css" />
    <link rel="shortcut icon" sizes="16x16 24x24 32x32" href="/assets/images/favicon.ico" />
</head>

<body>
    <section id="content" class="m-t-lg wrapper-md animated fadeInUp">
        <div class="container aside-xxl">
            <p class="navbar-brand block">Ne vous inquiétez pas</i></p>
            <section class="panel panel-default bg-white m-t-lg">
                <header class="panel-heading text-center">
                    <strong>Nous vous enverrons un lien par email pour réinitialiser votre mot de passe.</strong>
                </header>
                <form method="post" class="panel-body wrapper-lg toggle-disabled has-validation-callback">
                    <div class="form-group">
                        <label class="control-label" for="mail">Votre Email</label>
                        <input id="text" type="text" class="form-control input-lg" name="email" placeholder="user@example.com" data-validation="email" data-validation-event="keyup change" />
                    </div>
                    <input type="submit" value="Envoyer" class="btn btn-primary" name="forget">
                    <div class="line line-dashed"></div>
                    <a href="signin" class="btn btn-default btn-block">Retour à la page de connexion.</a>
                </form>
            </section>
        </div>
    </section>

    <footer id="footer">
        <div class="text-center padder">
            <p>
                <small><a href="/./rento">Rento</a> &copy; 2020</small>
            </p>
        </div>
    </footer>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.js"></script>
    <script src="../js/jquery.form-validator.min.js"></script>
    <script src="../../assets/js/iziToast.min.js"></script>
    <?php
    if (isset($_POST['forget'])) {
        switch ($state) {
            case "noemail";
                echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Ce email non exists sur notre system\',
                position: \'topRight\',
                icon: \'fa fa-close\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
                break;
            case "erroradd";
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
                break;
            case "emailsend";
                echo '<script>
            iziToast.success({
                title: \'Success\',
                message: \'Lien envoyé avec Succès voir votre email\',
                position: \'topRight\',
                icon: \'fa fa-check\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
                break;
            case "emptyemail";
                echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Remplir le champ\',
                position: \'topRight\',
                icon: \'fa fa-close\',
                timeout:3000,
                transitionIn: \'bounceInLeft\'
            });
        </script>';
                break;
        }
    }
    ?>
    <script>
        $.validate({
            lang: 'fr',
            modules: 'toggleDisabled',
            disabledFormFilter: 'form.toggle-disabled',
            showErrorDialogs: true
        });
    </script>
</body>

</html>