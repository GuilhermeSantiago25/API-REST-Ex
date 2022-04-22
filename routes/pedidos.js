const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req,res,next) => {
    res.status(200).send({
        message: 'Usando o GET dentro da rota de pedidos'
    });
});

//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos;
    res.status(200).send({

        message: 'Usando o GET de um pedidos exclusivo',
        id: id
    });
});

// ADICIONA UM PEDIDO
router.post('/', (req,res,next) => {
    res.status(201).send ({
        mensagem: 'Usando o POST  dentro da rota de pedidos'
    });
});

//ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota pedidos'
    });
});

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota produtos'
    })
})


module.exports = router;