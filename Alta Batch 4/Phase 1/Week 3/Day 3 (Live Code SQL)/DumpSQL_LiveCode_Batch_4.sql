SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ata_live_code`
--
CREATE DATABASE IF NOT EXISTS `db_live_code_4` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_live_code_4`;

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1, 'Kartu Kredit', '2018-10-01 16:10:13', '2018-10-01 16:10:13'),
(2, 'Transfer Bank', '2018-10-01 16:10:13', '2018-10-01 16:10:13'),
(3, 'Cash On Delivery', '2018-10-01 16:10:13', '2018-10-01 16:10:13');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nama_product` varchar(255) NOT NULL,
  `product_type_id` int(11) DEFAULT NULL,
  `supplier` int(11) NOT NULL,
  `price` decimal(25,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nama_product`, `product_type_id`, `supplier`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Rak Piring', 1, 3, '50000.00', '2018-10-01 16:02:33', '2018-10-01 16:02:33'),
(2, 'Sendok Makan', 1, 3, '20000.00', '2018-10-01 16:02:33', '2018-10-01 16:02:33'),
(3, 'Closet', 2, 1, '1000000.00', '2018-10-01 16:04:32', '2018-10-01 16:04:32'),
(4, 'Shower', 2, 1, '150000.00', '2018-10-01 16:04:32', '2018-10-01 16:04:32'),
(5, 'Lemari Gantung', 2, 1, '250000.00', '2018-10-01 16:04:32', '2018-10-01 16:04:32'),
(6, 'Televisi', 3, 4, '1500000.00', '2018-10-01 16:05:52', '2018-10-01 16:05:52'),
(7, 'Mesin Cuci', 3, 4, '2500000.00', '2018-10-01 16:05:52', '2018-10-01 16:05:52'),
(8, 'Dispenser', 3, 4, '1000000.00', '2018-10-01 16:05:52', '2018-10-01 16:05:52'),
(11, 'Baju Tidur', 12, 3, '100000.00', '2018-10-02 15:58:27', '2018-10-02 15:58:27'),
(12, 'Celana Jeans', 12, 3, '250000.00', '2018-10-02 15:58:27', '2018-10-02 15:58:27');

-- --------------------------------------------------------

--
-- Table structure for table `product_descriptions`
--

CREATE TABLE `product_descriptions` (
  `id` int(11) NOT NULL,
  `nama_product` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1, 'Perlengkapan Dapur', '2018-10-01 15:56:21', '2018-10-01 15:56:21'),
(2, 'Perlengkapan Kamar Mandi', '2018-10-01 15:56:21', '2018-10-01 15:56:21'),
(3, 'Peralatan Elektronik', '2018-10-01 15:56:21', '2018-10-01 15:56:21');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(11) NOT NULL,
  `nama_supplier` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `nama_supplier`, `created_at`, `updated_at`) VALUES
(1, 'PT Rea Reo Jaya', '2018-10-01 15:49:33', '2018-10-01 15:49:33'),
(2, 'PT Gemilang Indah', '2018-10-01 15:50:41', '2018-10-01 15:50:41'),
(4, 'PT Sukma Merekah', '2018-10-01 15:50:41', '2018-10-01 15:50:41'),
(5, 'PT Abadi Jaya Indah', '2018-10-01 15:51:16', '2018-10-01 15:51:16'),
(6, 'PT Sahabat jaya', '2018-10-02 02:29:43', '2018-10-02 02:29:43');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(2) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  `status` smallint(6) NOT NULL,
  `total_qty` int(11) NOT NULL,
  `total_price` decimal(25,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `payment_method_id`, `status`, `total_qty`, `total_price`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 6, '1920000.00', '2018-10-01 17:23:13', '2018-10-02 17:20:55'),
(2, 1, 2, 1, 3, '3520000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(3, 1, 3, 1, 3, '1570000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(4, 2, 1, 1, 3, '2250000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(5, 2, 1, 1, 2, '40000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(6, 2, 3, 1, 1, '50000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(7, 3, 2, 1, 1, '150000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(8, 3, 2, 1, 5, '1250000.00', '2018-10-01 17:26:56', '2018-10-01 17:26:56'),
(9, 4, 3, 1, 1, '250000.00', '2018-10-01 17:28:16', '2018-10-01 17:28:16'),
(10, 4, 2, 1, 4, '200000.00', '2018-10-01 17:28:16', '2018-10-01 17:28:16');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_detail`
--

CREATE TABLE `transaction_detail` (
  `transaction_id` int(2) NOT NULL,
  `product_id` int(11) NOT NULL,
  `status` smallint(6) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(25,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`transaction_id`, `product_id`, `status`, `qty`, `price`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, '20000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(1, 3, 1, 1, '1000000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(1, 4, 1, 1, '150000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(1, 5, 1, 3, '750000.00', '2018-10-02 17:20:55', '2018-10-02 17:20:55'),
(2, 2, 1, 1, '20000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(2, 7, 1, 1, '2500000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(2, 8, 1, 1, '1000000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(3, 1, 1, 1, '50000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(3, 2, 1, 1, '20000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(3, 6, 1, 1, '1500000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(4, 3, 1, 1, '1000000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(4, 5, 1, 1, '250000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(4, 8, 1, 1, '1000000.00', '2018-10-01 17:46:08', '2018-10-01 17:46:08'),
(5, 2, 1, 2, '40000.00', '2018-10-02 16:03:05', '2018-10-02 16:03:05'),
(6, 1, 1, 1, '50000.00', '2018-10-02 16:04:45', '2018-10-02 16:04:45'),
(7, 4, 1, 1, '150000.00', '2018-10-02 16:04:45', '2018-10-02 16:04:45'),
(8, 12, 1, 5, '1250000.00', '2018-10-02 16:04:45', '2018-10-02 16:04:45'),
(9, 12, 1, 1, '250000.00', '2018-10-02 16:04:46', '2018-10-02 16:04:46'),
(10, 1, 1, 4, '200000.00', '2018-10-02 16:04:46', '2018-10-02 16:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `status` smallint(6) NOT NULL,
  `gender` char(3) NOT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `status`, `gender`, `tanggal_lahir`, `created_at`, `updated_at`) VALUES
(1, 'Andhika', 1, 'M', '1982-01-01', '2019-12-01 16:33:46', '2019-12-01 16:33:46'),
(2, 'Boni W', 1, 'M', '1982-02-11', '2019-06-12 16:33:46', '2019-06-12 16:33:46'),
(3, 'Cahyo Budi', 1, 'M', '1982-02-11', '2019-12-01 16:33:46', '2019-12-01 16:33:46'),
(4, 'Detty R', 1, 'F', '1986-12-31', '2019-05-14 16:33:46', '2019-05-14 16:33:46'),
(5, 'Fanny', 1, 'F', '1981-04-21', '2019-12-01 16:33:46', '2019-12-01 16:33:46'),
(6, 'Eddy Prio', 1, 'M', '1986-02-11', '2019-11-29 16:33:46', '2019-11-29 16:33:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_idx` (`user_id`),
  ADD KEY `payment_method_id_idx` (`payment_method_id`);

--
-- Indexes for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD PRIMARY KEY (`transaction_id`,`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `payment_method_id` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
