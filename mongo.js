
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dragonrider01598:Aaron@548@suchislife.usetper.mongodb.net/?retryWrites=true&w=majority&appName=SuchIsLife";

// const watt = 'mongodb+srv://dragonrider01598:Aaron@548@suchislife.usetper.mongodb.net/?retryWrites=true&w=majority&appName=SuchIsLife';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://dragonrider01598:Aaron@548@suchislife.usetper.mongodb.net/?retryWrites=true&w=majority&appName=SuchIsLife";

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to the database");

    const database = client.db("UserData");
    const collection = database.collection("GameData");

    let saveNew = {
      plName: nam,
      hp_s: Math.round(Number(hp.textContent)),
      pot_s: Math.round(Number(pts.textContent)),
      attack_1: atk1,
      attack_2: atk2,
      weapon_1: wpn1.textContent,
      weapon_2: wpn2.textContent,
      level: lvl,
      crown: crowns
   }
    const document = { email: nam, hash: hash, data: saveNew };

    const result = await collection.insertOne(document);

  } catch (e) {
    console.error("Error occurred:", e);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main().catch(console.error);




