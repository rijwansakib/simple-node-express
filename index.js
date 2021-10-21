const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');
// const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello NODE!')
})

const users=[
    {
        id:0,
        name:'sakib',
        email:'sakib@gmail.com'
    },
    {
        id:1,
        name:'seyad',
        email:'seyad@gmail.com'
    },
    {
        id:2,
        name:'kutub',
        email:'kutub@gmail.com'
    },
    {
        id:3,
        name:'lali',
        email:'lali@gmail.com'
    },
    {
        id:4,
        name:'sourav',
        email:'sourav@gmail.com'
    },
    {
        id:5,
        name:'nahin',
        email:'nahin@gmail.com'
    },
    {
        id:6,
        name:'sakib',
        email:'sakib@gmail.com'
    },
    {
        id:7,
        name:'ddr',
        email:'ddr@gmail.com'
    },
    {
        id:8,
        name:'alif',
        email:'alif@gmail.com'
    },
    {
        id:9,
        name:'mami',
        email:'mami@gmail.com'
    },
]
app.get('/users',(req,res)=>{
    const search=req.query.search
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users)
    }
   
});
//app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id= users.length;
    users.push(newUser)
    console.log('heting the post',req.body)
    res.send(JSON.stringify(newUser));
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})

app.get('/fruits/mangoes/lara',(req,res)=>{
    res.send('yes working')
});

app.get('/fruits',(req,res)=>{
    res.send(['mango','orange','kola','kadal'])
});

app.listen(port, () => {
    console.log('listening to port',port);
})