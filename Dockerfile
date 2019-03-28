FROM node:11.6.0

WORKDIR /keywordss

ADD ./src/ /keywordss/src/
ADD ./package.json /keywordss/package.json
ADD ./webpack.config.js /keywordss/webpack.config.js
ADD ./.babelrc ./keywordss/.babelrc
ADD ./index.html /keywordss/index.html
#ADD ./image/ /keywordss/image/

RUN npm init -y
RUN cd /keywordss
RUN npm install
RUN npm run build

CMD http-server -p 3000 --cors 

EXPOSE 3000
