# Product and order management

## Overview

This project is an API service built using Express and Mongoose, with data validation handled by Joi. The service provides endpoints for managing products and orders, ensuring robust validation and error handling throughout.

## Features

- Product and order management
- Data validation using Joi
- Comprehensive error handling
- Modular and clean code structure
- Linting with ESLint for consistent code style

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14.x or later)
- MongoDB
- Express
- TypeScript

### Installation

1. Clone the repository:

   git clone https://github.com/Kayume8325/mongoose-proj
   cd mongoose-proj

2. Install the dependencies:
   ```sh
   npm install cors,
   npm install dotenv
   joi
   express
   validator
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database

```
