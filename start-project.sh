#!/usr/bin/env bash
# start the container
docker-compose up -d

#wait for mysql to be active and ready for migration
while ! docker exec notes-app-database mysqladmin --user=root --password=insecure_password --host "127.0.0.1" ping --silent &> /dev/null ; do
    echo "Waiting for database connection..."
    sleep 2
done


#run composer install
docker exec notes-app-backend composer install

#migrate database
docker exec notes-app-backend php artisan migrate

#run tests
docker exec notes-app-backend ./vendor/bin/phpunit

#done
echo "The project is ready, open your browser and go to http://localhost:8081 to add some notes"