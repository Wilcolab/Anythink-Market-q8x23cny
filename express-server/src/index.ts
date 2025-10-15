import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 8001;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Task interface
interface Task {
  text: string;
}

// In-memory task storage with initial data
let tasks: string[] = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// POST /tasks - Add a new task
app.post('/tasks', (req: Request, res: Response) => {
  const task: Task = req.body;
  if (!task.text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  tasks.push(task.text);
  res.json({ message: 'Task added successfully' });
});

// GET /tasks - Get all tasks
app.get('/tasks', (req: Request, res: Response) => {
  res.json({ tasks });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server with TypeScript and Pug running on port ${PORT}`);
});
