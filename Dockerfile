FROM  node:14.x-alpine AS development
ENV NODE-ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]