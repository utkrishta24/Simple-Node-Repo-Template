// require('dotenv').config()

import express from "express";

const app = express()
const port = process.env.PORT || 3000;

//bad practice:
// app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// }) 

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is also a joke'
        },
        {
            id:3,
            title:'Another joke, hehe',
            content:'This is a joke again'
        },
        {
            id:4,
            title:'One more joke',
            content:'This is a joke too, laugh now'
        },
        {
            id:5,
            title:'Still a joke',
            content:'This is the same joke, still laughing?'
        }
    ];
    res.send(jokes);
});

app.listen(port,()=>{
        console.log(`Server at http://localhost:${port}`);
    }
);