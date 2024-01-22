<?php
function isuser()
{
    if (isset($_SESSION['user'])) {
        echo '<script>
            $(\'#infouser\').show();
            $(\'#signupin\').hide();
        </script>';
    } else {
        echo '<script>
            $(\'#infouser\').hide();
             $(\'#signupin\').show();
        </script>';
    }
}