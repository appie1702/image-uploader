const mongoose = require('mongoose');


const imageSchema = mongoose.Schema({
    title: {type: String, required:true},
    desc: {type: String},
    pic: { 
        type: String,
        required:true,
        },
    viewcount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },    
    },
    { timestamps:true,}
)

const Image = mongoose.model("Image", imageSchema)
module.exports = Image