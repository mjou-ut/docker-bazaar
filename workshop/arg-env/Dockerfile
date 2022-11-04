FROM alpine

WORKDIR /app

ARG file_name=foobar
ENV FILENAME=$file_name

RUN echo "Some secret data into a file called ${file_name}.txt" > $file_name.txt
