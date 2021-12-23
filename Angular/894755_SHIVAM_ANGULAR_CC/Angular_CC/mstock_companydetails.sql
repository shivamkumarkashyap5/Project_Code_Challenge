-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mstock
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `companydetails`
--

DROP TABLE IF EXISTS `companydetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companydetails` (
  `companycode` int NOT NULL,
  `companyname` varchar(255) DEFAULT NULL,
  `briefdesc` text,
  `stockprice` double DEFAULT NULL,
  PRIMARY KEY (`companycode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companydetails`
--

LOCK TABLES `companydetails` WRITE;
/*!40000 ALTER TABLE `companydetails` DISABLE KEYS */;
INSERT INTO `companydetails` VALUES (1,'Wipro','Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It is headquartered in Bangalore, Karnataka, India. In 2013, Wipro separated its non-IT businesses and formed the privately owned Wipro Enterprises.',2000),(2,'Hewlett Packard','Hewlett-Packard Co. provides products, technologies, software, solutions and services to individual consumers, small and medium-sized businesses and large enterprises, including customers in the government, health and education sectors. It operates through seven business segments: Personal Systems, Printing, Enterprise Group, Enterprise Services, Software, HP Financial Services and Corporate Investments.',2500),(3,'Cognizant','Cognizant is an American multinational technology company that provides business consulting, information technology and outsourcing services. It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades under CTSH.',3500);
/*!40000 ALTER TABLE `companydetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-12  4:14:40
