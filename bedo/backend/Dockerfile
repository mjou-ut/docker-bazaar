FROM clojure

WORKDIR /app

COPY project.clj .

RUN lein deps

COPY . .

RUN mv "$(lein ring uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" app-standalone.jar

CMD ["java", "-jar", "app-standalone.jar"]
