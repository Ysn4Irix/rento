<?php

include_once('dbcnx.php');
include_once('class.phpmailer.php');
include_once('class.smtp.php');
//------------------------------------------FrontEnd------------------------------------------//

function userLogin($login, $password)
{
    $user = null;
    $db = dbcnx::getcnx();
    if ($login != "" && $password != "") {
    try {
        $query = $db->prepare("SELECT * FROM users WHERE Email = ? AND Password = ? AND Deleted != 1");
        $query->execute([$login, $password]);
        $user = $query->fetch();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERLOGIN:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    }
    return $user;
}

function userRegister($username, $email, $password)
{
    $db = dbcnx::getcnx();
    $state = false;
if ($username != "" && $email != "" && $password != "") {
    try {
        $query = $db->prepare("INSERT INTO users(Username,Email,Password) VALUES (?, ?, ?)");
        $query->execute([$username, $email, $password]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERREGISTER:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
}
    return $state;
}

function userExists($email)
{
    $db = dbcnx::getcnx();
    $state = false;
 if ($email != "") {
    try {
        $query = $db->prepare("SELECT * FROM users WHERE Email = ? AND Deleted != 1");
        $query->execute([$email]);
        $state = $query->fetch();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERLOGIN:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
 }
    return $state;
}

function reset_userpassword($email)
{
    $db = dbcnx::getcnx();
        $state = "";
    if ($email != "") {
    try {
        $query = $db->prepare("SELECT * FROM users WHERE Email = ? AND Deleted != 1");
        $query->execute([$email]);
        $user = $query->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            try {
                $userid = $user['Username'];
                $token = bin2hex(random_bytes(50));

                try {
                    $query = $db->prepare("INSERT INTO password_resets(email,token) VALUES (?, ?)");
                    $query->execute([$email, $token]);
                    if ($query) {
                        $mail = new PHPMailer();
                        $mail->isSMTP(); // Set mailer to use SMTP
                        $mail->FromName = 'Rento Help';
                        $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
                        $mail->SMTPAuth = true; // Enable SMTP authentication
                        $mail->Username = 'Your Gmail Account'; // SMTP username
                        $mail->Password = 'Your Gmail Password'; // SMTP password
                        $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
                        $mail->Port = 465; // TCP port to connect to
                        $mail->setFrom('rentohelp.gmail.com', 'Rento Help');
                        $mail->addReplyTo('rentohelp.gmail.com', 'Rento Help');
                        $mail->addAddress($email); // Add a recipient
                        $mail->isHTML(true); // Set email format to HTML
                        $bodyContent = '<h2>Bonjour User : <span style="color:red;">' . $userid . '</span></h2>';
                        $bodyContent .= "<h3>Cliquer sur ce <a href=\"/user/auth/new-password?token=" . $token . "\">lien</a> pour reinitialiser votre mot de passe sur notre site</h3>";
                        $mail->Subject = 'Rento - Reinitialisation du mot de passe';
                        $mail->Body = $bodyContent;
                        if ($mail->Send()) {
                            $state = "emailsend";
                        }else{
                            $state = $mail->ErrorInfo;
                        }
                    } else {
                        $state = "erroradd";
                    }
                } catch (PDOException $e) {
                    error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERRESET:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
                }
            } catch (phpmailerException $e) {
                error_log('[' . date("Y-m-d H:i:s") . "] MAIL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
            }
        } else {
            $state = "noemail";
        }
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERLOGIN :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
}else{
    $state = "emptyemail";
}
    return $state;
}

function update_password($password)
{
    $state = false;
    if ($password != "") {
    try {
        $db = dbcnx::getcnx();
        $token = $_GET['token'];
        $query = $db->prepare("SELECT * FROM password_resets WHERE token = ?  LIMIT 1");
        $query->execute([$token]);
        $data = $query->fetch(PDO::FETCH_ASSOC);
        if ($query->rowCount() > 0) {
            $email = $data['email'];
            $sql = "UPDATE users SET Password = ? WHERE Email = ? AND Deleted != 1";
            $req = $db->prepare($sql);
            $state = $req->execute([md5($password), $email]);
        }
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERPASSWORD :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
        $state = -1;
    }
    }
    return $state;
}

function getlatestcars()
{
    $list = null;
    try {
        $db = dbcnx::getcnx();

        $query = $db->query("SELECT * FROM voiture WHERE Deleted != 1 ORDER BY Creation_date LIMIT 5");

        $list = $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $list;
}

function getallcars()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM voiture WHERE Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function subscribe($email)
{
    $db = dbcnx::getcnx();
    $state = false;
if ($email != "") {
    try {
        $query = $db->prepare("INSERT INTO abonnement(Abonne_email) VALUES (?)");
        $query->execute([$email]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERSUBSCRIBE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
}
    return $state;
}

function contactus($nom, $email, $message)
{
    $db = dbcnx::getcnx();
    $state = false;
 if ($email != "" && $nom != "" && $message != "") {
    try {
        $query = $db->prepare("INSERT INTO contactus(Nom,Email,Message) VALUES (?,?,?)");
        $query->execute([$nom, $email, $message]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error CONTACTUS:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
 }
    return $state;
}

function getextras()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM extras WHERE Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getcarbyid($id)
{
    $data = null;
    if ($id != "") {
    try {
        $db = dbcnx::getcnx();
        $query = $db->prepare("SELECT * FROM voiture WHERE VoitureID= ? AND Deleted != 1");
        $query->execute([$id]);
        $data = $query->Fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    }
    return $data;
}

function calcprixperdates($date_depart, $date_retour, $prix)
{
    $total = null;
    try {
        $date1 = strtotime($date_depart);
        $date2 = strtotime($date_retour);
        $days = $date1 - $date2;
        $total = round($days / (60 * 60 * 24)) * $prix;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] Price Calculation Error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $total;
}

function addreservation($userid, $voitureid, $date_debut, $heure_debut, $date_fin, $heure_fin, $Prix_total)
{
    $reservatioID = 0;
    $db = dbcnx::getcnx();

    try {
        $dateD = $date_debut . ' ' . $heure_debut . ':00';
        $dateF = $date_fin . ' ' . $heure_fin . ':00';
        $query = $db->prepare("INSERT INTO reservation(UserID,VoitureID,Date_debut,Date_fin,Prix_total) VALUES (?,?,?,?,?)");
        $query->execute([$userid, $voitureid, $dateD, $dateF, $Prix_total]);
        $reservatioID = $db->lastInsertId();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error RESERVATIONINSERT:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $reservatioID;
}

function updateuserinfo($firstname, $lastname, $tele, $cp, $adresse, $ville, $userid)
{
    $db = dbcnx::getcnx();
    $state = false;
    try {
        $fullname = $firstname . ' ' . $lastname;
        $query = $db->prepare("UPDATE users SET Nom_complet=?, Tele=?, CP=?,Address=?,Ville=?,Pays='Maroc' WHERE UserID=? AND Deleted != 1");
        $query->execute([$fullname, $tele, $cp, $adresse, $ville, $userid]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USERINFOINSERT:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function adduserpaymaent($userid, $reservationid, $numcarte, $nomcarte, $anne_carte, $moin_carte, $cvv, $Paiement_Adresse)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("INSERT INTO paiement
                        (UserID,ReservationID,Numero_carte,Nom_carte,Annee_carte,Mois_carte,Cvv,Paiement_Adresse)
                        VALUES (?,?,?,?,?,?,?,?)");
        $query->execute([$userid, $reservationid, $numcarte, $nomcarte, $anne_carte, $moin_carte, $cvv, $Paiement_Adresse]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error PAYEMENTINSERT:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getuserbyid($id)
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->prepare("SELECT * FROM users WHERE UserID= ? AND Deleted != 1");
        $query->execute([$id]);
        $data = $query->Fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getreservationbyuser($id)
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->prepare("SELECT * FROM reservation r INNER JOIN voiture v ON v.VoitureID = r.VoitureID WHERE UserID = ? AND r.Deleted != 1");
        $query->execute([$id]);
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function change_userpassword($userid, $oldpass, $newpass)
{
    $db = dbcnx::getcnx();
    $oldpassmsg = false;
if ($oldpass != "" && $newpass != "") {
    try {
        $query = $db->prepare("SELECT * FROM users WHERE Password = ? AND Deleted != 1");
        $query->execute([md5($oldpass)]);
        $state = $query->fetch(PDO::FETCH_ASSOC);
        if ($state) {
            $sql = $db->prepare("UPDATE users SET Password= ? WHERE UserID= ? AND Deleted != 1");
            $sql->execute([md5($newpass), $userid]);
            $oldpassmsg = true;
        }
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error USEROLDPASS :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
}
    return $oldpassmsg;
}

//------------------------------------------BackEnd------------------------------------------//

function adminLogin($username, $password)
{
    $admin = null;
    $db = dbcnx::getcnx();
if ($username != "" && $password != "") {
    try {
        $query = $db->prepare("SELECT * FROM admin WHERE username = ? AND password = ?");
        $query->execute([$username, $password]);
        $admin = $query->fetch();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error ADMINLOGIN:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
}
    return $admin;
}

function counts()
{
    $cars = null;
    $users = null;
    $reservations = null;
    $marques = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM voiture WHERE Deleted != 1");
        $query->execute();
        $query->closeCursor();
        $cars = $query->rowCount();
        $sql = $db->query("SELECT * FROM users WHERE Deleted != 1");
        $sql->execute();
        $sql->closeCursor();
        $users = $sql->rowCount();
        $sql1 = $db->query("SELECT * FROM reservation WHERE Deleted != 1");
        $sql1->closeCursor();
        $reservations = $sql1->rowCount();
        $sql2 = $db->query("SELECT * FROM marque WHERE Deleted != 1");
        $sql2->execute();
        $sql2->closeCursor();
        $marques = $sql2->rowCount();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return array(
        'cars' => $cars,
        'users' => $users,
        'reservations' => $reservations,
        'marques' => $marques
    );
}

function totalreservationpermonth()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT MONTH(Reservation_date) AS 'Mois de reservation', COUNT(DISTINCT ReservationID) 'nb_réservation'FROM reservation WHERE Deleted != 1 GROUP BY MONTH(Reservation_date)");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function AddInfoAdmin($first, $last, $email, $tele, $AdminID)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("UPDATE admin SET nom=?, prenom=?, tele=?,email=? WHERE id=?");
        $query->execute([$last, $first, $tele, $email, $AdminID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error ADMININFO:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function UpdatePassAdmin($old, $password, $adminID)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $sql = $db->prepare("SELECT * From admin WHERE password=?");
        $sql->execute([md5($old)]);
        if ($sql->rowCount() > 0) {
            $query = $db->prepare("UPDATE admin SET password=? WHERE id=?");
            $query->execute([md5($password), $adminID]);
            $state = true;
        }
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error ADMINUPDATEPASS:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function UpdateEmailAdmin($oldEmail, $newEmail, $secutityCode, $adminID)
{
    $db = dbcnx::getcnx();
    $state = 0;

    try {
        $sql = $db->prepare("SELECT * From admin WHERE email=?");
        $sql->execute([$oldEmail]);
        if ($sql->rowCount() > 0) {
            $req = $db->prepare("SELECT * From admin WHERE security_code=?");
            $req->execute([md5($secutityCode)]);
            if ($req->rowCount() > 0) {
                $query = $db->prepare("UPDATE admin SET email=? WHERE id=?");
                $query->execute([$newEmail, $adminID]);
                $state = 1;
            } else {
                $state = -2;
            }
        }
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error ADMINUPDATEPASS:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getallreservations()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT u.Email,v.Titre,r.* FROM reservation r INNER JOIN users u ON r.UserID= u.UserID INNER JOIN voiture v ON r.VoitureID = v.VoitureID WHERE r.Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getallusers()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM users WHERE Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getallreservationsPerClients()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT u.Username,u.Email,COUNT(r.reservationID) AS 'Nombre des réservations',r.Reservation_date FROM reservation r INNER JOIN users u ON r.UserID= u.UserID WHERE r.Deleted != 1 GROUP BY r.UserID");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function UpdateRervationStatus($reserID, $statut)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("UPDATE reservation SET Status=? WHERE reservationID=? AND Deleted != 1");
        $query->execute([$statut, $reserID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error RESERVATION UPDATE STATUTS:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function DeleteReservation($reserID)
{
    $db = dbcnx::getcnx();
    $state = false;
    try {
        $query = $db->prepare("UPDATE reservation SET Deleted=1 WHERE reservationID=?");
        $query->execute([$reserID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error RESERVATION DELETE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function DeleteUser($UserID)
{
    $db = dbcnx::getcnx();
    $state = false;
    try {
        $query = $db->prepare("UPDATE users SET Deleted=1 WHERE UserID=?");
        $query->execute([$UserID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error RESERVATION DELETE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getallcarsPermarque()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT m.Nom,COUNT(v.VoitureID) AS 'Nombre des voitures',m.Creation_date FROM voiture v INNER JOIN marque m ON v.IDMarque=m.ID WHERE m.Deleted != 1 GROUP BY m.Nom");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function UpdateCarInfo($VoitureID, $Titre, $nb_porte, $boite_vitesse, $Prix_jour, $Categorie)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("UPDATE voiture SET Titre=?,boite_vitesse=?,nb_porte=?,Prix_jour=?,Categorie=? WHERE VoitureID=? AND Deleted != 1");
        $query->execute([$Titre, $boite_vitesse, $nb_porte, $Prix_jour, $Categorie, $VoitureID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error VOITURE UPDATE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function DeleteCar($VoitureID)
{
    $db = dbcnx::getcnx();
    $state = false;
    try {
        $query = $db->prepare("UPDATE voiture SET Deleted=1 WHERE VoitureID=?");
        $query->execute([$VoitureID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error VOITURE DELETE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getallmarque()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM marque WHERE Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function addVoiture($Titre, $IDMarque, $nb_valise, $nb_passagers, $nb_porte, $Image, $Prix_jour, $Categorie, $boite_vitesse, $Moteur)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("INSERT INTO voiture
                        (Titre,IDMarque,nb_valise,nb_passagers,nb_porte,Image,Prix_jour,Categorie,boite_vitesse,Moteur)
                        VALUES (?,?,?,?,?,?,?,?,?,?)");
        $query->execute([$Titre, $IDMarque, $nb_valise, $nb_passagers, $nb_porte, $Image, $Prix_jour, $Categorie, $boite_vitesse, $Moteur]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error VOITURE INSERT:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function UpdateMarqueInfo($ID, $Nom)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("UPDATE marque SET Nom=? WHERE ID=? AND Deleted != 1");
        $query->execute([$Nom, $ID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error MARQUE UPDATE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function DeleteMarque($ID)
{
    $db = dbcnx::getcnx();
    $state = false;
    try {
        $query = $db->prepare("UPDATE marque SET Deleted=1 WHERE ID=?");
        $query->execute([$ID]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error MARQUE DELETE:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function addMarque($Nom)
{
    $db = dbcnx::getcnx();
    $state = false;

    try {
        $query = $db->prepare("INSERT INTO marque
                        (Nom)
                        VALUES (?)");
        $query->execute([$Nom]);
        $state = true;
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error MARQUE INSERT:" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getallpaiements()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT p.*,u.Username FROM paiement p INNER JOIN users u ON p.UserID = u.UserID WHERE p.Deleted != 1");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getallcontacts()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM contactus ORDER BY creation_date desc");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function countMarques()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM contactus");
        $query->execute();
        $data = $query->rowCount();
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function getcontactinfobyid($id)
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->prepare("SELECT * FROM contactus WHERE ID= ?");
        $query->execute([$id]);
        $data = $query->Fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}

function replytocontact($message, $email, $nom)
{
    $state = false;
    try {
        $mail = new PHPMailer();
        $mail->isSMTP(); // Set mailer to use SMTP
        $mail->FromName = 'Rento help';
        $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'rentohelp@gmail.com'; // SMTP username
        $mail->Password = 'rento8899'; // SMTP password
        $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465; // TCP port to connect to
        $mail->setFrom('rentohelp.gmail.com', 'Rento Help');
        $mail->addReplyTo('rentohelp.gmail.com', 'Rento Help');
        $mail->addAddress($email); // Add a recipient
        $mail->isHTML(true); // Set email format to HTML
        $bodyContent = '<h2>Bonjour : <span style="color:red;">' . $nom . '</span></h2>';
        $bodyContent .= "<h3>" . $message . "</h3>";
        $mail->Subject = 'Rento - Reponse sur votre Message';
        $mail->Body = $bodyContent;
        if ($mail->Send()) {
            $state = true;
        }
    } catch (phpmailerException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] ReplytoContact error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $state;
}

function getallsubsEmails()
{
    $data = null;
    try {
        $db = dbcnx::getcnx();
        $query = $db->query("SELECT * FROM abonnement ORDER BY creation_date desc");
        $query->execute();
        $data = $query->FetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('[' . date("Y-m-d H:i:s") . "] SQL Subs Emails error :" . $e->getMessage() . "\r\n", 3, __DIR__ . "/../log/sql_errors.log");
    }
    return $data;
}
