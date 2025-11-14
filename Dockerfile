FROM node:alpine

COPY . .

RUN npm run install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm","run","start"]
