FROM node:18.12.0
WORKDIR /src
COPY package.json .
RUN npm install
RUN npm install -g pm2
COPY . .
RUN npm run test
RUN npm run build
EXPOSE 8000
CMD [ "pm2-runtime", "npm", "--", "start" ]