const { mongoose } = require('../db');
const { Schema } = mongoose;

const taskSchema = new Schema ({
    title: String,
    status: { type: String, enum: ["todo", "in_progress", "done"], default: "todo"},
    owner: String
}, { timestamps: true});

module.exports = mongoose.model('Task', taskSchema);

