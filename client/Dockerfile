FROM node:12.14.1-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Styled Components do not render correctly in production builds without this
ENV REACT_APP_SC_DISABLE_SPEEDY=true

RUN [ "npm", "run", "build"]

CMD [ "npm", "run", "start"]