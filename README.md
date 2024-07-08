# Login and Registration Page with Database

This project is a beautiful login and registration page that saves user data in an SQLite3 database. The server-side is written in Node.js using the Express library.

## Features

- User Registration
- User Login
- Data stored in SQLite3 database
- Clean and responsive UI

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your system. You can download and install Node.js from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/den17developer/login-page-with-dataBase.git
    cd login-page-with-dataBase
    ```

2. **Install dependencies**

    Run the following command to install all the necessary dependencies:

    ```sh
    npm install
    ```

### Configuration

1. **Set up the database**

    The project uses SQLite3 as the database. The configuration is already set up in the code, so you don't need to do anything extra. The database file will be created automatically when you run the server.

### Running the Application

1. **Start the server**

    Use the following command to start the server:

    ```sh
    node server.js
    ```

    The server will start running on `http://localhost:3000`.

2. **Open the application in your browser**

    Go to `http://localhost:3000/index.html` in your web browser to see the login and registration page.
