Visual tests
============

You first need to install Docker for Mac: https://docs.docker.com/docker-for-mac/

To start the tests, you need to run in this directory:

```sh
docker-compose build
docker-compose up -d

```

If you want to restart the tests:

```sh
docker-compose restart tests
```

If you want to stop the docker:

```sh
docker-compose stop
```

The diffs will be saved in tests/visual/visual-test folder.
