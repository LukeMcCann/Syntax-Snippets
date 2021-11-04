# PHP Backend API Microservice
A simplified Docker Compose workflow that sets up a network of containers for local development. You can view the full article that inspired this repo [here](https://dev.to/aschmelyun/the-beauty-of-docker-for-local-laravel-development-13c0).

## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up --build -d site`.

After that completes, follow the steps from the [src/README.md](src/README.md) for setting up the authors project, or create your own README instructions specific to your project build.

Bringing up the Docker Compose network with `site` instead of just using `up`, ensures that only our site's containers are brought up at the start, instead of all of the command containers as well. The following are built for our web server, with their exposed ports detailed:

- **webserver** - `:8080`
- **database** - `:5432`
- **api** - `:9000`

## Persistent Storage

By default, whenever you bring down the Docker network, your data will be removed after the containers are destroyed. If you would like to have persistent data that remains after bringing containers down and back up, do the following:

1. Create a `dbdata` folder in the `infrastructure` root.
2. Under the database service in your `docker-compose.yml` file, add the following lines:

```
volumes:
  - ./dbdata:/path/to/database/data
```

# Accessing Postgres

Unlike our MySQL containers, our Postgres containers
do not come with a DBMS container. We recommend setting
up DataGrip to connect to the database, you can access the
postgres container via `docker exec -ti webserver sh` once inside the container you can access the data base as you would in a normal environment `psql@databaseName`.

While it is possible to manage the database in this manner, 
it can be tedious and difficult to manage. PGAdmin is a 
free tool, however, we prefer DataGrip. If you wish to 
add a PGAdmin container you can add a service to the 
docker-compose from the official [docker hub image](https://www.pgadmin.org/download/pgadmin-4-container/).

# Issues

## Server Error 500
> exec into php container: docker exec -ti php sh

> install dependencies: composer install 

> run node install: docker run --rm node install

## Unable to access storage
> exec into php container: docker exec -ti php sh

> change ownership: 
<code>chown -R www-data: storage</code>
<code>chown -R www-data: bootstrap/cache</code>