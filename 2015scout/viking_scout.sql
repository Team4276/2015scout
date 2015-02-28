-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2015 at 06:53 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `viking_scout`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `teamNumber` text NOT NULL,
  `matchNumber` text NOT NULL,
  `alliance` text NOT NULL,
  `autoTotes` text NOT NULL,
  `score` text NOT NULL,
  `autoTrash` text NOT NULL,
  `highestToteStack` text NOT NULL,
  `highestToteSpeed` text NOT NULL,
  `coop` text NOT NULL,
  `moveForward` text NOT NULL,
  `totePickupGround` text NOT NULL,
  `totePickupUpside` text NOT NULL,
  `totePickupChute` text NOT NULL,
  `totePickupLandfill` text NOT NULL,
  `RCPickupUp` text NOT NULL,
  `RCPickupSide` text NOT NULL,
  `RCPickupCentre` text NOT NULL,
  `otherStack` text NOT NULL,
  `highestToteRC` text NOT NULL,
  `highestTotePN` text NOT NULL,
  `humanNoodle` text NOT NULL,
  `humanThrow` text NOT NULL,
  `coopOtherStack` text NOT NULL,
  `goodStacks` text NOT NULL,
  `badStacks` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`teamNumber`, `matchNumber`, `alliance`, `autoTotes`, `score`, `autoTrash`, `highestToteStack`, `highestToteSpeed`, `coop`, `moveForward`, `totePickupGround`, `totePickupUpside`, `totePickupChute`, `totePickupLandfill`, `RCPickupUp`, `RCPickupSide`, `RCPickupCentre`, `otherStack`, `highestToteRC`, `highestTotePN`, `humanNoodle`, `humanThrow`, `coopOtherStack`, `goodStacks`, `badStacks`) VALUES
('2', '2', 'Red', '2', '2', '2', '2', 'M', '2', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', '2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `Match` int(11) NOT NULL,
  `Red 1` int(11) NOT NULL,
  `Red 2` int(11) NOT NULL,
  `Red 3` int(11) NOT NULL,
  `Blue 1` int(11) NOT NULL,
  `Blue 2` int(11) NOT NULL,
  `Blue 3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`Match`, `Red 1`, `Red 2`, `Red 3`, `Blue 1`, `Blue 2`, `Blue 3`) VALUES
(1, 4276, 3309, 1717, 3476, 3473, 254);

-- --------------------------------------------------------

--
-- Table structure for table `team_list`
--

CREATE TABLE IF NOT EXISTS `team_list` (
  `Team Number` int(11) NOT NULL,
  `Team Name` text NOT NULL,
  `City` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team_list`
--

INSERT INTO `team_list` (`Team Number`, `Team Name`, `City`) VALUES
(3309, 'Friarbots', 'Anaheim'),
(4276, 'Viking Robotics', 'Huntington Beach');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
