// /api/new-meetup
//CSAL A POST TRIGERELI
//POST /api/new-meetup
import { MongoClient } from 'mongodb';
//MongoClient- kapcsolodik ...


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data);



        const client = await MongoClient.connect(
            "mongodb://127.0.0.1:27017/meeups"//local:
            // 'mongodb+srv://somogyitibor:Jelszo123@cluster0.8tpeere.mongodb.net//meetups?retryWrites=true&w=majority'
        );
        // mongodb+srv://FELHASZNÁLÓNÉV:JELSZÓ@cluster0.8tpeere.mongodb.net/ADATBÁZISNÉV?retryWrites=true&w=majority
        //kapcsolódás 
        //csak szerver oldalon használatos
        const db = client.db();
        //minden metodust tudjon a client
        const meetupsCollection = db.collection('meetups');
        //Gyüjtemény =Collection = Táblához hasonló az SQL-ben 
        const result = await meetupsCollection.insertOne(data);
        //https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/

        //autómatikusan lesz id ja

        console.log(result);
        client.close();
        //becsukja a végével az adatbázist
        res.status(201).json({ message: 'Sikeresen elküldve az adat!' });
    }
}

export default handler;

//npm i mongodb

// https://cloud.mongodb.com/v2/646c9fc37df6f832991334b2#/clusters
//mongodb atalsz
// csináljunk egy databaset és Connected/Node.js
//konnected sting oldalról