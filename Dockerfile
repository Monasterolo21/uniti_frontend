FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

RUN mkdir /app

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]



# docker build -t vue-app .

#docker run -p 5050:8080 vue-app