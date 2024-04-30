import apiRouter from './routes/index.js';
// Importing necessary libraries and configuring dotenv
import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';
config(); // This ensures that environment variables are loaded at the very beginning


const port = process.env.PORT || 9000; // Defaulting to port 9000 if PORT is not specified in the environment
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors({ origin: '*' })); // Enabling CORS for all domains
app.use('/api', apiRouter); // Mounting the API routes

// Route for the root of the API
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello World",
    });
});

// Catch-all route for handling 404 errors
app.all("*", (req, res) => {
    res.status(404).send("Sorry, the route you are going to does not exist");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Starting the server
app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});

export default app;