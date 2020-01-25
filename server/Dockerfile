FROM node:12.14.1-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start"]
