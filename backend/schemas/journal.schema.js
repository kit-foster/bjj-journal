const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema({
  username: { type: String, required: true },
  technique: { type: String, required: true },
  rolling: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;