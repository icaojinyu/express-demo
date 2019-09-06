### mongoose
```
// 插入多条记录
model.insertMany(数组)

// 查询一张表中的所有记录
model.find()

// 跳过和限制 => 用于分页
model.find().skip(2).limit(3)

// 条件查询
model.find().where({title:'苹果'})

// 排序 1 代表正序，-1 代表降序
model.find().sort({_id: -1})

// 通过id查询记录
model.findById(req.params.id)
```