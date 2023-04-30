const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/faculty_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`conneted to the databases:: mongodb`);
});

module.exports=db;