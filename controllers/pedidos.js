import {openDb} from '../configDB.js';

export async function createTable(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Pedidos (id INTEGER PRIMARY KEY AUTOINCREMENT, numeroPedido INTEGER)')
    });
}

export async function selectPedido(){
    return openDb().then(db =>{
        return db.all('SELECT * FROM Pedidos')
        .then(res=>res)
    });
}

export async function selectPedidoId(pedidos){
    return openDb().then(db =>{
        return db.get('SELECT * FROM Pedidos WHERE id =?', [pedidos.id])
        .then(res=>res)
    });
}

export async function insertPedido(pedidos){
    openDb().then(db =>{
        db.run('INSERT INTO Pedidos (numeroPedido) VALUES (?)', [pedidos.numeroPedido])
    });
}

export async function updatePedido(pedidos){
    openDb().then(db =>{
        db.run('UPDATE Peditos SET numeroPedido=? WHERE id=?', [pedidos.numeroPedido,pedidos.id])
    })
}