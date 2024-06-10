# TODO List Website

A simple TODO list web application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, read, update, and delete TODO items. Each TODO item includes a title, description, and due date.

## Features
 * Add new TODO items with a title, description, and due date.
 * View all TODO items in a list format.
 * Update existing TODO items to change their title, description, and due date.
 *  Delete TODO items from the list.
 * User-friendly interface with responsive design.


### STEPS TO START THE PROGRAM 


 cd to backend directory
 
	npm run dev

  cd to client 

    npm start 

# Project Structure
## Frontend
* src/components/TodoForm.js: Component for adding and updating TODO items.
* src/components/TodoList.js: Component for displaying TODO items and handling edit/delete actions.
* src/services/todoService.js: Defines Axios service functions to interact with the backend API.
* src/App.js: Main component that integrates TodoForm and TodoList.
* src/App.css: Contains the CSS styles for the application.
  
![Screenshot (189)](https://github.com/ShrijanSahu/TODO-CustomWebsite/assets/154973180/ec874b66-f800-448c-b82f-45b4b5ec7c81)

The frontend of this application is designed with a focus on a clean and user-friendly UI/UX interface. Every effort has been made to ensure the design is visually appealing and intuitive for users.

This application incorporates all CRUD operations to facilitate active interaction with users. Additionally, a login button has been included to implement authentication, ensuring that each customer can have a personalized experience.


![Screenshot (190)](https://github.com/ShrijanSahu/TODO-CustomWebsite/assets/154973180/ae6dd740-f93a-4c8b-93a8-97736cff1f71)

## Backend
* server.js: Sets up the Express server, connects to MongoDB, and defines the routes for CRUD operations.
* models/Todo.js: Defines the Mongoose schema and model for TODO items.

What you are seeing below is the data being fetched fo rm the frontend part, to get to this I first created a cluster on the mongoDB Atlas from that I connected my backend to it via a API_URL then the help of HTTP Requests(GET, PUSH, PUT, DELETE) I fetched data into the Database.

![Screenshot (191)](https://github.com/ShrijanSahu/TODO-CustomWebsite/assets/154973180/75d7e726-84bb-4b43-aa7e-d610e0dcede1)


# Frontend-Backend Interaction
1. ## Fetching TODO Items:

* The frontend sends a GET request to /todos/get to fetch all TODO items.
* The backend retrieves the items from MongoDB and sends them back as a JSON array.

2. ## Creating a TODO Item:

* The user submits the form with a new TODO item.
* The frontend sends a POST request to /todos/post with the TODO data.
* The backend creates the item in MongoDB and returns the created item.

3. ## Updating a TODO Item:

* The user edits an existing TODO item.
* The frontend sends a PUT request to /todos/:id/put with the updated data.
* The backend updates the item in MongoDB and returns the updated item.

4. ## Deleting a TODO Item:

* The user deletes a TODO item.
* The frontend sends a DELETE request to /todos/:id/delete.
* The backend deletes the item from MongoDB and returns the deleted item.


# Thank You !!
