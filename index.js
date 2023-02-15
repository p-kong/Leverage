const express = require('express')
const cors = require('cors')
const PORT = 5000

const db = require('./config/database')
const app = express()

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


try{
  db.authenticate()
  console.log('Database connection has been established successfully.')
} catch (error){
  console.lerr('Unable to connect to database:', error )
}



app.get('/', (req, res)=> {
  res.send('SERVER UP')
})


//ROUTES
app.use('/purchaseOrder', require ('./routes/purchaseOrder'))
app.use('/auditPurchaseOrder', require ('./routes/auditPurchaseOrder'))

app.listen(PORT, () => {
  console.log(`Server up on PORT ${PORT}`)
})
