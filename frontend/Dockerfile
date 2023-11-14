FROM node:18.12.0
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
RUN npm run test
CMD ["npm", "run", "build"]
