.PHONY: docker-build docker-run

docker-build:
	docker build -t fibo-static -f Dockerfile.static .


docker-run:
	docker run --rm fibo-static 30
