FROM treaudde/simple-development-environment:latest
RUN docker-php-source extract \
        && docker-php-ext-install mysqli \
        && docker-php-ext-install pdo_mysql \
        && docker-php-source delete
