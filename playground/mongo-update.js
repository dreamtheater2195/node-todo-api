const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aa5f4d7b9748b1ec8fa9206')
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(results);
        });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5aa5f678bae69820e1a70040")
    }, {
            $set: {
                name: 'Quan pro'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(results);
        });

    client.close();
});