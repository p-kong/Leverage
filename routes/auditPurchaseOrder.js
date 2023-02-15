const express = require('express')
const router = require('express').Router()
const AuditPurchaseOrder = require('../models/AuditPurchaseOrder')


router.get('/audit/:id', async (req, res)=> {
  try {
    const auditHistory = await AuditPurchaseOrder.findAll({
      where: {
          purchaseorderid: req.params.id
      }
    })
    res.send(auditHistory)
  } catch(error){
    res.send(error)
  }
})

module.exports = router
