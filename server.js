const express = require('express');
const path = require('path');
app = express();
app.use( express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    app.send('index.html')
})

app.run(process.env.PORT || 3000);
