const mongoose = require('mongoose');
//mongoose.connect(`mongodb://localhost/${process.env.MONGO_COLLECTION}` || "development", {useNewURLParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb+srv://rizwan:rizwan123@cluster0.em5bh.mongodb.net/scrapHub_db?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose online")
         });

        