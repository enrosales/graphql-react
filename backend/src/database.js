import mongoose from 'mongoose'
import {database} from './keys'

mongoose.connect(database.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is now connected'))
.catch(err => console.log(err))