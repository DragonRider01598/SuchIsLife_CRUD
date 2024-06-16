# CRUD API for Game Data

This project provides a CRUD (Create, Read, Update, Delete) API for storing and retrieving user game data using Node.js, Express, and MongoDB. The API allows users to save, fetch, update, and delete game data based on their email and a unique hash.

## Project Overview

- **Backend**: Built with Node.js and Express.
- **Database**: MongoDB, hosted on MongoDB Atlas.
- **API Functionality**: Supports creating, reading, updating, and deleting game data.

## Features

- **Improved Database Connectivity**: Implemented robust error handling to ensure reliable connections to MongoDB.
- **Enhanced Data Operations**: Added functionality to update existing data and check for data existence before insertion.
- **Environment Variable Management**: Used `dotenv` for managing sensitive information securely.
- **CORS Support**: Ensured the API can be accessed by different origins.
- **Body Parsing**: Utilized `body-parser` to handle JSON request bodies.

## Prerequisites

- Node.js installed on your machine.
- A MongoDB cluster set up on MongoDB Atlas or a local MongoDB instance.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/DragonRider01598/SuchIsLife_CRUD
    cd SuchIsLife_CRUD
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory of your project and add the following variables:
    ```
    USER=your_mongodb_user
    PASS=your_mongodb_password
    ```

4. Start the server:
    ```bash
    node server.js
    ```

## Usage

### Base URL

```
http://localhost:3000
```

### Endpoints

#### Health Check

- **GET `/`**

    Check if the server is online.

    **Response**
    ```
    Status: 200 OK
    Body: Server is Online
    ```

#### Insert/Update Data

- **POST `/putData`**

    Insert or update user game data.

    **Request Body**
    ```json
    {
        "email": "user@example.com",
        "hash": "uniqueHash",
        "data": "gameData"
    }
    ```

    **Response**
    - **Status: 200 OK** if the data is inserted or updated successfully.
    - **Status: 500 Internal Server Error** if there is an error.

#### Retrieve Data

- **POST `/retrieveData`**

    Retrieve user game data.

    **Request Body**
    ```json
    {
        "email": "user@example.com",
        "hash": "uniqueHash"
    }
    ```

    **Response**
    - **Status: 200 OK** and the retrieved document if the data is found.
    - **Status: 404 Not Found** if the data is not found.
    - **Status: 500 Internal Server Error** if there is an error.

#### Delete Data

- **DELETE `/deleteData`**

    Delete user game data.

    **Request Body**
    ```json
    {
        "email": "user@example.com",
        "hash": "uniqueHash"
    }
    ```

    **Response**
    - **Status: 200 OK** if the data is deleted successfully.
    - **Status: 404 Not Found** if the data is not found.
    - **Status: 500 Internal Server Error** if there is an error.

### Examples

#### Insert/Update Data
```bash
curl -X POST http://localhost:3000/putData \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "hash": "uniqueHash",
    "data": "gameData"
}'
```

#### Retrieve Data
```bash
curl -X POST http://localhost:3000/retrieveData \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "hash": "uniqueHash"
}'
```

#### Delete Data
```bash
curl -X DELETE http://localhost:3000/deleteData \
-H "Content-Type: application/json" \
-d '{
    "email": "user@example.com",
    "hash": "uniqueHash"
}'
```

## What I Have Learned

- **Advanced MongoDB Usage**: Improved understanding of MongoDB operations, including using `findOneAndUpdate` and handling conditional operations based on document existence.
- **Environment Management**: Learned to securely manage and use environment variables to store sensitive data.
- **Error Handling**: Enhanced error handling mechanisms to ensure the server provides meaningful error messages and handles failures gracefully.
- **API Design**: Gained experience in designing and implementing RESTful API endpoints that perform CRUD operations.
- **Middleware Utilization**: Leveraged Express middleware (`body-parser`, `cors`) to handle requests more efficiently.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `body-parser`: Node.js body parsing middleware
- `mongodb`: The official MongoDB driver for Node.js
- `cors`: Node.js CORS middleware
- `dotenv`: Loads environment variables from a `.env` file
