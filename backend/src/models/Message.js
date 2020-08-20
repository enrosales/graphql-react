import {Schema, model} from 'mongoose'

const messagesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

export default model('Message', messagesSchema);