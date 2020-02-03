FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

#No need to specify a command to start nginx as it gets started by default when a container with the image starts