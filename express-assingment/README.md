# Express.js REST API

This project is a RESTful API built with Express.js, providing endpoints for managing users and products.

## Setup

1.  **Clone the Repository:**

    ```Terminal
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install Dependencies:**
    Initialize the folder as a Node.js project by running 'npm init -y'

    Install necessary dependencies with: 'npm install express dotenv'
    

3.  **Edit `.env` File:**

    Edit the port you want the app to use if 3000 is busy. For example:

    ```
    PORT=5000
    ```

    * `PORT`: The port on which the server will run.

4.  **Run the Application:**

    ```bash
    npm start
    ```

    The server will start running on the specified port.

## API Endpoints

The endpoints were tested using POSTMAN. An example of how to interact with the endpoints using Postman is shown below:

     1. Open Postman.
     2. Set the request method to GET.
     3. Enter the URL: http://localhost:3000/users/{id} (replace {id} with the actual ID of the user you want to delete).
     4. Click "Send."
     5. You should receive a 200 OK response if the user was successfully fetched.


### Users

* **GET /users**

    * Description: Retrieves a list of all users.
    * Example Request: `GET http://localhost:5000/users`
    * Example Response:

        ```json
        [
          { "id": 1, "name": "John Doe", "email": "john@example.com" },
          { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
        ]
        ```

* **GET /users/:id**

    * Description: Retrieves a specific user by ID.
    * Example Request: `GET http://localhost:5000/users/1`
    * Example Response:

        ```json
        { "id": 1, "name": "John Doe", "email": "john@example.com" }
        ```

* **POST /users**

    * Description: Creates a new user.
    * Example Request: `POST http://localhost:5000/users`
    * Request Body (JSON):

        ```json
        { "name": "New User", "email": "newuser@example.com" }
        ```

    * Example Response:

        ```json
        { "id": 3, "name": "New User", "email": "newuser@example.com" }
        ```

* **PUT /users/:id**

    * Description: Updates an existing user.
    * Example Request: `PUT http://localhost:5000/users/1`
    * Request Body (JSON):

        ```json
        { "name": "Updated User", "email": "[email address removed]" }
        ```

    * Example Response:

        ```json
        { "id": 1, "name": "Updated User", "email": "[email address removed]" }
        ```

* **DELETE /users/:id**

    * Description: Deletes a user.
    * Example Request: `DELETE http://localhost:5000/users/1`
    * Example Response: 204 No Content

### Products

* **GET /products**

    * Description: Retrieves a list of all products.
    * Example Request: `GET http://localhost:5000/products`
    * Example Response:

        ```json
        [
          { "id": 1, "name": "Laptop", "price": 1200 },
          { "id": 2, "name": "Smartphone", "price": 800 }
        ]
        ```

* **GET /products/:id**

    * Description: Retrieves a specific product by ID.
    * Example Request: `GET http://localhost:5000/products/1`
    * Example Response:

        ```json
        { "id": 1, "name": "Laptop", "price": 1200 }
        ```

* **POST /products**

    * Description: Creates a new product.
    * Example Request: `POST http://localhost:5000/products`
    * Request Body (JSON):

        ```json
        { "name": "New Product", "price": 500 }
        ```

    * Example Response:

        ```json
        { "id": 3, "name": "New Product", "price": 500 }
        ```

* **PUT /products/:id**

    * Description: Updates an existing product.
    * Example Request: `PUT http://localhost:5000/products/1`
    * Request Body (JSON):

        ```json
        { "name": "Updated Product", "price": 1300 }
        ```

    * Example Response:

        ```json
        { "id": 1, "name": "Updated Product", "price": 1300 }
        ```

* **DELETE /products/:id**

    * Description: Deletes a product.
    * Example Request: `DELETE http://localhost:5000/products/1`
    * Example Response: 204 No Content

## Error Handling

* The API uses a global error-handling middleware to catch and respond to errors gracefully.
* Error responses include a JSON object with an error message and, in development mode, the error stack trace.

## Logging

* A custom logging middleware logs request details (method, URL, timestamp) to the console.

## Dependencies

* express
* dotenv

## Development

* Use `nodemon` for automatic server restarts during development: `npm install --save-dev nodemon`
* Add a "dev" script to `package.json`: `"dev": "nodemon app.js"`
* Run the development server: `npm run dev`

## Notes

* This project uses mock data. Replace the mock data with a database for a production environment.
* API endpoints were tested using POSTMAN API.