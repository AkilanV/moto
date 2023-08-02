# Use the official Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /src

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]
