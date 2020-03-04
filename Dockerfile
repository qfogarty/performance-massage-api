FROM node:13
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]
