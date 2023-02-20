# docker run -p 5050:8080 vue-app

#docker run -v ${PWD}/src:/app/src -p 5050:8080 -d mynicevue/app 
docker run -v ${PWD}/src:/app/src -p 5050:8080 -d vue-app