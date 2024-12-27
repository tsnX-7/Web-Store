<!--
This file is the README for the Web-Store project, providing an overview and instructions for the project.
-->

# Web-Store

## Overview

The Web-Store project is a full-stack MERN application that allows users to manage products. The main features include:

- Adding new products
- Deleting existing products
- Updating product details
- Dark mode for a better user experience

## Installation

To install and run the Web-Store project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/web-store.git
   ```
2. **Open folder in VS Code:**

   ```bash
   code web-store
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root folder and add the necessary environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=your_local_machine_port
   ```

4. **Install both server & client dependencies in one command:**

   ```bash
   npm run build
   ```

5. **Run the server:**

   ```bash
   npm run start
   ```

6. **Access the application:**
   Open your browser and navigate to `http://localhost:PORT` to start using the Web-Store application.

7. **To preview and checkout the deployed application:**
   [web-store-live](https://web-store-mern-6ast.onrender.com) 
   *(You may have to wait upto 2-3 minutes for onrender deployment to spin up)*
