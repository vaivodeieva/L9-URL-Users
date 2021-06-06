FROM node:alpine


WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

EXPOSE 8081
ENTRYPOINT [ "tail", "-f", "/dev/null" ]