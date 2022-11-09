FROM alpine

WORKDIR /app

ARG file_name=changed
ENV FILENAME=$file_name


RUN echo "Some secret data into a file called ${file_name}.txt" > $file_name.txt &&\
    node compile-example.js exampe && \
    cp /dir /anotgher
