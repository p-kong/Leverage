const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/leverage')

module.exports = db
