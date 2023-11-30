# Stage 1: Build React app
FROM node:20.6.1-alpine3.18 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . .

# Build the SvelteKit app for production
RUN npm run build

# Expose the port your app runs on
EXPOSE $CLIENT_PORT

# Set the command to start the app
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host", "0.0.0.0"]