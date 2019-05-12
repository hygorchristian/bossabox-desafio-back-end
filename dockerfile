FROM node:argon

LABEL author="Hygor Dias"

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
