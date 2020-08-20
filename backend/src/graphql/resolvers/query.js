import Message from '../../models/Message'
const Query = {
 
    pong() {
        return 'ping'
    },
    messages: async () => {
       return await Message.find();
    }
}

export default Query;