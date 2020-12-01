const express = require('express');
const router = express.Router();
const {Profissional} = require('../models');

//Listar todos 
router.get('/', async (req, res, next)=>{
    const token = req.headers.authorization;
    if(token=='salao'){
        const profissional = await Profissional.findAll();
        res.status(200).json(profissional);
    }
        res.status(401).send('Token não autorizado');
});

// Cadastrar profissional
router.post('/', async (req, res, next)=>{
    const profissional = await Profissional.create(req.body);
    res.status(201).json(profissional);
});

//Listar por id
router.get('/:id', async (req, res, next)=>{
    const profissional = await Profissional.findAll({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(...profissional);
});

//listar por email
router.get('/email/:email', async (req, res, next)=>{
    const profissional = await Profissional.findAll({
        where:{
            email: req.params.email
        }
    });
    res.status(200).json(...profissional);
});

//Listar por tipo
router.get('/type/:type', async (req, res, next )=>{
    const profissional = await Profissional.findAll({
        where:{
            type: req.params.type
        }
    });
    res.status(200).json(profissional);
});

//Apagar por id
router.delete('/:id', async (req, res, next)=>{
    const profissional = await Profissional.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(204).json(profissional);
});

//Atualizar por id
router.put('/:id', async (req, res, next)=>{
    const profissional = await Profissional.update(req.body, {
        where:{
            id: req.params.id
        }
        
    });
    res.status(204).json(profissional);
});

module.exports = router;