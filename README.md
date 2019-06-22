# BT Notes App

This is a simple notes app with Laravel backend and an AngularJS Frontend

## How To Run:
1. Clone the project using the following command: 
`git clone https://github.com/treaudde/bt-notes-app.git`
2. Make sure `docker` and `docker-compose` are installed on your machine. If not
instructions can be found here: `https://docs.docker.com/`
3. `cd` into the `notes-app` folder and run the following command: `docker-compose up -d`
4. If this is the first time running the project, you will need to run the 
following additional command to set up the database after the containers are running:  
 `docker exec -it $(docker ps | grep 'treaudde/simple-development-environment:latest' | awk '{print $1}') php artisan migrate`
5. To make sure everything is running properly, run the test suite using the following command:  
`docker exec -it $(docker ps | grep 'treaudde/simple-development-environment:latest' | awk '{print $1}') ./vendor/bin/phpunit`
6. If the test suite returns no errors, open your browser and visit the following address
to begin using the app: `http://localhost:8080`
7. Begin using the app and have fun.