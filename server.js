const express = require('express');
const path = require('path');
app = express();

app.use(express.static('build'));

app.get('/',(req,res)=>{
    app.send('mwonuse')
})

app.listen(process.env.PORT || 3000,()=>console.log("server running"))