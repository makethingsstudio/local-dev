#!/bin/bash
usermod -u 1000 www-data
groupmod -g 1000 www-data
# chown www-data:www-data /var/www/html -R

if [ "$ALLOW_OVERRIDE" = "**False**" ]; then
    unset ALLOW_OVERRIDE
else
    sed -i "s/AllowOverride None/AllowOverride All/g" /etc/apache2/apache2.conf
    a2enmod rewrite
fi

source /etc/apache2/envvars
tail -F /var/log/apache2/error.log &
exec apache2 -D FOREGROUND
