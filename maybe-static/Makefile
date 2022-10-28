.PHONY: docker-build docker-run

DOCKER_IMAGE := 'fibo-static'

docker-run:
	docker run --rm $(DOCKER_IMAGE) 30

docker-build:
	docker build -t $(DOCKER_IMAGE)  -f Dockerfile.static .
