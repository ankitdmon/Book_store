# RESTful API using Node.js for managing books

A simple CRUD app for book management using NodeJs, TypeScript, and MongoDB. We can add a book, update a book, delete a Book(Soft delete), get all books, and get a particular book by their ID.

### Tech Stacks

1. NodeJs (https://nodejs.org/en)
2. MongoDB (https://www.mongodb.com/)
3. typeScript (https://www.typescriptlang.org/)
4. mongoose (https://mongoosejs.com/)
5. YARN (https://yarnpkg.com/)


## Installation Steps

#### Install Node

If you haven't already, you need to install Go. You mentioned that you are using Go version ``v18.17.1``.

You can download and install Go from the official website: 

```
https://nodejs.org/en
```

Also, you need to add the package Manager `YARN` official website:

```
https://yarnpkg.com/
```

Could you ensure NodeJs is properly installed and added to your system's PATH?


### Set up your Node module

You mentioned that your project is hosted on GitHub at `https://github.com/ankitdmon/Book_store` 
To work with your project, set up your Node module as follows:

```
git clone https://github.com/ankitdmon/Book_store
 ``` 

This will create all the files in your directory.

### Install project dependencies

Your `Node` file lists the project dependencies. To install these dependencies, run:

```
yarn OR npm
```
This command will download and install the necessary dependencies for your project.

### Verify Installation

To verify that all dependencies are installed successfully, you can run:
```
npm start
```
This will display a list of all the installed node modules and their versions.

### Building and Running Your Project

Now, you should be able to build and run your project. You may have an `app.ts` file or an entry point for your project. To run your application, use the `yarn start or nom start` command:

```
npm start or yarn start
```

# Project Structure

This project follows a `MVC (Model-view-controller)` development model -

# Code Structure

This repository follows a specific structure to maintain organization and modularity. Below is an overview of the main folders and files within the codebase.

## Folders

- **src**: The main source code directory.

  - **config**: Contains configuration files.

    - **server.ts**: Configuration for the server.

    - **db.ts**: Database configuration.

  - **router**: Defines the API routes.

    - **index.ts**: Main router file.

    - **book.ts**: Router for book-related routes.

  - **Controller**: Controllers for handling API requests.

    - **book.ts**: Controller for book-related logic.

  - **helper**: Contains utility files.

    - **response.ts**: Provides global response handling.

  - **model**: Defines data models.

    - **book.ts**: Model for book-related data.

- **.env**: Environment variables file.

- **app.ts**: The entry point of the application.

## Code Organization

The codebase is organized into separate folders to maintain modularity and separation of concerns. Here's a brief description of each folder:

- **config**: Configuration files for the server and database.

- **router**: Defines API routes, allowing for clean and structured request handling.

- **Controller**: Contains controllers that handle business logic and interact with models.

- **helper**: Utility functions and global response handling.

- **model**: Data models to represent and interact with the database.

- **.env**: Environment variables file to store configuration settings.

- **app.ts**: The main entry point of the application.

## Usage

To run the application, make sure to set up the necessary environment variables in the `.env` file. Then, start the application by running `npm start or yarn start` or your preferred start command.

# Interacting with the System

You can interact with the system using Postman, a popular API testing tool. Follow these steps to use Postman with your project:

## Using Postman

1. Open Postman.

2. Set the endpoint to `http://localhost:8080/api` with the `POST` method.

3. Choose one of the following request payloads and enter it into the request body.

# Book APIs

This API provides endpoints for managing books.

## Endpoints

### Add a Book

- **Method**: POST
- **URL**: ```http://localhost:8080/api/book```
- **Description**: Add a new book to the system.
- **Request Body**: JSON object representing the book.
```
{
    "title": "Rich Dad Poor Dad", 
    "author": "ABC", 
    "summary":"abc" 
}
```

### Get All Active Books

- **Method**: GET
- **URL**: ```http://localhost:8080/api/books```
- **Description**: Retrieve a list of all active books.

### Update a Book

- **Method**: PUT
- **URL**: ``http://localhost:8080/api/book/:id``
- **Description**: Update a specific book by its unique ID.
- **Request Body**: JSON object representing the updated book.
```
{
    "title":"RICH DAD POOR DAD",
    "author": "ABCd", 
    "summary":"abcd" 
}
```

### Delete a Book

- **Method**: DELETE
- **URL**: ``http://localhost:8080/api/book/:id``
- **Description**: Delete a specific book by its unique ID.

### Get a Book by ID

- **Method**: GET
- **URL**:``http://localhost:8080/api/book/:id``
- **Description**: Retrieve a specific book by its unique ID.

## Usage

To interact with these endpoints, use your preferred HTTP client (e.g., Postman, curl, or a web browser) to make requests to the specified URLs with the appropriate HTTP methods.

Please note that you need to replace `:id` in the URLs with the actual ID of the book you want to interact with.

## Response Format

The API follows a RESTful design and returns responses in JSON format. Responses include relevant data and status codes for easy consumption. Here I am using Global response format..

### Request Payloads:

#### book 1
```json
{
    "title":"Rich Dad Poor Dad", 
    "author": "ABC", 
    "summary":"abc" 
}
```


### Response

### Success Response
```
{
    "success": true,
    "data": {
        "title": "Rich Dad Poor Dad",
        "author": "ABC",
        "summary": "abc",
        "deletedAt": null,
        "_id": "653fedf21b8dfe4ef582d597",
        "createdAt": "2023-10-30T17:54:58.547Z",
        "updatedAt": "2023-10-30T17:54:58.547Z"
    },
    "message": "Book added!!"
}
```

## Fail Response
```
{
    "success": false,
    "data": null,
    "message": "Failure",
    "errorData": "Title and Author is required!!",
    "extra": {}
}
```

### Error Response
```
{
    "success": false,
    "data": null,
    "message": "Error",
    "errorData": {
        "errorKey": "Error",
        "errorDesc": "Operation `books.insertOne()` buffering timed out after 10000ms",
        "errorMessage": "Operation `books.insertOne()` buffering timed out after 10000ms",
        "errorStack": "MongooseError: Operation `books.insertOne()` buffering timed out after 10000ms\n    at Timeout.<anonymous> (C:\\Users\\ankit\\Documents\\GitHub\\own-practice\\assignment\\Book_store\\node_modules\\mongoose\\lib\\drivers\\node-mongodb-native\\collection.js:186:23)\n    at listOnTimeout (node:internal/timers:569:17)\n    at processTimers (node:internal/timers:512:7)"
    }
}
```
