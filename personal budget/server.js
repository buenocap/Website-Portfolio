import express from 'express';
import bodyParser from 'body-parser';

import envelopeRoutes from './routes/envelopes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/envelopes', envelopeRoutes);

app.get('/', (req,res) => {res.send('Hello from Homepage.')});

app.listen(PORT, () => {
    console.log(`Server Running on: http://localhost:${PORT}`);
});