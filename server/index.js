const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port=5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


  const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017/"

var dbb={};

var cond=false;
MongoClient.connect(connection_string,{useUnifiedTopology:true},(err,client)=>{
    if(err) throw err;
    console.log("connected successfully")
     dbb = client.db("contact");
     
});
var ObjectId = require('mongodb').ObjectID;

app.post("/api/post",(req,res)=>{
    const item=req.body;
    console.log(req.body);
    
    dbb.collection("contacts").insertOne(item,function(err,result){
        if(err) throw err;
        console.log("inserted")
        
    })
})

app.get("/api/get",(req,res)=>{
    dbb.collection("contacts").find({}).toArray(function(err, result) {
        if (err) throw err;
        
        res.send(result);
    
      });
    })

    app.get("/api/get/:id",(req,res)=>{
        const id=req.params.id;
        dbb.collection("contacts").find({"_id": ObjectId(id)}).toArray(function(err,result){
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })

    app.put("/api/update/:id",(req,res)=>{
        const id=req.params.id;
        const first={"_id":ObjectId(id)}
        const second={$set:{name:req.body.name}}
        dbb.collection("contacts").updateMany(first,second,function(err,result){
            if(err) throw err;
            console.log("updated")
        })
        const third={$set:{contact:req.body.contact}}
        dbb.collection("contacts").updateMany(first,third,function(err,result){
            if(err) throw err;
            console.log("updated")
        })
        const fourth={$set:{email:req.body.email}}
        dbb.collection("contacts").updateMany(first,fourth,function(err,result){
            if(err) throw err;
            console.log("updated")
        })
    })


        app.delete("/api/remove/:id",function(req,res){
            const id=req.params.id;
            console.log(id);
            dbb.collection("contacts").deleteOne({"_id":ObjectId(id)},function(err,obj){
                if(err) throw err;
                console.log("removed");

            })

        })

        app.post("/signupdata",function(req,res){
            console.log(req.body);
            dbb.collection("signup").insertOne(req.body,function(err,result){
                if(err) throw err;
                console.log("inserted")
        })
    })

    app.get("/logindata",(req,res)=>{
        dbb.collection("signup").find({}).toArray(function(err,result){
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })
   









app.listen(port,()=>{
    console.log(`server running on 5000`);
    
})