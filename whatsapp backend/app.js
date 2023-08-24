import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import{webhook_post,webhook_get} from './controllers/webhook.js';



const app = express();


app.use(bodyParser.json());

app.use(cors());


app.use(cors({
  origin: ['*']
}));


app.post("/webhook",webhook_post);
app.get("/webhook",webhook_get);

app.get('/',(req, res) => {
  res.send('Hello World!');
  
});

const port = process.env.PORT || 8000;


const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server listening on port 8000.');
  });