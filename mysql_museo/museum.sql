-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: museum
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artistas` (
  `ArtistaID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(55) DEFAULT NULL,
  `Apellidos` varchar(150) DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Nacionalidad` varchar(255) DEFAULT NULL,
  `Biografia` text,
  PRIMARY KEY (`ArtistaID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas`
--

LOCK TABLES `artistas` WRITE;
/*!40000 ALTER TABLE `artistas` DISABLE KEYS */;
INSERT INTO `artistas` VALUES (1,'Leonardo','Da Vinci','1452-04-15','Italiana','Pintor, inventor y polímata del Renacimiento.'),(2,'Claude','Monet','1840-11-14','Francesa','Fundador del impresionismo francés.'),(3,'Frida','Kahlo','1907-07-06','Mexicana','Pintora conocida por sus autorretratos.'),(4,'Salvador','Dalí','1904-05-11','Española','Artista surrealista conocido por sus obras de arte oníricas.'),(5,'Rembrandt','van Rijn','1606-07-15','Holandesa','Pintor y grabador barroco.'),(6,'Georgia','O\'Keeffe','1887-11-15','Americana','Artista conocida por sus pinturas de flores y paisajes de Nuevo México.'),(7,'Michelangelo','Buonarroti','1475-03-06','Italiana','Escultor, pintor y arquitecto del Alto Renacimiento.'),(8,'Edvard','Munch','1863-12-12','Noruega','Pintor y grabador expresionista.'),(9,'Gustav','Klimt','1862-07-14','Austriaca','Pintor simbolista, conocido por su obra \"El beso\".'),(10,'Jackson','Pollock','1912-01-28','Americana','Figura importante en el movimiento del expresionismo abstracto.');
/*!40000 ALTER TABLE `artistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `EstadoID` int NOT NULL AUTO_INCREMENT,
  `EstadoActual` enum('Exhibición','Préstamo','Restauración','Almacenado') DEFAULT NULL,
  `FechaPrestamo` date DEFAULT NULL,
  `FechaDevolucion` date DEFAULT NULL,
  PRIMARY KEY (`EstadoID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Exhibición',NULL,NULL),(2,'Préstamo','2023-01-01','2023-01-31'),(3,'Restauración','2023-02-01','2023-02-28'),(4,'Almacenado',NULL,NULL),(5,'Exhibición',NULL,NULL),(6,'Préstamo','2023-03-01','2023-03-31'),(7,'Restauración','2023-04-01','2023-04-30'),(8,'Almacenado',NULL,NULL),(9,'Exhibición',NULL,NULL),(10,'Préstamo','2023-05-01','2023-05-31');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exhibiciones`
--

DROP TABLE IF EXISTS `exhibiciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exhibiciones` (
  `ExposicionID` int NOT NULL AUTO_INCREMENT,
  `Tipo` enum('Permanente','Temporal','Itinerante') DEFAULT NULL,
  PRIMARY KEY (`ExposicionID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exhibiciones`
--

LOCK TABLES `exhibiciones` WRITE;
/*!40000 ALTER TABLE `exhibiciones` DISABLE KEYS */;
INSERT INTO `exhibiciones` VALUES (1,'Permanente'),(2,'Temporal'),(3,'Itinerante'),(4,'Permanente'),(5,'Temporal'),(6,'Itinerante'),(7,'Permanente'),(8,'Temporal'),(9,'Itinerante'),(10,'Permanente');
/*!40000 ALTER TABLE `exhibiciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugares`
--

DROP TABLE IF EXISTS `lugares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugares` (
  `LugarID` int NOT NULL AUTO_INCREMENT,
  `Tipo` enum('Sala Principal','Galería Secundaria','Depósito') DEFAULT NULL,
  PRIMARY KEY (`LugarID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugares`
--

LOCK TABLES `lugares` WRITE;
/*!40000 ALTER TABLE `lugares` DISABLE KEYS */;
INSERT INTO `lugares` VALUES (1,'Sala Principal'),(2,'Galería Secundaria'),(3,'Depósito'),(4,'Sala Principal'),(5,'Galería Secundaria'),(6,'Depósito'),(7,'Sala Principal'),(8,'Galería Secundaria'),(9,'Depósito'),(10,'Sala Principal');
/*!40000 ALTER TABLE `lugares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obras`
--

DROP TABLE IF EXISTS `obras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obras` (
  `ObraID` int NOT NULL AUTO_INCREMENT,
  `Descripcion` text,
  `Año` int DEFAULT NULL,
  `ArtistaID` int DEFAULT NULL,
  `LugarID` int DEFAULT NULL,
  `PropietarioID` int DEFAULT NULL,
  `EstadoID` int DEFAULT NULL,
  `ExposicionID` int DEFAULT NULL,
  PRIMARY KEY (`ObraID`),
  KEY `ArtistaID` (`ArtistaID`),
  KEY `LugarID` (`LugarID`),
  KEY `PropietarioID` (`PropietarioID`),
  KEY `EstadoID` (`EstadoID`),
  KEY `fk_ExposicionID` (`ExposicionID`),
  CONSTRAINT `fk_ExposicionID` FOREIGN KEY (`ExposicionID`) REFERENCES `exhibiciones` (`ExposicionID`),
  CONSTRAINT `obras_ibfk_1` FOREIGN KEY (`ArtistaID`) REFERENCES `artistas` (`ArtistaID`),
  CONSTRAINT `obras_ibfk_2` FOREIGN KEY (`LugarID`) REFERENCES `lugares` (`LugarID`),
  CONSTRAINT `obras_ibfk_3` FOREIGN KEY (`PropietarioID`) REFERENCES `propietarios` (`PropietarioID`),
  CONSTRAINT `obras_ibfk_4` FOREIGN KEY (`EstadoID`) REFERENCES `estados` (`EstadoID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obras`
--

LOCK TABLES `obras` WRITE;
/*!40000 ALTER TABLE `obras` DISABLE KEYS */;
INSERT INTO `obras` VALUES (1,'Obra Descripción 1',2000,1,1,1,1,NULL),(2,'Obra Descripción 2',2001,2,2,2,2,NULL),(3,'Obra Descripción 3',2002,3,3,3,3,NULL),(4,'Obra Descripción 4',2003,4,4,4,4,NULL),(5,'Obra Descripción 5',2004,5,5,5,5,NULL),(6,'Obra Descripción 6',2005,6,6,6,6,NULL),(7,'Obra Descripción 7',2006,7,7,7,7,NULL),(8,'Obra Descripción 8',2007,8,8,8,8,NULL),(9,'Obra Descripción 9',2008,9,9,9,9,NULL),(10,'Obra Descripción 10',2009,10,10,10,10,NULL);
/*!40000 ALTER TABLE `obras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propietarios`
--

DROP TABLE IF EXISTS `propietarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propietarios` (
  `PropietarioID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(150) DEFAULT NULL,
  `Email` varchar(25) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Tipo` enum('Individual','Corporativo','Gubernamental') DEFAULT NULL,
  PRIMARY KEY (`PropietarioID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propietarios`
--

LOCK TABLES `propietarios` WRITE;
/*!40000 ALTER TABLE `propietarios` DISABLE KEYS */;
INSERT INTO `propietarios` VALUES (1,'Carlos','González','carlos.g@gmail.com','Calle de la Paz 10','Individual'),(2,'María','López','maria.lopez@yahoo.com','Avenida del Sol 5','Corporativo'),(3,'Luis','Martínez','luis.m@outlook.com','Paseo de la Reforma 15','Gubernamental'),(4,'Carmen','Hernández','carmen.h@hotmail.com','Calle Nueva 20','Individual'),(5,'Antonio','Jiménez','antonio.j@empresa.com','Gran Vía 30','Corporativo'),(6,'Laura','Díaz','laura.d@correo.com','Calle Mayor 40','Gubernamental'),(7,'José','Álvarez','jose.a@gmail.com','Calle del Prado 50','Individual'),(8,'Ana','Ruiz','ana.ruiz@yahoo.com','Avenida de la Constitución 60','Corporativo'),(9,'David','Fernández','david.f@outlook.com','Paseo de Gracia 70','Gubernamental'),(10,'Sara','Ramírez','sara.r@hotmail.com','Calle de la Estación 80','Individual');
/*!40000 ALTER TABLE `propietarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-27 18:36:38
