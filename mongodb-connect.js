const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
        return  console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text:'something to do',
        completed: false
    } , (err, result) =>{
        if(err){
            return console.log('unable to insert todo');
        }
        console.log(JSON.stringify(result.ops , undefined,2)); // first ops contain all records second is filter and 3rd is indentation
    });

    client.close();
});