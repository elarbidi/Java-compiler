# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM node:18-alpine

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app . 

# Expose port 3000 to the host machine
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
