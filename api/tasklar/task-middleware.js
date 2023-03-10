const taskModel = require('./task-model');
const gorevModel = require('../gorevler/gorev-model');

const checkTaskFields = async function(req,res,next){
    try {
        let {Adi,GorevId} = req.body;
        if(!Adi){
            next({
                status:400,
                message:"Eksik alan var"
            })
        }
    } catch (error) {
        next(error);
    }
}

const checkGorevId = async function(req,res,next){
    try {
        let {GorevId} = req.body;
        if(typeof GorevId === undefined){
            next({
                status:400,
                message:"Eksik alan var"
            })
        }else{
            let isExistGorev = await gorevModel.getById(GorevId);
            if(!isExistGorev){
                next({
                    status:404,
                    message:"Görev Yok"
                })
            }else{
                req.Gorev = isExistGorev;
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {checkTaskFields,checkGorevId}