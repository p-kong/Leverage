const Sequelize = require('sequelize')
const db = require('../config/database')

const AuditPurchaseOrder = db.define('auditpurchaseorder', {
  auditid:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  purchaseorderid: {
    type: Sequelize.INTEGER,
  },
  customer: {
    type: Sequelize.STRING,
  },
  vendor: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  },
  quantity: {
    type: Sequelize.FLOAT,
    defaultValue: 1,
  },
  price: {
    type: Sequelize.DECIMAL(10,2)
  },
  total: {
    type: Sequelize.DECIMAL(20,2)
  },
  addby: {
    type: Sequelize.NUMBER,
  },
  notes: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM("Received", "Patrially Received", "Shipped", "Sent to Vendor", "Completed"),
  },
},
{tableName: 'auditpurchaseorder'},
)

AuditPurchaseOrder.removeAttribute('id')

module.exports = AuditPurchaseOrder
