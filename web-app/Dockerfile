FROM node:9

USER node

RUN rm -rf /home/node/app/dist/

RUN mkdir -p /home/node/app


WORKDIR /home/node/app

COPY package.json /home/node/app

COPY package-lock.json /home/node/app

RUN npm install -save

COPY . /home/node/app

EXPOSE 4020

CMD ["npm", "run-script", "build"]
