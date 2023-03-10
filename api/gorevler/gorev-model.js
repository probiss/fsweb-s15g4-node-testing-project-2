const db = require('../../data/db-config');

async function getAll(){
    return await db('Gorevler');
}

async function getById(gorevId){
    return await db('Gorevler').where("GorevId",gorevId).first();
}

async function create(gorev){
    let insertedGorevId = await db('Gorevler').insert(gorev);
    return getById(insertedGorevId);
}
