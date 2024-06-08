const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const Tarefas = require('./tarefas.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
'mongodb+srv://joao:eP2gAvZ65Po5exMy@lineup.sbovbxd.mongodb.net/LINEUP?retryWrites=true&w=majority'
).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

var myLogger = function (req, res, next) {
    console.log(req.body);
    next();
}
app.use(myLogger);

app.get('/agendamentos', async (req, res) => {
try {
    const tarefas = await Tarefas.find().lean().exec();
    res.status(200).send(tarefas);
} catch (err) {
    res.status(500).send(err);
}
});

app.get('/agendamentoserr', function (req, res) {
    setTimeout(
        () => {
            res.status(500).send({
                msg: "Error message from the server"
            });
        }, 2000);
});

app.post('/agendamentos', async (req, res) => {
try {
    const p = new Tarefa({
    name: req.body.name,
    dia: req.body.dia,
    mes: req.body.mes,
    sala: req.body.sala,
    horarioInicio: req.body.horarioInicio,
    horarioTermino: req.body.horarioTermino
    });
    const tarefaSalva = await p.save();
    res.status(200).send(tarefaSalva);
} catch (err) {
    res.status(500).send(err);
}
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});