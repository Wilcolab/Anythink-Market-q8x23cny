# Anythink Market - Dual Server Application

This project contains both a Python FastAPI server and a Node.js Express server (with TypeScript) for managing a task list. The Node.js server is a modern migration of the Python endpoints with enhanced type safety and development features.

## 🚀 Project Overview

The application provides a simple task management API with endpoints to create and retrieve time-travel themed tasks. Both servers implement the same API contract and can run simultaneously.

## 📁 Project Structure

### Python Server (`python-server/`)

- `python-server/src/main.py`: FastAPI server implementation with task management routes
- `python-server/src/__init__.py`: Python package marker
- `python-server/requirements.txt`: Python dependencies (FastAPI, uvicorn, pydantic)
- `python-server/Dockerfile`: Docker configuration for the Python server

### Node.js Server (`express-server/`)

- `express-server/src/index.ts`: Express server with TypeScript and Pug template engine
- `express-server/package.json`: Node.js dependencies and scripts
- `express-server/tsconfig.json`: TypeScript compiler configuration
- `express-server/Dockerfile`: Docker configuration for the Node.js server
- `express-server/src/views/`: Pug template files for future UI features

### Root Level

- `docker-compose.yml`: Orchestrates both servers with Docker Compose

## 🏃 Getting Started

### Running with Docker Compose (Recommended)

Build and start both servers simultaneously:

```shell
docker compose up
```

This will start:
- **Python FastAPI server** on port `8000`
- **Node.js Express server** on port `8001`

Both servers include hot-reload capabilities for development.

### Running Individually

#### Python Server

```shell
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

#### Node.js Server

```shell
cd express-server
npm install
npm start
```

Or with yarn:

```shell
cd express-server
yarn install
yarn start
```

## 🔌 API Routes

Both servers implement the same API endpoints:

### GET `/`
Returns a simple "Hello World" message.

**Response:**
```
Hello World
```

### POST `/tasks`
Adds a new task to the task list.

**Request Body:**
```json
{
  "text": "Your task description"
}
```

**Response:**
```json
{
  "message": "Task added successfully"
}
```

### GET `/tasks`
Retrieves all tasks in the list.

**Response:**
```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

## 🛠️ Technology Stack

### Python Server
- **FastAPI**: Modern, fast web framework
- **Pydantic**: Data validation using Python type hints
- **Uvicorn**: ASGI server with hot reload

### Node.js Server
- **Express**: Web application framework
- **TypeScript**: Type-safe JavaScript
- **Pug**: Template engine for future UI development
- **ts-node**: TypeScript execution environment
- **nodemon**: Auto-restart on file changes

## 🔄 Migration Details

The Node.js server is a complete migration of the Python FastAPI endpoints with the following enhancements:

- ✅ Full TypeScript support for enhanced type safety
- ✅ Input validation on POST requests
- ✅ Pug template engine for future UI features
- ✅ Modern Node.js (v18) and updated dependencies
- ✅ Hot reload for rapid development
- ✅ Identical API contract for seamless transition

## 🧪 Testing the APIs

You can test the APIs using curl:

```shell
# Test root endpoint (Python)
curl http://localhost:8000/

# Test root endpoint (Node.js)
curl http://localhost:8001/

# Get all tasks (Python)
curl http://localhost:8000/tasks

# Get all tasks (Node.js)
curl http://localhost:8001/tasks

# Add a new task (Python)
curl -X POST http://localhost:8000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Build a flux capacitor"}'

# Add a new task (Node.js)
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Build a flux capacitor"}'
```

## 📝 Development

Both servers support hot-reload during development:

- **Python**: Changes to `.py` files trigger automatic reload
- **Node.js**: Changes to `.ts` and `.pug` files trigger automatic reload

## 🐳 Docker

Each server has its own Dockerfile optimized for its technology stack. The `docker-compose.yml` file orchestrates both services with appropriate port mappings and volume mounts for development.

## 📄 License

MIT
