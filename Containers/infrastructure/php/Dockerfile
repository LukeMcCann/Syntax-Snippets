FROM php:8.0.12-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip curl vim wget bash \
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \ 
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && pecl channel-update pecl.php.net \
    && pecl install apcu

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony