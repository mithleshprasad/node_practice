const express = require('express');
const PORT = 3000;
const x=2;
const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello mithlesh is my 1st node express code on github');
// })
app.get('/',(req,res)=>{
    let response = '';
 for(let i = 0; i <= 10; i++){
    if(x==2){
        // let count = i++;
        response += "The number is " + i + "<br>";
    }
}
res.send(response);
})
app.listen(PORT,()=>{
    console.log(`server connected port ${PORT}`)
})