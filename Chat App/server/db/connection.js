const mongoose = require('mongoose');

const url = `mongodb+srv://chat-app:chatapp1234@chat-app.xhkqsat.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))