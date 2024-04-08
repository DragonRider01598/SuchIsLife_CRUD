const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://dragonrider01598:<password>@suchislife.3w35d9p.mongodb.net/?retryWrites=true&w=majority&appName=SuchIsLife';
const client = new MongoClient(uri);

app.use(bodyParser.json());
app.use(cors());

async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1); // Exit the application if unable to connect to MongoDB
    }
}

connectToDB();

app.post('/putData', async (req, res) => {
    console.log('Request Body:', req.body);

    const { email, hash, data } = req.body;

    try {
        // Check if a document with the same email and hash exists
        const existingDocument = await client.db('UserData').collection('GameData').findOne({ email: email, hash: hash });

        if (existingDocument) {
            // If document exists, update it
            const result = await client.db('UserData').collection('GameData').findOneAndUpdate(
                { email: email, hash: hash },
                { $set: { data: data } },
                { returnDocument: 'after' }
            );
            // res.json(result.value);
        } else {
            // If document doesn't exist, insert a new one
            const result = await client.db('UserData').collection('GameData').insertOne({
                email: email,
                hash: hash,
                data: data
            });
            // res.json(result.ops[0]);
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/retrieveData', async (req, res) => {
    const { email, hash } = req.body;
    try {
        const doc = await client.db('UserData').collection('GameData').findOne({ email: email, hash: hash });
        
        console.log(doc)
        if (doc) {
            res.json(doc);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
