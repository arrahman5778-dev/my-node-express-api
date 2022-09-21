const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello mama , kmn aco , aMi valo aci ,, Hello mama  ')
});

const users = [
  { id: 1, name: "äbdul halim", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 2, name: "äbdul karim", job: "manager", email: "abdulhalim@gmail.com" },
  { id: 3, name: "äbdul Khalek", job: "Sells exiqute", email: "abdulhalim@gmail.com" },
  { id: 4, name: "manna", job: "engenieer", email: "abdulhalim@gmail.com" },
  { id: 5, name: "monia", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 6, name: "Khanna", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 7, name: "saida", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 8, name: "fahima ", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 9, name: "Khanna", job: "Developer", email: "abdulhalim@gmail.com" },
  { id: 10, name: "kodos", job: "Developer", email: "abdulhalim@gmail.com" },
]



app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched)
  }
  else {
    res.send(users)
  }

})


app.get('/user/:id', (req, res) => {
  console.log(req.params)
  const id = req.params.id
  const user = users.find(u => u.id == id);
  res.send(user)
})

app.post('/user', (req, res) => {
  console.log(' request', req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user)
  res.send(user)
})

app.listen(port, () => {
  console.log('Listening Port ', port)
})