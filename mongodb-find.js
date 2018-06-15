const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
        return  console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    var db = client.db('TodoApp');
    db.collection('Todos').find({
    _id:new ObjectID('5b2322503343053ad88c88c2') 
    }).toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) =>{
        console.log('eror occur');
    });

    client.close();
});