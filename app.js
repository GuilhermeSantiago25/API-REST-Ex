import express from 'express';
import morgan  from 'morgan';
import {createTable} from './controllers/pedidos.js'

import rotaProdutos from './routes/produtos.js';
import rotaPedidos  from './routes/pedidos.js';


const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
        return res.status(200).send({});
    }
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

createTable();

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem : error.mensage
        }
    });
});


export default app;