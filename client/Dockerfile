FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ ./

RUN npm i --production
RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]