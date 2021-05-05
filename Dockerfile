FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8080
# ENV PORT 8080
# EXPOSE $PORT
CMD ["node", "index.js"]