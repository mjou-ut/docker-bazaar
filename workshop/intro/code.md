# Code to run


Create a simple docker image

```
docker build -t docker-intro -f Dockerfile .

docker run --rm -it --name foo docker-intro 

apt update && apt install --yes htop mc
```


Create image by our own resources

```
cd /tmp

# debian
git clone git@github.com:debuerreotype/docker-debian-artifacts.git && cd docker-debian-artifacts

#alpine
git clone git@github.com:alpinelinux/docker-alpine.git && cd docker-alpine
```

Or edit an existing image

```
# in ./alternate-alpine
docker build -t my-node -f Dockerfile.custom-node .

```

Inspect images the right way by browsing its contents
```
# in ./alternate-alpine
docker build -t my-node --out inage-output -f Dockerfile.custom-node .
cd image-output && tree | fzf
```



ARG and ENV
```
# in ./arg-env
docker build -t my-node --build-arg file_name=FOOO -f Dockerfile .

```

ARG can be used when building an image
```
# alpine
docker build --build-arg SOURCE=lts-alpine -t my-node -f Dockerfile.variable-from .

# debian
docker build --build-arg SOURCE=lts-slim -t my-node -f Dockerfile.variable-from .
```

