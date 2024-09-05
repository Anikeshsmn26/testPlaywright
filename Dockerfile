# 1. Base image
FROM mcr.microsoft.com/playwright:v1.40.0-focal

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install the dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Install Playwright browsers (Chromium, Firefox, WebKit)
RUN npx playwright install --with-deps

# 7. Define the command to run the Playwright tests
CMD ["npx", "playwright", "test"]
