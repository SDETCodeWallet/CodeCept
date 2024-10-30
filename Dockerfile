FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install codeceptjs webdriverio

CMD ["npx", "codeceptjs", "run"]
