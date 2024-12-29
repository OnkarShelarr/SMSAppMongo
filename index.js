const express = require('express');   
const cors = require('cors');
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/ss", (req, res) => {
    const url = "mongodb+srv://shelaronkaros:iz4vsMnBEyav66DK@cluster0.2o1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("sms29dec24");
    const coll = db.collection("student");
    const doc = {"_id":req.body.rno, "name":req.body.name, "marks":req.body.marks};
    coll.insertOne(doc)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

app.get("/gs", (req, res) => {
    const url = "mongodb+srv://shelaronkaros:iz4vsMnBEyav66DK@cluster0.2o1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("sms29dec24");
    const coll = db.collection("student");
    coll.find().toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error));
});


app.put("/us", (req, res) => {
    const url = "mongodb+srv://shelaronkaros:iz4vsMnBEyav66DK@cluster0.2o1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("sms29dec24");
    const coll = db.collection("student");
    const filter = {"_id": req.body.rno};
    const doc = {"name": req.body.name, "marks": req.body.marks };
    coll.findOneAndUpdate(filter, {$set: doc})
    .then(result => res.send(result))
    .catch(error => res.send(error));
});


app.delete("/ds", (req, res) => {
    const url = "mongodb+srv://shelaronkaros:iz4vsMnBEyav66DK@cluster0.2o1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("sms29dec24");
    const coll = db.collection("student");
    const doc = {"_id":req.body.rno};
    coll.deleteOne(doc)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});


app.listen(9000, () => { console.log("Ready to Serve @ 9000"); });