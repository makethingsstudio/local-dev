FROM mhart/alpine-node:5.11.1

MAINTAINER benkutil

ENV NPM_VERSION=3.8.8 GULP_VERSION=3.9.1

RUN npm -g install gulp@${GULP_VERSION} \
    && find /usr/lib/node_modules/npm -name test -o -name .bin -type d | xargs rm -rf \
    && rm -rf /etc/ssl /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

WORKDIR /usr/src/app

ADD _package.json package.json
ADD _gulpfile.js gulpfile.js
ADD _babelrc .babelrc

RUN npm install --silent

CMD ["sh"]
