# Express Server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:
```
yarn start
```

The server will be running on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the Express server, run:
```
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use the following command:
```
docker run -p 8001:8001 express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.