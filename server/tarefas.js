const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tarefasSchema = new Schema({
	_id: String,
	nome: String,
	dia: Number,
	mes: Number,
	sala: Number,
	horarioInicio: String,
	horarioTermino: String,
});

module.exports = mongoose.model("agendamento", tarefasSchema);
