const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tarefasSchema = new Schema({
	name: String,
	dia: Number,
	mes: Number,
	sala: Number,
	horaInicio: String,
	horaTermino: String,
});

module.exports = mongoose.model("agendamento", tarefasSchema);
