import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import contentRoutes from './routes/contentRoute';

const app: Application = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');

// Allow parsing of JSON in request body
app.use(express.json());

// Use the content routes
app.use('/api',contentRoutes);

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});
