<header class="bg-dark lt header navbar navbar-fixed-top-xs">
    <div class="navbar-header bg-danger aside-md">
        <a class="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
            <i class="fa fa-bars"></i>
        </a>
        <a href="accueil" class="navbar-brand m-l-md" data-toggle="fullscreen">
            <img src="assets/img/thumb.png" class="m-l-lg"/>
            Rento
        </a>
        <a class="btn btn-link visible-xs" data-toggle="dropdown" data-target=".nav-user">
            <i class="fa fa-cog"></i>
        </a>
    </div>
    <ul class="nav navbar-nav navbar-right nav-user m-n hidden-xs">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <span class="thumb-sm avatar pull-left">
                    <img src="assets/img/administrator.svg"/>
                  </span><?= $_SESSION['admin']['username'] ?><b class="caret"></b>
            </a>
            <ul class="dropdown-menu animated fadeInRight">
                <span class="arrow top"></span>
                <li>
                    <a href="profile">Paramètres</a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="logout">Logout</a>
                </li>
            </ul>
        </li>
    </ul>
</header>