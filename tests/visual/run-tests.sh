cd tests/visual
docker-compose build

docker-compose up -d selenium
docker-compose up tests

RESULT=$(docker-compose ps -q \
  | xargs docker inspect -f '{{ .State.ExitCode }}' \
  | grep -v 0 | wc -l | tr -d ' ')

docker-compose stop
docker-compose rm -vf

exit $RESULT
