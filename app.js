const express = require('express')
const app = express()


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-test', {useNewUrlParser: true})
// 定义模型
const Product = mongoose.model('Product', new mongoose.Schema({
  title: String
}))

// Product.insertMany([
//   {title: '苹果'},
//   {title: '桃子'},
//   {title: '西瓜'}
// ])

// cors跨域请求
app.use(require('cors')())

// 静态资源访问
app.use(express.static('public'))


app.get('/about', (req, res) => {
  res.send({
    page: 'about'
  })
})

app.get('/products', async (req, res) => {
  // let data = await Product.find()
  // let data = await Product.find().limit(3)
  // let data = await Product.find().skip(2).limit(3)
  // let data = await Product.find().where({
  //   title:'西瓜'
  // })
  let data = await Product.find().sort({_id: -1})

  res.send(data)
})

app.get('/products/:id', async (req, res) => {
  let data = await Product.findById(req.params.id)
  res.send(data)
})

app.listen(3000)
console.log('server is ok')