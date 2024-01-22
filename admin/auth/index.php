<?php
session_start();
include_once('../../includes/dbcnx.php');
include_once('../../includes/dbfunctions.php');

if (isset($_POST['btncnx'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $admin = adminLogin($username, md5($password));
    $error = true;
    if (!$admin) {
        $error = false;
    } else {
        $_SESSION['admin'] = $admin;
    }
}
?>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <meta http-equiv="Content-Language" content="en"/>
    <meta name="msapplication-TileColor" content="#2d89ef"/>
    <meta name="theme-color" content="#4188c9"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="HandheldFriendly" content="True"/>
    <meta name="MobileOptimized" content="320"/>
    <link rel="icon" href="../../assets/images/favicon.ico" type="image/x-icon"/>
    <title>Admin - Rento</title>
    <link href="css/tabler.css" rel="stylesheet"/>
    <link rel="stylesheet" href="../../assets/css/all.min.css"/>
    <link rel="stylesheet" href="../../assets/css/iziToast.min.css"/>
</head>
<body>
<div class="page">
    <div class="page-single">
        <div class="container">
            <div class="row">
                <div class="col col-login mx-auto">
                    <div class="text-center mb-6">
                        <img src="images/logo.png" class="h-9" alt="Rento"/>
                    </div>
                    <form id="auth-form" class="card" method="post">
                        <div class="card-body p-6">
                            <div class="card-title">Bienvenue Admin</div>
                            <div class="form-group">
                                <label class="form-label" for="username">Nom d'utilisateur</label>
                                <input type="text"
                                       class="form-control"
                                       id="username"
                                       name="username"
                                       placeholder="Enter nom d'utilisateur"
                                       data-validation="required"/>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="password">
                                    Mot de passe
                                </label>
                                <input type="password"
                                       class="form-control"
                                       id="password"
                                       name="password"
                                       placeholder="Enter mot de passe"
                                       data-validation="required"/>
                            </div>
                            <div class="form-footer">
                                <input id="btn_cnx"
                                       class="btn btn-primary btn-block"
                                       name="btncnx"
                                       type="submit"
                                       value="Connexion"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../assets/js/jquery-1.11.3.min.js"></script>
<script src="../assets/js/jquery.form-validator.min.js"></script>
<script src="../assets/js/toggleDisabled.js"></script>
<script src="../assets/js/security.js"></script>
<script src="../../assets/js/iziToast.min.js"></script>

<?php
if (isset($_POST['btncnx'])) {
    if (!$error) {
        echo '<script>
            iziToast.error({
                title: \'Error\',
                message: \'Username ou mot de passe incorrect\',
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
                     window.location.href = "/admin/accueil";
                }
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
