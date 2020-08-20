import {server} from './server/config'
import './database'

server.start({port: 3400}, ({port}) => {
console.log('Server on port ', port);
});