# Base image
FROM node:18

# Tạo thư mục app trong container
WORKDIR /app

# Copy package.json trước để tận dụng cache
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port (Express thường dùng 3000)
EXPOSE 3000

# Start app
CMD ["npm", "start"]