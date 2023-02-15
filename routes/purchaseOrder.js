const express = require('express')
const router = require('express').Router()
const PurchaseOrder = require('../models/PurchaseOrder')

router.get('/', async (req, res)=> {
  try {
    const purchaseOrders = await PurchaseOrder.findAll()
    res.send(purchaseOrders)
  } catch(error){
    res.send(error)
  }
})

router.post('/new', async (req,res)=> {
  try{
    const order = await PurchaseOrder.create(req.body)
    res.send(order)
  } catch(error){
    res.send(error)
  }
})

router.put('/update/:id', async (req,res)=> {
  try{
    const order = await PurchaseOrder.findByPk(req.params.id)
    await order.update(req.body)
    res.send(order)
  } catch(error){
    res.send(error)
  }
})

module.exports = router
