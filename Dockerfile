FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli && npm install
COPY src .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
