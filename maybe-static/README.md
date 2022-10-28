# maybe static

A demo of a smallest possible image using a statically compiled C program

With almost no optimizations and using `gcc` default settings the executable is around 1 MB and using a `FROM scratch` on a multi-stage build the results are suprisingly small

## How to run
``` shell
# build image
make docker-build

# run image
make docker-run
```

## This is a trick, is just echoing a static List
No... is a real program, it can even crash

``` shell
docker run --rm fibo-static foo
```
