FROM alpine:3.10
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]
