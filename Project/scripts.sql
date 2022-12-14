-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 13, 2022 alle 22:59
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `therossicinema`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `film`
--

CREATE TABLE `film` (
  `ID` int(11) NOT NULL,
  `Titolo` varchar(200) NOT NULL,
  `Copertina` varchar(150) NOT NULL,
  `Genere` varchar(100) NOT NULL,
  `Regia` varchar(50) NOT NULL,
  `Cast` varchar(300) NOT NULL,
  `Durata` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `film`
--

INSERT INTO `film` (`ID`, `Titolo`, `Copertina`, `Genere`, `Regia`, `Cast`, `Durata`) VALUES
(1, 'UNA NOTTE VIOLENTA E SILENZIOSA', 'https://cdn1.thespacecinema.it/-/media/tsc/2022/12/una-notte-violenta-e-silenziosa/locandina.jpg?w=200', 'Poliziesco', 'Tommy Wirkola', 'David Harbour,Beverly D\'Angelo,John Leguizamo, Cam Gigandet,Alex Hassell', '111 min'),
(2, 'BLACK PANTHER - WAKANDA FOREVER', 'https://cdn1.thespacecinema.it/-/media/tsc/2022/11/black-panter-wakanda-forever/locandinatop.jpg?w=200', 'Fantasy', 'Ryan Coogler', 'Angela Bassett\r\n,Martin Freeman, Danai Gurira, Lupita Nyong,o Winston Duke', '161 min'),
(3, 'BONES AND ALL', 'https://cdn1.thespacecinema.it/-/media/tsc/2022/11/bones-and-all/locandinadef.jpg?w=200', 'Dramma', 'Luca Guadagnino', 'Taylor Russell,Timothée Chalamet, Mark Rylance, Michael Stuhlbarg , André Holland , Chloë Sevigny , David Gordon-Green , Jessica Harper , Jake Horowitz', '130 min'),
(4, 'IL GATTO CON GLI STIVALI 2 - L\'ULTIMO DESIDERIO', 'https://cdn1.thespacecinema.it/-/media/tsc/2022/12/il-gatto-con-gli-stivali-2-l-ultimo-desiderio/locandina_il-gatto-con-gli-stivali.jpg?w=200', 'Animazione', 'Joel Crawford , Januel Mercado', 'Chris Miller (II) , Florence Pugh , Salma Hayek , Olivia Colman , Antonio Banderas', '111 min');

-- --------------------------------------------------------

--
-- Struttura della tabella `posti`
--

CREATE TABLE `posti` (
  `ID` int(11) NOT NULL,
  `Posto` varchar(8) NOT NULL,
  `ID_Sessione` int(11) NOT NULL,
  `ID_User` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `posti`
--

INSERT INTO `posti` (`ID`, `Posto`, `ID_Sessione`, `ID_User`) VALUES
(1, 'A-4', 1, 1),
(2, 'B-2', 1, 2),
(3, 'A-2', 1, 2),
(4, 'E-7', 1, 2),
(5, 'D-10', 2, 1),
(6, 'A-5', 1, 1),
(19, 'B-10', 1, 2),
(20, 'B-10', 1, 2),
(21, 'B-10', 1, 2),
(22, 'B-10', 1, 2),
(23, 'B-10', 1, 2),
(24, 'B-10', 1, 2),
(25, 'B-10', 1, 2),
(26, 'B-10', 7, 2),
(27, 'E-12', 6, 2),
(28, 'C-10', 6, 2),
(29, 'C-8', 1, 2),
(30, 'C-9', 1, 2),
(31, 'E-1', 7, 1),
(32, 'E-2', 7, 1),
(33, 'C-5', 6, 2),
(34, 'D-4', 6, 2),
(35, 'A-2', 6, 2),
(36, 'A-3', 6, 2),
(37, 'E-1', 1, 2),
(38, 'E-2', 1, 2),
(39, 'E-3', 1, 2),
(40, 'A-9', 6, 2),
(41, 'A-10', 6, 2),
(42, 'A-11', 6, 2),
(43, 'B-3', 7, 1),
(44, 'D-2', 7, 1),
(45, 'E-7', 3, 1),
(46, 'E-16', 3, 1),
(47, 'C-14', 6, 1),
(48, 'B-5', 1, 1),
(49, 'C-9', 2, 1),
(50, 'C-9', 2, 1),
(51, 'E-12', 1, 1),
(52, 'B-8', 3, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `scelta`
--

CREATE TABLE `scelta` (
  `ID_USER` int(11) NOT NULL,
  `ID_SESSIONE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `scelta`
--

INSERT INTO `scelta` (`ID_USER`, `ID_SESSIONE`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `sessione`
--

CREATE TABLE `sessione` (
  `ID` int(11) NOT NULL,
  `ID_Film` int(11) NOT NULL,
  `Sala` varchar(2) NOT NULL,
  `Giorno` varchar(20) NOT NULL,
  `Ora` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `sessione`
--

INSERT INTO `sessione` (`ID`, `ID_Film`, `Sala`, `Giorno`, `Ora`) VALUES
(1, 1, '2', '22/12/2022', '15:00'),
(2, 1, '2', '23/12/2022', '14:20'),
(3, 1, '1', '29/12/2022', '18:30'),
(4, 1, '2', '03/01/2023', '16:40'),
(5, 2, '3', '18-12-2022', '16:40'),
(6, 3, '3', '16-12-2022', '20:15'),
(7, 4, '2', '28-12-2022', '17:00');

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Cognome` varchar(50) NOT NULL,
  `Mail` varchar(100) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`ID`, `Nome`, `Cognome`, `Mail`, `Password`) VALUES
(1, 'Giorgio', 'Fanin', 'Giorgio@gmail.com', 'sonoGiorgio'),
(2, 'Matteo', 'Antoniolli', 'Matteo@gmail.com', 'sonoMatteo');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `ID` int(11) NOT NULL,
  `NomeUtente` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`ID`, `NomeUtente`, `Email`, `Password`) VALUES
(1, 'Giorgio', 'Giorgio@gmail.com', 'sonoGiorgio'),
(2, 'Fanchin', 'Fanchin@gmail.com', 'sonoFanchin');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `posti`
--
ALTER TABLE `posti`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Sessione` (`ID_Sessione`),
  ADD KEY `ID_USER` (`ID_User`);

--
-- Indici per le tabelle `scelta`
--
ALTER TABLE `scelta`
  ADD KEY `ID_USER` (`ID_USER`),
  ADD KEY `ID_SESSIONE` (`ID_SESSIONE`);

--
-- Indici per le tabelle `sessione`
--
ALTER TABLE `sessione`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Film` (`ID_Film`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `film`
--
ALTER TABLE `film`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `posti`
--
ALTER TABLE `posti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT per la tabella `sessione`
--
ALTER TABLE `sessione`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT per la tabella `utente`
--
ALTER TABLE `utente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `posti`
--
ALTER TABLE `posti`
  ADD CONSTRAINT `posti_ibfk_1` FOREIGN KEY (`ID_Sessione`) REFERENCES `sessione` (`ID`),
  ADD CONSTRAINT `posti_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `utente` (`ID`);

--
-- Limiti per la tabella `scelta`
--
ALTER TABLE `scelta`
  ADD CONSTRAINT `scelta_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `utente` (`ID`),
  ADD CONSTRAINT `scelta_ibfk_2` FOREIGN KEY (`ID_SESSIONE`) REFERENCES `sessione` (`ID`);

--
-- Limiti per la tabella `sessione`
--
ALTER TABLE `sessione`
  ADD CONSTRAINT `sessione_ibfk_1` FOREIGN KEY (`ID_Film`) REFERENCES `film` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
