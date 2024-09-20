const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRouter = require('./Routes/Route.js');  // Adjust the path if necessary
const { connected, isConnected } = require('./db.js');
const port = 3000;
const {UserModel, AssistanceModel, LawyerModel,RepresentationModel } = require('./Model/model.js');

const bcrypt = require("bcrypt");  // Corrected the import
const cors = require("cors");
const app = express();
const jwt =require('jsonwebtoken')

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

app.post('/login',async(req,res)=>{
    const data=req.body 
    try{
        const user = await userModel.findOne({name:data.name})
        if (!user){
            return res.send("User not found! Please create a account!")
        
        }
        const hashPasswordMatch=await bcrypt.compare(data.password,user.password)
        if (hashPasswordMatch){
            const token =jwt.sign(
                {id:user.id,name:user.name},
                process.env.jwtsecret
            )
            res.json({
                token:token,message:"You logged in successfully",
                id:user._id,
            })
        }
        else{
            res.status(401).send("Incorrect Password!!")
        }
        
    }catch(error){
        console.error(error)
    }

})
// Fetch legal assistance data
app.get('/api/legalassistance', async (req, res) => {
    const data = req.body
    try {
        const assistanceData = await AssistanceModel.find();
        res.send(assistanceData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching legal assistance data.");
    }
});

// Fetch lawyer data
app.get('/api/lawyers', async (req, res) => {
    const data=req.body 
    try {
        const lawyersData = await LawyerModel.find(); 
        res.send(lawyersData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching lawyer data.");
    }
});

app.get('/api/legalrepresentation', async (req, res) => {
    const data=req.body
    try {

        const representationData = await RepresentationModel.find();
        res.send(representationData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching legal representation data.");
    }
});

// app.get('/api/legalconsultation', async (req, res) => {
//     const data=req.body
//     try {
//         const consultationData = await ConsultationModel.find();
//         res.send(consultationData);
//     } catch (error) {
//         console.error("Error fetching legal consultation data:", error);
//         res.status(500).send("Error fetching legal consultation data.");
//     }
// });


if (require.main === module) {
    connected();
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
