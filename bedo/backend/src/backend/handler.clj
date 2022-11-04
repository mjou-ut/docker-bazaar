(ns backend.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.util.response :refer [response]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defn root-handler [req]
  (println (format "Request from: %s" (get (:headers req) "user-agent")))
  (response {:date (str (java.util.Date.))}))

(defn ping-handler [req]
  (println (format "Request at /ping: %s" (str (java.util.Date.))))
  (response {:pong "OK"}))


(defroutes app-routes
  (GET "/" request (root-handler request))
  (GET "/ping" request (ping-handler request))
  ;; oooh...
  (route/not-found "Not Found"))


(def app
  (-> app-routes
      wrap-json-body
      wrap-json-response
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))
     (wrap-cors
      :access-control-allow-origin [#".*"]
      :access-control-allow-methods [:get])))
