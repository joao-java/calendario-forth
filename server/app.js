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


app.post('/agendamentos', (req, res) => {
    // Verifique se todos os campos necessários estão presentes no corpo da solicitação
    const { name, dia, mes, sala, horaInicio, horaTermino } = req.body;

    if (!name || !dia || !mes || !sala || !horaInicio || !horaTermino) {
        return res.status(400).send({ error: 'Todos os campos são necessários.' });
    }

    const p = new Tarefas({
        name,
        dia,
        mes,
        sala,
        horaInicio,
        horaTermino
    });

    p.save()
        .then(result => {
            console.log('Agendamento salvo com sucesso:', result);
            res.status(201).send(result);  // Retorne o status 201 para criação bem-sucedida
        })
        .catch(err => {
            console.error('Erro ao salvar agendamento:', err);
            res.status(500).send({ error: 'Erro ao salvar agendamento' });
        });
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});