
let mongoose = require('mongoose')
let mongoURI = require('./config.json')

mongoose.connect(mongoURI.mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

var db = mongoose.connection;

if(!db) {
    console.log('Error connection db')
}else{
    console.log('DB connected Successfully')
}