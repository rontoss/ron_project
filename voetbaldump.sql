-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: football
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coachingStaff`
--

DROP TABLE IF EXISTS `coachingStaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coachingStaff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `roll` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coachingStaff`
--

LOCK TABLES `coachingStaff` WRITE;
/*!40000 ALTER TABLE `coachingStaff` DISABLE KEYS */;
INSERT INTO `coachingStaff` VALUES (1,'Jelle','ten Rouwelaar','Goalkeeping Coach'),(3,'Rob','Penders','Assistant Manager');
/*!40000 ALTER TABLE `coachingStaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fieldPlayer`
--

DROP TABLE IF EXISTS `fieldPlayer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fieldPlayer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `number` int(10) unsigned NOT NULL,
  `position` varchar(50) NOT NULL,
  `preferredFoot` varchar(50) NOT NULL,
  `isReserved` tinyint(1) NOT NULL,
  `pace` int(10) unsigned NOT NULL,
  `shooting` int(10) unsigned NOT NULL,
  `passing` int(10) unsigned NOT NULL,
  `dribble` int(10) unsigned NOT NULL,
  `defending` int(10) unsigned NOT NULL,
  `physical` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fieldPlayer`
--

LOCK TABLES `fieldPlayer` WRITE;
/*!40000 ALTER TABLE `fieldPlayer` DISABLE KEYS */;
INSERT INTO `fieldPlayer` VALUES (1,'Gianluca','Nijholt',28,'CDM','Left',0,51,64,67,66,59,70),(2,'Greg','Leigh',21,'LB','Left',0,79,46,50,60,61,64),(5,'Menno','Koch',4,'CV','Right',0,36,31,48,50,67,68);
/*!40000 ALTER TABLE `fieldPlayer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footballClub`
--

DROP TABLE IF EXISTS `footballClub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footballClub` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `clubName` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `stadiumName` varchar(50) NOT NULL,
  `stadiumCapacity` varchar(50) NOT NULL,
  `league` varchar(50) DEFAULT NULL,
  `squadSize` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footballClub`
--

LOCK TABLES `footballClub` WRITE;
/*!40000 ALTER TABLE `footballClub` DISABLE KEYS */;
INSERT INTO `footballClub` VALUES (1,'NAC Breda','Breda','Rat Verlegh Stadion','19000','Eredivisie',31),(3,'AZ Alkmaar','Alkmaar','AFAS Stadion','17023','Eredivisie',28);
/*!40000 ALTER TABLE `footballClub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goalkeeper`
--

DROP TABLE IF EXISTS `goalkeeper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goalkeeper` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `number` int(10) unsigned NOT NULL,
  `preferredFoot` varchar(50) NOT NULL,
  `isReserved` tinyint(1) NOT NULL,
  `diving` int(10) unsigned NOT NULL,
  `handling` int(10) unsigned NOT NULL,
  `kicking` int(10) unsigned NOT NULL,
  `reflexes` int(10) unsigned NOT NULL,
  `speed` int(10) unsigned NOT NULL,
  `positionScore` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goalkeeper`
--

LOCK TABLES `goalkeeper` WRITE;
/*!40000 ALTER TABLE `goalkeeper` DISABLE KEYS */;
INSERT INTO `goalkeeper` VALUES (1,'Benjamin','van Leer',1,'Right',0,72,77,65,75,44,72),(3,'Karol','Niemczycki',26,'Right',0,57,58,55,60,28,57);
/*!40000 ALTER TABLE `goalkeeper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-28 10:02:37
