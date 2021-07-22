import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';

const URL = 'mongodb+srv://lekanto:H4vgVnlOjaCrUcSH@cluster0.bh9d5.mongodb.net/trofi?retryWrites=true&w=majority';
const __dirname = path.resolve();

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
const app = express();

const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig));


const router = express.Router();
app.use('/', router);
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PlaceSchema = mongoose.Schema({
    name: String,
    loc_door: String,
    category: String,
    score: Number,
    visitor: Number,
    lat: Number,
    lng: Number,
    menu: Array
  });
const PlaceModel = mongoose.model("trofi", PlaceSchema);
const msgCollection = db.collection("trofi")

db.once("open", () => {
    console.log("Connected to the place database.")

    const changeStream = msgCollection.watch()

    changeStream.on("change", (change) => {
        if (change.operationType === "insert") {
            const placeDocument = change.fullDocument
            const newPlace = {
                name: placeDocument.name,
                loc_door: placeDocument.loc_door,
                category: placeDocument.category,
                score: placeDocument.score,
                visitor: placeDocument.visitor,
                lat: placeDocument.lat,
                lng: placeDocument.lng,
                menu: placeDocument.menu
            }
        } else {
            console.log("Error")
        }
    })
})

router.get('/api/name/:name', (req, res) => {
    console.log(req.params.name)
    msgCollection.findOne({
        "name": req.params.name
    }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

router.post("/new", (req, res) => {
    const newPlace = req.body
    PlaceModel.create(newPlace, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
})

router.get("/reset", (req, res) => {
    PlaceModel.deleteMany({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
    })
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const server = app.listen(30000, () => {
    console.log('Trofi server has been started.');
});