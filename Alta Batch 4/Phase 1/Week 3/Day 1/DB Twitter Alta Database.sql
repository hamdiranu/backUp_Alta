SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `twitter`
--
CREATE DATABASE IF NOT EXISTS `twitter` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `twitter`;

DELIMITER $$
--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `sf_count_tweet_peruser` (`user_id_p` INT) RETURNS INT(11) BEGIN
DECLARE total INT;
SELECT COUNT(*) INTO total FROM tweets WHERE user_id = user_id_p AND type='tweets';
RETURN total;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `tweet_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `message` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `favourite_count` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `user_id`, `type`, `message`, `parent_id`, `favourite_count`, `created_at`, `updated_at`) VALUES
(1, 1, 'tweets', 'Maju terus pantang jalan', 0, 0, '2019-02-04 00:39:22', '2019-02-04 00:39:22'),
(2, 1, 'tweets', 'Jalan itu bukan khayalan semata wayang', 0, 0, '2019-02-04 00:40:00', '2019-02-04 00:40:00'),
(4, 3, 'tweets', 'Hi semua!!', 0, 0, '2019-02-04 00:41:35', '2019-02-04 00:41:35');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `status` smallint(1) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `location` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `status`, `gender`, `email`, `password`, `location`, `created_at`, `updated_at`) VALUES
(1, 'hadildo', 'Nurhadi Aldo Tronjal Tronjol', 1, 'm', 'hadildo@tronjaltronjol.com', '123456', 'Jawa Timur', '2019-02-04 00:15:04', '2019-02-04 00:21:51'),
(3, 'Fitria', 'Semhore', 1, 'f', 'fitria@gmail.com', '123456', 'Jawa Barat', '2019-02-04 00:18:24', '2019-02-04 00:18:24');

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `delete_tweet_user` BEFORE DELETE ON `users` FOR EACH ROW BEGIN
-- declare variables
DECLARE v_user_id INT;
SET v_user_id=OLD.id;
-- trigger code
DELETE FROM tweets WHERE user_id=v_user_id;
DELETE FROM user_followers WHERE user_id=v_user_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users_avatars`
--

CREATE TABLE `users_avatars` (
  `user_id` int(11) NOT NULL,
  `url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_followers`
--

CREATE TABLE `user_followers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `following_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_followers`
--

INSERT INTO `user_followers` (`id`, `user_id`, `following_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2019-02-04 05:52:19', '2019-02-04 05:52:36'),
(2, 1, 3, '2019-02-04 05:52:45', '2019-02-04 05:52:45'),
(4, 3, 1, '2019-02-04 05:52:57', '2019-02-04 05:52:57'),
(5, 3, 2, '2019-02-04 05:53:03', '2019-02-04 05:53:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`tweet_id`,`user_id`),
  ADD KEY `favourites_user_id` (`user_id`);

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tweets_user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_idx` (`username`),
  ADD KEY `fullname` (`fullname`);

--
-- Indexes for table `users_avatars`
--
ALTER TABLE `users_avatars`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_followers`
--
ALTER TABLE `user_followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_followers_user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_followers`
--
ALTER TABLE `user_followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_tweet_id` FOREIGN KEY (`tweet_id`) REFERENCES `tweets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `favourites_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tweets`
--
ALTER TABLE `tweets`
  ADD CONSTRAINT `tweets_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users_avatars`
--
ALTER TABLE `users_avatars`
  ADD CONSTRAINT `user_avatars_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_followers`
--
ALTER TABLE `user_followers`
  ADD CONSTRAINT `user_followers_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------------------------------------------------

-- Inner Join
SELECT 
    t.message
FROM
    users u
        INNER JOIN
    tweets t ON u.id = t.user_id;

-- Left Join    
SELECT 
    u.username, t.message
FROM
    users u
        LEFT JOIN
    tweets t ON u.id = t.user_id order by username ASC ; 
    
-- Right Join

SELECT 
    u.username, t.message
FROM
    users u
        Right JOIN
    tweets t ON u.id = t.user_id order by username ASC ; 
    
-- UNION

SELECT 
    username, fullname
FROM
    users
WHERE
    id = 1 
UNION SELECT 
    username, fullname
FROM
    users
WHERE
    id = 3;
    
    
-- Fungsi agregasi;
SELECT 
    MIN(created_at) AS created_at
FROM
    tweets
GROUP BY message;

SELECT 
    SUM(favourite_count)
FROM
    tweets
WHERE
    user_id = 1;

SELECT 
    user_id
FROM
    tweets
GROUP BY user_id
HAVING SUM(favourite_count) > 2;

SELECT 
    COUNT(1)
FROM
    tweets
WHERE
    user_id = 1;

SELECT 
    *
FROM
    users
WHERE
    id IN (SELECT 
            user_id
        FROM
            tweets
        GROUP BY user_id);
        
use twitter;

DELIMITER $$
CREATE FUNCTION sf_count_tweet_peruser (user_id_p int) RETURNS INT DETERMINISTIC
BEGIN
DECLARE total INT;
SELECT COUNT(*) INTO total FROM tweets
WHERE user_id = user_id_p AND
type='tweets';
RETURN total;
END $$
DELIMITER ; 

drop function sf_count_tweet_peruser;

select sf_count_tweet_peruser(1);

DELIMITER $$
CREATE TRIGGER delete_all_data_user
before DELETE ON users FOR EACH ROW
BEGIN
-- declare variables
DECLARE v_user_id INT;
SET v_user_id=OLD.id; 
-- trigger code
DELETE FROM tweets WHERE user_id=user_id;
DELETE FROM user_followers WHERE
user_id=v_user_id;
END $$
DELIMITER ;