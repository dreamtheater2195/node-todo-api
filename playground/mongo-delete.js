const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    });
    //deleteOne
    db.collection('Todos').deleteOne({ text: 'Another todo' }).then((result) => {
        console.log(result);
    });

    //findOne and Delete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    })

    //delete many with name
    db.collection('Users').deleteMany({ name: 'Andrew' });

    //findOne and delete with specific ObjectID
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5aa5f7c8ff95482293489645")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    client.close();
});