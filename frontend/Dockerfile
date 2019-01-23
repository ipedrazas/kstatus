# build stage
FROM node:8.15.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --prod

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/kstatus /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]