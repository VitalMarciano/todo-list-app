# todo-list-app

Todoapp Screenshot ![image](https://github.com/VitalMarciano/todo-list-app/assets/74130524/38c40d7d-79d0-4649-802d-b45d1a783336)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
## Introduction
Todoapp is a task management application that allows users to organize and track their tasks efficiently. Users can set task priorities, add labels for classification, and collaborate with others by assigning tasks. The app also features a dark mode for better user experience and allows users to delete, edit, and mark tasks as completed. Additionally, it enables filtering tasks based on labels, sending email notifications, and tracking task completion progress across all tasks.

Todoapp Overview 
Drag and drop ![image](https://github.com/VitalMarciano/todo-list-app/assets/74130524/1687d4c1-a764-48cf-a5df-66efcae84a0b)
Task Screenshot![image](https://github.com/VitalMarciano/todo-list-app/assets/74130524/6a23117d-2126-4a0c-9bc5-d37109a00bf4)
Search ScreenShot ![image](https://github.com/VitalMarciano/todo-list-app/assets/74130524/af2c4e86-84ba-44a7-a8ca-d23225ec3c1f)
mobile preview 

https://github.com/VitalMarciano/todo-list-app/assets/74130524/07d06adb-4573-454a-ad1a-58d5ee610611



## Features
### User Management:

Users can register as new users with their details, including username, password, Google email, date of birth, first name, and last name.
Existing users can log in using their username and password.
### Task Management:

Each task has a priority (high, medium, low).
Option to add labels for task classification.
Dark mode option for better user experience.
Users can delete, edit, and mark tasks as completed.
Task filtering based on labels.
Email notifications for task updates.
Task progress tracking across all tasks.
Collaborative tasks with other users, adding them based on their usernames.
User Interface and Design:

Responsive design to adapt to different devices and screen sizes.
Floating "Add Task" button for easy task creation.
Tags filter to view tasks based on their associated tags.
Authentication and Security:

Secure login with validation for username and password.
User registration with input validation for email, password, and other details.
## Getting Started
### Prerequisites

### Installation
Clone the repository:
```
bash
git clone [https://github.com/your-username/Todoapp.git](https://github.com/VitalMarciano/todo-list-app.git)
cd todo-list-app
```
Install the dependencies for the client side:

```bash
cd client
npm install
```
Install the dependencies for the server side:

```bash
cd ../server
npm install
```
### Usage
Start the server:
```
bash
Copy code
cd server
npm start
```

Start the client (in a separate terminal):
```
bash
Copy code
cd client
npm run dev
```
Visit http://localhost:3000 in your web browser to access the Todoapp.

## Technologies
### Client Side
- React.js
- Tailwind CSS
- Toast
- React DnD Provider (React Draggable)
- Axios
- React Router DOM
- React Cookies

### Server Side
- Express.js
- MongoDB with Mongoose
- Bcrypt
- JSON Web Tokens (JWT)

## Contributing
Contributions to the Todoapp are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

##  License
This project is licensed under the MIT License.
