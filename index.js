import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000;

app.get('/' , (req, res) =>{
   res.send("This is our Home page")
})
const users = [
   {id:1 , name: 'mohim' , email: 'mohim@email.com'},
   {id:2 , name: 'manha' , email: 'manha@email.com'},
   {id:3 , name: 'khadija' , email: 'khadija@email.com'},
   {id:4 , name: 'mahira' , email: 'mahira@email.com'},
   {id:5 , name: 'Inaya' , email: 'inaya@email.com'},
]
app.get('/users' , (req,res)=>{
   res.send(users)
})
app.listen(PORT, ()=>{
   console.log('port is runnig')
})