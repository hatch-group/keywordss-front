FROM node:11.6.0

WORKDIR /keywordss

ADD ./index.html /keywordss/index.html
ADD ./dist/bundle.js /keywordss/dist/bundle.js
ADD ./image/ /keywordss/image/

RUN npm init -y
RUN npm install -g http-server

CMD cd /keywordss/ && http-server -p 3000

EXPOSE 3000
