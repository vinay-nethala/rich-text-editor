# Step 1: Use Node.js image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package files
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files
COPY . .

# Step 6: Build the app
RUN npm run build

# Step 7: Expose Vite preview port
EXPOSE 4173

# Step 8: Run the app
CMD ["npm", "run", "preview", "--", "--host"]