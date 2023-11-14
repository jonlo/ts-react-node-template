FROM node:18.12.0
WORKDIR /src
ADD . /src
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]