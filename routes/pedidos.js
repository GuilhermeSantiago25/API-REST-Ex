import express from 'express';
import {insertPedido,updatePedido,selectPedido,selectPedidoId} from '../controllers/pedidos.js'
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/pedidos', async (req,res,next) => {
    let pedidos = await selectPedido();
    res.status(200).json({
        pedidos
    });
});

//RETONA OS DADOS DE UM PEDIDO
router.get('/pedido', async (req,res,next) => {
    let pedidos = await selectPedidoId();
    res.status(200).json({
        pedidos
    });
});

//RETORNA OS DADOS DE UM PEDIDO POR PARAMETRO 
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos;
    res.status(200).send({

        message: 'Usando o GET de um pedidos exclusivo',
        id: id
    });
});

// ADICIONA UM PEDIDO
router.post('/pedidos', (req,res,next) => {
    insertPedido(req.body);
});

//ALTERA UM PEDIDO
router.put('/pedidos', (req, res, next) => {
    if(req.body && !req.body.id){
        res.status(400).json({
            erro: {
                mensagem: error.mensagem
            }
        });
    }
    updatePedido(req.body);
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota pedidos'
    });
});

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota produtos'
    });
});


export default router;