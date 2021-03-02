FROM node:14-alpine

LABEL Name="DDBBQ_Backend"
LABEL description="後端api程式"
LABEL version="1.0"
LABEL maintainer="hanshino@github"

WORKDIR /application

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "npm", "start" ]

EXPOSE 5000