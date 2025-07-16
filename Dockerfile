FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json .
COPY .eslintrc.json .
COPY src ./src
RUN npm run build || true  # Allow build to fail for the initial broken state
EXPOSE 3000
CMD ["npm", "start"]
