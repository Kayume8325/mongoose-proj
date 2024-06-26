# Product and order management

## Overview

This project is an API service built using Express and Mongoose, with data validation handled by Joi. The service provides endpoints for managing products and orders, ensuring robust validation and error handling throughout.

## Features

- Product and order management
- Data validation using Joi
- Comprehensive error handling
- Modular and clean code structure
- Linting with ESLint for consistent code style

## Validation

We used Joi to validate incoming request data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14.x or later)
- MongoDB
- TypeScript

### Installation

1. Clone the repository:

   git clone https://github.com/Kayume8325/mongoose-proj
   cd mongoose-proj

2. Install the dependencies:

   npm install cors,
   npm install dotenv
   npm install joi
   npm install express
   npm install validator

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

NODE_ENV= development
PORT=5000

DATABASE_URL= mongodb+srv://admin-um:hhkrb832528@cluster0.sg9ad4u.mongodb.net/Product-Manage?retryWrites=true&w=majority&appName=Cluster0

## Running the Server

3. Use this "npm run start:dev" command in terminal to start the server. and you can check each Endpoint by Postman. and can check database mongoose compass also

## Checking API End Point

4. Also you cand check API End points through Live Deployment link. Here is the link:
   https://batch3-assaignment-2.vercel.app/

## Error Handling

Our API implements comprehensive error handling to manage scenarios such as validation errors and resource not found errors. Meaningful error messages are returned to the client to facilitate debugging and user experience.

## Coding Style

We use ESLint to enforce a consistent coding style. The linting configuration can be found "eslint" in the json file.
