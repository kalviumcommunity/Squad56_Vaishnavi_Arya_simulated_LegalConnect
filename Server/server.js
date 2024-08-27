const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRouter = require('./Routes/Route.js');  // Adjust the path if necessary
const { connected, isConnected } = require('./db.js');
const port = 3000;
const { userModel } = require('./Model/model.js');  
const bcrypt = require("bcrypt");  // Corrected the import
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());  

app.get('/', (req, res) => {
    try {
        res.json({
            database: isConnected() ? 'connected' : 'disconnected'
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/signup', async (req, res) => {  // Changed 'router' to 'app'
    const data = req.body;
    try {
        const emailVerify = await userModel.findOne({ email: data.email });
        if (emailVerify) {
            return res.status(400).send("User already exists");
        } else {
            const saltrounds = 10;
            const hashPassword = await bcrypt.hash(data.password, saltrounds);

            const newUser = new userModel({
                name: data.name,
                email: data.email,
                password: hashPassword  // Corrected: use hashed password
            });

            await newUser.save();
            res.status(201).send("Congrats! You signed up successfully");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during signup.");
    }
});

if (require.main === module) {
    connected();
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
