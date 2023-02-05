-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 05 2023 г., 13:57
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `salontest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Мастер-бровист'),
(2, 'Мастер ногтевого сервиса'),
(3, 'Визажист'),
(5, 'Мастер по уходу за волосами'),
(6, 'Барбер'),
(7, 'Мастер по прическам'),
(8, 'Афронаращивание');

-- --------------------------------------------------------

--
-- Структура таблицы `masters`
--

CREATE TABLE `masters` (
  `id` int(11) NOT NULL,
  `img` varchar(5000) DEFAULT NULL,
  `name` varchar(500) NOT NULL,
  `text` varchar(500) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `masters`
--

INSERT INTO `masters` (`id`, `img`, `name`, `text`, `category_id`) VALUES
(1, 'https://assets.yclients.com/masters/origin/a/ad/ad31b9152417279_20210827201505.png', 'Марина', 'Мастер по уходу за волосами', 5),
(2, 'https://assets.yclients.com/masters/origin/9/94/9447e742ce76375_20210827200629.png', 'Валерия', 'Мастер по уходу за волосами', 5),
(3, 'https://assets.yclients.com/masters/origin/d/df/df342212f84d12c_20220727145133.png', 'Елена', 'Мастер бровист', 1),
(4, 'https://assets.yclients.com/masters/origin/2/2b/2b9ee9edba92771_20220907120125.png', 'Виктория Леви', 'Мастер бровист, визажист', 1),
(5, 'https://assets.yclients.com/masters/origin/d/df/dfd5e50acf8d625_20210827203115.png', 'Вероника', 'Мастер по восстановлению волос', 3),
(6, 'https://assets.yclients.com/masters/origin/2/2d/2d57ddee830c756_20220921163309.png', 'Настя Наровская', 'Мастер бровист', 1),
(7, 'https://assets.yclients.com/masters/origin/5/5c/5c2cc6801fb9fb1_20220124152706.png', 'Александра', 'Мастер по ногтевого сервиса', 2),
(8, 'https://assets.yclients.com/masters/origin/2/25/25c249a09ebdd7b_20210827201859.png', 'Давид', 'Барбер', 6),
(9, 'https://assets.yclients.com/masters/origin/4/4a/4af31db0e9580cd_20211214205359.png', 'Вика Василькова', 'мастер по прическам', 7);

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `header` varchar(500) NOT NULL,
  `text` varchar(5000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `img`, `header`, `text`, `created_at`, `updated_at`) VALUES
(5, 'https://ostrov-shop.by/upload/resize_cache/webp/iblock/6a5/zwmext9enagqffpme45e4c0hsvy6a5ba.webp', 'Интенсивная восстанавливающая маска', 'Интенсивная восстанавливающая маска снована на натуральных компонентах, которые способны вернуть локонам блеск, красоту, силу, шелковистость и сияние.\r\n⠀\r\nМаска подходит даже для окрашенных волос, поскольку регенерирует поврежденную структуру и запечатывает чешуйки, тем самым продлевая стойкость цвета. Средство с морскими водорослями, маслами макадамии, хлопка, авокадо, арганы и жожоба сохраняет пряди объемными и послушными.\r\n⠀\r\n▪️Новый скраб от HADAT, который глубоко очищающий кожу головы.\r\n⠀\r\nСкраб укрепляет волосяные луковицы и стимулирует рост волос. Препятствует появлению перхоти.\r\nСолевой пилинг — это оживляющее средство для отшелушивания, которое полирует поверхность кожи.\r\n⠀\r\nПриобрести можно у нас в @bar_studio.mogilev ❤️', '2022-12-23 13:49:59', '2022-12-23 21:00:00'),
(20, 'https://i.ibb.co/nfgqtkj/321947344-459673773033785-1673117653454448821-n.jpg', 'КОНКУРС ?', 'BAR STUDIO & BRAND MIX\r\n2 подарка = 2 победителя\r\n\r\nот @bar_studio.mogilev очищающий шампунь HADAT ?\r\nот @brandmix.by свитер от TOM TAILOR ?\r\n\r\nУсловия конкурса:\r\n•быть подписанным на @bar_studio.mogilev и на @brandmix.by\r\n•поставить ❤️ на эту публикацию\r\n•сделать репост данной публикации с фразой «ХОЧУ ПОДАРОК ОТ и отметить наши аккаунты»\r\n*ваш профиль должен быть открыт, чтобы мы увидели вашу отметку\r\n•в комментариях отметить подругу ( чем больше, тем выше шанс на победу)\r\n\r\nПобедитель будет определен РАНДОМНО ИЗ КОММЕНТАРИЕВ ?\r\nИтоги конкурса 30 декабря.\r\n\r\nВСЕМ УДАЧИ ❤️', '2022-12-23 21:00:00', '2022-12-24 11:43:04'),
(21, 'https://i.ibb.co/SBPSvF7/306361078-473023274503196-8209304421858066903-n.jpg', 'I ❤️ MY HAIR', 'Пластиковый корпус с soft touch покрытием + нейлоновая щетина, обогащенная аргановым маслом и кератином.\r\nКаждый пучок щетины содержит пару специальным образом подобранных ультрагибких нейлоновых щетинок разной длины, ДЛИННЫЕ - помогают распутать волосы, КОРОТКИЕ - создают дополнительный массажный эффект, что стимулирует кровообращение и способствует росту новых волос.\r\nНа кончиках всех щетинок имеются защитные шарики, которые обеспечивают комфортное расчесывание и массаж, не травмирующие волосы и кожу головы.\r\nЩетка также идеально подходит для использования во время мытья головы.\r\nПриобрести можно у нас в @bar_studio.mogilev ❤️', '2022-12-23 21:00:00', '2022-12-24 11:43:04');

-- --------------------------------------------------------

--
-- Структура таблицы `regservices`
--

CREATE TABLE `regservices` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `services_id` int(11) NOT NULL,
  `masters_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `regservices`
--

INSERT INTO `regservices` (`id`, `user_id`, `category_id`, `services_id`, `masters_id`, `date`, `time`) VALUES
(3, 1, 5, 2, 7, '2022-12-31', '12:00:00'),
(4, 4, 8, 67, 6, '2022-12-27', '17:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `category_id` int(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `text` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`id`, `category_id`, `title`, `text`, `price`) VALUES
(1, 1, 'Мастер-бровист', 'Коррекция и окрашивание бровей Хна\\Краска', 50),
(2, 1, 'Мастер-бровист', 'Коррекция (моделирование) бровей', 15),
(3, 1, 'Мастер-бровист', 'Ламинирование (Долговременная укладка+ коррекция+о', 15),
(4, 1, 'Мастер-бровист', 'Ламинирование (долговременная укладка)+коррекция', 40),
(5, 1, 'Мастер-бровист', 'Ламинирование + коррекция+окрашивание+счастье для ', 50),
(6, 1, 'Мастер-бровист', 'Окрашивание ресниц', 12),
(7, 1, 'Мастер-бровист', 'Счастье для бровей', 15),
(8, 1, 'Мастер-бровист', 'Удаление усиков', 5),
(9, 1, 'Мастер-бровист', 'Ламинирование ресниц с окрашиванием', 45),
(10, 1, 'Мастер-бровист', 'Ламинирование ресниц + коррекция и окрашивание бро', 65),
(11, 1, 'Мастер-бровист', 'Ламинирование ресниц +Ламинирование бровей и корре', 70),
(12, 1, 'Мастер-бровист', 'Ламинирование ресниц +Ламинирование бровей с окраш', 75),
(13, 1, 'Мастер-бровист', 'Коррекция+окрашивание +ботокс(для продления окраши', 35),
(14, 1, 'Мастер-бровист', 'Нос', 5),
(15, 2, 'Мастер ногтевого сервиса', 'Маникюр комбинированный без покрытия(женский)', 30),
(16, 2, 'Мастер ногтевого сервиса', 'ремонт ногтя', 1),
(17, 2, 'Мастер ногтевого сервиса', 'ремонт ногтя', 1),
(18, 2, 'Мастер ногтевого сервиса', 'Мужской маникюр с покрытием', 40),
(19, 2, 'Мастер ногтевого сервиса', 'Снятие старого покрытия+маникюр', 30),
(20, 2, 'Мастер ногтевого сервиса', 'Комплекс : Снятие,маникюр,восстановление архитекту', 55),
(21, 2, 'Мастер ногтевого сервиса', 'Маникюр комбинированный без покрытия(мужской)', 30),
(22, 2, 'Мастер ногтевого сервиса', 'Маникюр +однотонное покрытие (укрепление гелем )', 50),
(23, 2, 'Мастер ногтевого сервиса', 'Маникюр +однотонное покрытие (укрепление базой )', 45),
(24, 2, 'Мастер ногтевого сервиса', 'Мужской маникюр с покрытием', 45),
(25, 2, 'Мастер ногтевого сервиса', 'Френч', 5),
(26, 2, 'Мастер ногтевого сервиса', 'Педикюр(полная обработка стоп пальчиков + гель лак', 55),
(27, 2, 'Мастер ногтевого сервиса', 'Педикюр(обработка пальчиков + гель лак)', 45),
(28, 2, 'Мастер ногтевого сервиса', 'Педикюр без покрытия с аппаратной обработкой стоп(', 40),
(29, 2, 'Мастер ногтевого сервиса', 'Педикюр без покрытия с аппаратной обработкой стоп(', 45),
(30, 3, 'Визажист', 'Дневной макияж', 50),
(31, 3, 'Визажист', 'Вечерний макияж', 80),
(32, 3, 'Визажист', 'Пробный макияж', 80),
(33, 3, 'Визажист', 'Макияж (с выездом)', 110),
(34, 5, 'Мастер по уходу за волосами', 'Детокс кожи головы', 40),
(35, 5, 'Мастер по уходу за волосами', 'Полировка волос', 25),
(36, 5, 'Мастер по уходу за волосами', 'Холодное восстановление/Окудрение', 120),
(37, 5, 'Мастер по уходу за волосами', 'Подравнивание кончиков', 15),
(38, 5, 'Мастер по уходу за волосами', 'Аминокислотная подложка/Липидная подложка', 40),
(39, 5, 'Мастер по уходу за волосами', 'Ботокс', 200),
(40, 5, 'Мастер по уходу за волосами', 'Кератиновое выпрямление', 180),
(41, 5, 'Мастер по уходу за волосами', 'Кератиновое выпрямление челки', 45),
(42, 5, 'Мастер по уходу за волосами', 'Абсолютное счастье для волос', 170),
(43, 5, 'Мастер по уходу за волосами', 'Мытье и укладка', 25),
(44, 5, 'Мастер по уходу за волосами', 'Детокс кожи головы', 45),
(45, 5, 'Мастер по уходу за волосами', 'Нанопластика', 240),
(46, 6, 'Барбер', 'Комплекс: стрижка и борода', 50),
(47, 6, 'Барбер', 'Моделирование бороды', 20),
(48, 6, 'Барбер', 'Комплекс: стрижка и борода', 50),
(49, 6, 'Барбер', 'Мужская стрижка', 35),
(50, 6, 'Барбер', 'Детская стрижка', 30),
(51, 6, 'Барбер', 'Женская стрижка', 45),
(52, 6, 'Барбер', 'Стрижка машинкой', 25),
(53, 6, 'Барбер', 'Стрижка челки', 10),
(54, 6, 'Барбер', 'Тонировка бороды', 20),
(55, 6, 'Барбер', 'стрижка маленькой принцессы', 35),
(56, 7, 'Мастер по прическам', 'Вечерняя прическа', 70),
(57, 7, 'Мастер по прическам', 'Курс по прическам', 90),
(58, 7, 'Мастер по прическам', 'Афро прическа', 80),
(59, 7, 'Мастер по прическам', 'Свадебная прическа', 85),
(60, 7, 'Мастер по прическам', 'свадебная прическа с выездом', 110),
(61, 7, 'Мастер по прическам', 'свадебная пробная прическа', 50),
(62, 8, 'Афронаращивание', 'Афронаращивание в технике скрытого окрашивания', 80),
(63, 8, 'Афронаращивание', 'плетение брейд', 50),
(64, 8, 'Афронаращивание', 'Прическа (Брейды в хвост )', 130),
(65, 8, 'Афронаращивание', 'Снятие цветных прядей', 15),
(66, 8, 'Афронаращивание', 'Плетение кос без канекалона', 35),
(67, 8, 'Афронаращивание', 'Мытье - Сушка', 20);

-- --------------------------------------------------------

--
-- Структура таблицы `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `length` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `masters_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `training`
--

INSERT INTO `training` (`id`, `title`, `length`, `price`, `masters_id`) VALUES
(1, 'БАЗОВЫЙ КУРС \"КЕРАТИН, БОТОКС И НАНОПЛАСТИКА\"', 2, 500, 5),
(2, 'КУРС \"ХОЛОДНОЕ ВОССТАНОВЛЕНИЕ ВСЕХ БРЕНДОВ\"', 2, 500, 5),
(3, 'КУРС \"ПОЛИРОВКА ВОЛОС И ДЕТОКС КОЖИ ГОЛОВЫ\"', 1, 250, 5),
(4, 'БАЗОВЫЙ КУРС \"BROVI START\"', 2, 450, 6),
(5, 'ПОВЫШЕНИЕ КВАЛИФИКАЦИИ \"BRONSUN\"', 1, 200, 6),
(6, 'ПОВЫШЕНИЕ КВАЛИФИКАЦИИ \"ДОЛГОВРЕМЕННАЯ УКЛАДКА\"', 1, 200, 6),
(7, 'БАЗОВЫЙ КУРС \"BROW MASTER\"', 8, 400, 4),
(8, 'КУРС \"МАКИЯЖ ДЛЯ СЕБЯ\"', 4, 250, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isadmin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `isadmin`) VALUES
(1, 'admin', '1', 'admin@admin.com', '123321', 1),
(2, '123321', '+375 (123) 123-12-33', 'qwe', '123', NULL),
(3, 'Daes', '+375 (123) 213-21-31', 'alex.bordyug.daes@gmail.com', '123', NULL),
(4, 'Александр', '+375 (029) 404-44-44', 'alex@gmail.com', '123', NULL),
(5, 'Дмитрий', '+375 (029) 107-95-56', 'dmitry@gmail.com', '123', NULL),
(6, 'Александр', '+375 (029) 107-95-56', 'alex@mail.by', '123', NULL),
(7, 'Николай', '+375 (029) 107-95-56', 'nik@gmail.com', '123', NULL),
(8, 'Дмитрий', '+375 (029) 107-95-56', 'dr@gmail.com', '123', NULL),
(9, 'Михаил', '+375 (029) 107-95-56', 'mih@gmail.com', '123321', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `masters`
--
ALTER TABLE `masters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `regservices`
--
ALTER TABLE `regservices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `services_id` (`services_id`,`masters_id`),
  ADD KEY `masters_id` (`masters_id`);

--
-- Индексы таблицы `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`),
  ADD KEY `masters_id` (`masters_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `masters`
--
ALTER TABLE `masters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `regservices`
--
ALTER TABLE `regservices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT для таблицы `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `masters`
--
ALTER TABLE `masters`
  ADD CONSTRAINT `masters_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Ограничения внешнего ключа таблицы `regservices`
--
ALTER TABLE `regservices`
  ADD CONSTRAINT `regservices_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `regservices_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `regservices_ibfk_3` FOREIGN KEY (`masters_id`) REFERENCES `masters` (`id`),
  ADD CONSTRAINT `regservices_ibfk_4` FOREIGN KEY (`services_id`) REFERENCES `services` (`id`);

--
-- Ограничения внешнего ключа таблицы `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Ограничения внешнего ключа таблицы `training`
--
ALTER TABLE `training`
  ADD CONSTRAINT `training_ibfk_1` FOREIGN KEY (`masters_id`) REFERENCES `masters` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
