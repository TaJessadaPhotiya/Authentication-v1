-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2025 at 03:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'ta@gmail.com', '$2b$10$7vU3s8.nJrWfUwxUpi/vbuoBF0qnGaB24J0vckw//1Lbt/.WGI0UO', '2024-11-14 02:44:46', '2024-11-14 02:44:46'),
(15, 'ta5@gmail.com', '$2b$10$QzQsv..0rJAvPvAq1Ft/P.a3VW0FWkuCwUb1OfA3tmmEmnH75gFs6', '2024-11-14 08:20:09', '2024-11-14 08:20:09'),
(16, 'ta1@gmail.com', '$2b$10$.df0gA0e3.y/YB6r8NiUYOxCiZPzderSib5Dh0JQYQ8WYzeqmFxAG', '2024-11-14 08:53:39', '2024-11-14 08:53:39'),
(17, 'ta2@gmail.com', '$2b$10$YPUay/8ZWRwC8uPrbJf5IerfnMpSdeCElbm/uzqNYnQw57M2WO7HO', '2024-11-14 08:57:23', '2024-11-14 08:57:23'),
(18, 'ta6@gmail.com', '$2b$10$b.K.hxRPxyujQ0VLHVfFNeTWJ3mWSjGOzwawn2pn.C2hLKyQAzzdO', '2024-11-15 02:21:30', '2024-11-15 02:21:30'),
(21, 'ta11@gmail.com', '$2b$10$kmWcawUMaafacZBuXiSHHuFGioZwvdxDYqlXpv5aFQ7lII9tSTnbK', '2024-11-16 02:43:11', '2024-11-16 02:43:11'),
(22, 'ta111@gmail.com', '$2b$10$nk4ymmxnV1biwACAQRHGS.BD3OEszG87X7LcPHFwZhmBUWFeRrAJ.', '2025-01-04 09:28:35', '2025-01-04 09:28:35'),
(23, 'tagi@gmail.com', '$2b$10$mJCS1ohVOSp56LaGfTPgFemv5HoVbUMAWv1ZvxLat7B7KQ6u.rJfO', '2025-03-28 02:52:13', '2025-03-28 02:52:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
