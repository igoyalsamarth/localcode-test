import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript Node.js server!' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), version: 'v1.0.0' });
});

app.post('/user/:id', (req: Request, res: Response) => {
  res.json({ message: 'User ${id} create successfully!'  });
});

export default app;
