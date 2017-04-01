cd tests/visual
docker-compose build

docker-compose up -d selenium
docker-compose up tests

docker-compose stop
docker-compose rm -vf
