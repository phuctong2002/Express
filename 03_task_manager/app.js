const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const http = require('http');

const connectDB = require('./db/connect');
const taskRouter = require('./routes/taskRouter');

// create server
const app = express();
const server = http.Server(app);


// static folder
app.use(express.static('./public'));
// middleware parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// config to access to .env variables
dotenv.config();

app.use('/api/v1/tasks', taskRouter);


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        server.listen(process.env.PORT, () => {
            console.log(`Running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

