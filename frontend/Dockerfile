FROM node:alpine

ENV PORT 3000

# Create app dir
WORKDIR /usr/src/app/frontend

# Install dep
COPY package.json ./
RUN yarn

# Copy source files
COPY . .

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && yarn dev
