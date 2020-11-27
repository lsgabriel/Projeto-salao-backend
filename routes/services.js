const express = require('express');
const router = express.Router();
const {Services} = require('../models');

//Listar todos os serviços
router.get('/', async (req, res, next)=>{
    const token = req.headers.authorization;
    if(token=='salao'){
        const services = await Services.findAll();
        res.status(200).json(services);
    }
        res.status(401).send('Token não autorizado');
});

// Cadastrar serviço
router.post('/', async (req, res, next)=>{
    const service = await Services.create(req.body);
    res.status(201).json(service);
});

//Listar serviço por id
router.get('/:id', async (req, res, next)=>{
    const service = await Services.findAll({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(...service);
});

//Listar por tipo
router.get('/type/:type', async (req, res, next )=>{
    const service = await Services.findAll({
        where:{
            type: req.params.type
        }
    });
    res.status(200).json(service);
});

//Apagar serviço por id
router.delete('/:id', async (req, res, next)=>{
    const service = await Services.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(204).json(service);
});

//Atualizar por id
router.put('/:id', async (req, res, next)=>{
    const service = await Services.update(req.body, {
        where:{
            id: req.params.id
        }
        
    });
    res.status(204).json(service);
});

module.exports = router;