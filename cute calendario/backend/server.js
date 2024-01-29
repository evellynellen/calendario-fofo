const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const users = [
    {id: 1, name: "Chopper", email: "chopper@email.com", password: '1234', events: []},
    {id: 2, name: "Killua", email: "killua@email.com", password: 'gon', events: []}
];

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    res.send(users.find(user => user.id == req.params.id));
});

// login and register
app.post('/api/users', (req, res) => {
    // login
    if (req.body.name == undefined) {
        console.log('login');
        const u = users.find((user) => user.email == req.body.email && user.password == req.body.password);
        if (u) {
            console.log('user logged in');
            res.json(u);
        }
        else res.status(400).json({err: 'Wrong credencials :('});
    }
    // register
    else {
        const u = users.find(user => user.email == req.body.email);
        if (u) {
            res.status(400).json({err: 'Email already registered'}) 
        }
        else {
            const newUser = {
                id: users.length + 1,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                events: []
            };
            users.push(newUser);
            console.log(newUser);
            res.json(newUser);
        }        
    }
});

// return users events
app.get('/api/users/:id/events', (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    res.json(user.events);
});

// create new event
app.post('/api/users/:id/events', (req, res) => {
    const user = users.find(user => user.id == req.params.id);    
    const event = {
        id: user.events.length,
        description: req.body.description,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end,
    };
    user.events.push(event);
    res.json(user.events);
});

// edit event
app.put('/api/users/:userID/events/:eventID', (req, res) => {
    const user = users.find(user => user.id == req.params.userID); 
    const event = user.events.find(event => event.id == req.params.eventID);
    event.description = req.body.description;
    event.date = req.body.date;
    event.start = req.body.start;
    event.end = req.body.end;
    
    res.json(user.events);
})

// delete event
app.delete('/api/users/:userID/events/:eventID', (req, res) => {
    const user = users.find(user => user.id == req.params.userID); 
    const event = user.events.filter(event => event.id != req.params.eventID);

    res.json(event); 
});

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));