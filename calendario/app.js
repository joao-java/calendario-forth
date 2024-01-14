const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://joao:eP2gAvZ65Po5exMy@lineup.sbovbxd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectToDatabase() {
try {
    await client.connect();
    console.log('Conexão bem-sucedida com o MongoDB Atlas');
    
    // Faça operações no banco de dados aqui, se necessário

} finally {
    // Certifique-se de fechar a conexão quando não precisar mais
    await client.close();
}
}
connectToDatabase();

app.get('/agendamento', async (req, res) => {
try {
    await client.connect();

    const database = client.db('LINEUP');
    const collection = database.collection('agendamento');
    const documents = await collection.find().toArray();

    res.json(documents);
} catch (err) {
    console.log(err);
    res.status(500).send('Erro ao recuperar os dados');
} finally {
    await client.close();
}
});