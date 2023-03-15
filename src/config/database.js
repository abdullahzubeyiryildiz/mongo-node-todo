const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log(error);
});