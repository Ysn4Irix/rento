<div id="branding">
    <div id="branding-content">
        <div class="menus">
            <div id="infouser" class="country">
                <select class="select" name="select_country" id="select_country">
                    <option id="opuser" selected="selected" disabled="disabled">
                        <?php
                        if (isset($_SESSION['user'])) {
                            echo $_SESSION['user']['Username'];
                        } else {
                            echo "";
                        }
                        ?>
                    </option>
                    <option>Compte</option>
                    <option>Reservation</option>
                    <option>Change-passe</option>
                    <option>Deconnexion</option>
                </select>
            </div>
        </div>
        <div class="title-content">
            <a href="" title>
                <img style="width: 50px;" class="site-logo animated flip delay-2s slow" src="/assets/images/thumb.png" alt="site-logo" />
                <h1 class="site-title">Rento</h1>
            </a>
        </div>
        <div class="access-content">
            <label for="menu-icon" class="menu-icon"><img src="/assets/images/menu.png" alt=menu /></label>
            <input type="checkbox" id="menu-icon" value="1" />
            <ul style="font-weight: 700;">
                <li class="menu-close"><span>&#10006;</span></li>
                <li id="home" class="current_page_item">
                    <a href="/index" title>Accueil</a>
                </li>
                <li id="voiture"><a href="/voitures" title>Voitures</a></li>
                <li id="cat"><a href="/contact" title>Contact</a></li>
            </ul>
        </div>
        <div id="signupin" class="member">
            <span class="sign_in">
                <a class="sign_button" href="/user/auth/signin" target="_blank">
                    Connexion / Inscription
                </a>
            </span>
        </div>
    </div>
    <div class="clear"></div>
</div>