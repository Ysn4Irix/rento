/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `rento`;
CREATE DATABASE IF NOT EXISTS `rento` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rento`;

DROP TABLE IF EXISTS `abonnement`;
CREATE TABLE IF NOT EXISTS `abonnement` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Abonne_email` varchar(120) DEFAULT NULL,
  `Creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tele` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `security_code` varchar(50) DEFAULT md5('1996'),
  `creation_date` datetime DEFAULT current_timestamp(),
  `updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `contactus`;
CREATE TABLE IF NOT EXISTS `contactus` (
  `ID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `Nom` varchar(120) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Message` longtext DEFAULT NULL,
  `Creation_date` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `extras`;
CREATE TABLE IF NOT EXISTS `extras` (
  `extrasID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `Nom` varchar(120) DEFAULT NULL,
  `Image` varchar(120) DEFAULT NULL,
  `Prix` float DEFAULT NULL,
  `Description` varchar(120) DEFAULT NULL,
  `Details` longtext DEFAULT NULL,
  `Deleted` int(11) DEFAULT 0,
  `Creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`extrasID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `marque`;
CREATE TABLE IF NOT EXISTS `marque` (
  `ID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `Nom` varchar(120) DEFAULT NULL,
  `Deleted` int(11) DEFAULT 0,
  `Creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `PaiementID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `UserID` int(11) DEFAULT NULL,
  `ReservationID` int(11) DEFAULT NULL,
  `Numero_carte` char(16) DEFAULT NULL,
  `Nom_carte` varchar(50) DEFAULT NULL,
  `Annee_carte` char(4) DEFAULT NULL,
  `Mois_carte` char(2) DEFAULT NULL,
  `Cvv` char(3) DEFAULT NULL,
  `Paiement_Adresse` varchar(120) DEFAULT NULL,
  `Deleted` int(11) DEFAULT 0,
  `Creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`PaiementID`),
  KEY `FK_paiement_reservation` (`ReservationID`),
  KEY `FK_paiement_users` (`UserID`),
  CONSTRAINT `FK_paiement_reservation` FOREIGN KEY (`ReservationID`) REFERENCES `reservation` (`reservationID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_paiement_users` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `id` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `email` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `reservationID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `VoitureID` int(11) DEFAULT NULL,
  `Date_debut` datetime DEFAULT NULL,
  `Date_fin` datetime DEFAULT NULL,
  `Prix_total` float DEFAULT NULL,
  `Message` varchar(120) DEFAULT NULL,
  `Status` varchar(120) DEFAULT 'En Attende',
  `Deleted` int(11) DEFAULT 0,
  `Reservation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`reservationID`),
  KEY `FK_reservation_users` (`UserID`),
  KEY `FK_reservation_voiture` (`VoitureID`),
  CONSTRAINT `FK_reservation_users` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_reservation_voiture` FOREIGN KEY (`VoitureID`) REFERENCES `voiture` (`VoitureID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=337046 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `Nom_complet` varchar(120) DEFAULT NULL,
  `Username` varchar(120) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Tele` char(13) DEFAULT NULL,
  `CP` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Ville` varchar(100) DEFAULT NULL,
  `Pays` varchar(100) DEFAULT 'Maroc',
  `Deleted` int(11) DEFAULT 0,
  `Inscription_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `voiture`;
CREATE TABLE IF NOT EXISTS `voiture` (
  `VoitureID` int(11) NOT NULL DEFAULT lpad(floor(rand() * 9999.99),4,'0'),
  `Titre` varchar(120) DEFAULT NULL,
  `IDMarque` int(11) DEFAULT NULL,
  `nb_valise` int(11) DEFAULT NULL,
  `nb_passagers` int(11) DEFAULT NULL,
  `nb_porte` int(11) DEFAULT NULL,
  `transmition` varchar(120) DEFAULT 'Auto',
  `Image` varchar(120) DEFAULT NULL,
  `Prix_jour` float DEFAULT NULL,
  `Categorie` varchar(120) DEFAULT NULL,
  `boite_vitesse` varchar(120) DEFAULT NULL,
  `Moteur` varchar(120) DEFAULT NULL,
  `Radio` varchar(120) DEFAULT 'Autoradio',
  `Deleted` int(11) DEFAULT 0,
  `Creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`VoitureID`),
  KEY `FK_voiture_marque` (`IDMarque`),
  CONSTRAINT `FK_voiture_marque` FOREIGN KEY (`IDMarque`) REFERENCES `marque` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
