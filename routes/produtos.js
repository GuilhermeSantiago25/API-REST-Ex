import express from 'express';
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req,res,next) => {
    res.status(200).send({
        message: 'Usando o GET dentro da rota de produtos'
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({

        message: 'Usando o GET de um produto exclusivo',
        id: id
    });
});

// ADICIONA UM PRODUTO
router.post('/', (req,res,next) => {
    res.status(201).send ({
        mensagem: 'Usando o POST  dentro da rota de produtos'
    });
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota produtos'
    });
});

//DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota produtos'
    })
})


export default router;