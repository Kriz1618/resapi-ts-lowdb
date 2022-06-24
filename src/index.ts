import app from "./app";
import { createConnection } from './db';

app.listen(app.get('port'));

// Initialize db connection
createConnection();

console.log('Running on port 3001' );