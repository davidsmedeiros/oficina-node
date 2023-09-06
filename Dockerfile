FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
RUN npm i -g sequelize-cli

COPY . .

EXPOSE 3000