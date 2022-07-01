const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    autor: {
        type: Schema.ObjectId,
        ref: "Usuario"
    },
    posteos: [
        {
            post: {
                type: Schema.ObjectId,
                ref: "Aviso"
            }
        }
    ],

});

module.exports = mongoose.model("Post", postSchema);
