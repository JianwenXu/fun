const express = require('express');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('sequelize', 'root', 'mysql123456');

// 新建了一个 user 表
var Users = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

// // 往表里面插入数据
// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // 用户用 firstName, 数据库里面是 first_name
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // 表名默认是 model 名加s 变成复数形式，设置为 true 不变复数
});

// User.sync({force: true}).then(function () { // force: true 先删表再建表
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// var Project = sequelize.define('project', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// })

// var Task = sequelize.define('task', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   deadline: Sequelize.DATE
// })

// var Foo = sequelize.define('foo', {
//  // defaultValue 默认为 true
//  flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
//  // 默认时间为当前时间
//  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },

//  // 设置 allowNull 为 false 会为这一列添加 NOT NULL,也就是说当执行查询且这一列是 null的时候，数据库会抛出一个错误
//  // 如果你想在查询之前检查值是否为 null,查看下一个检验章节
//  title: { type: Sequelize.STRING, allowNull: false},

//  // 创建两个具有相同值的对象将引发错误。 unique属性可以是布尔值或字符串。 
//  // 如果为多个列提供相同的字符串，则它们将形成一个复合唯一键。 ??
//  someUnique: {type: Sequelize.STRING, unique: true},
//  uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex'},
//  uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex'},

//  // 惟一属性只是创建惟一索引的简写。
//  someUnique: {type: Sequelize.STRING, unique: true},
//  // 这与在模型的选项中创建索引完全相同。
//  // {someUnique: {type: Sequelize.STRING}},
//  // {indexes: [{unique: true, fields: ['someUnique']}]},

//  // 主键
//  identifier: { type: Sequelize.STRING, primaryKey: true},

//  // 自增
//  incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },

//  // 注释
//  hasComment: { type: Sequelize.INTEGER, comment: "I'm a comment!" },

//  // 自定义 field 名称
//  fieldWithUnderscores: { type: Sequelize.STRING, field: "field_with_underscores" },

//  // 外键
//  bar_id: {
//    type: Sequelize.INTEGER,

//    references: {
//      // 指向另一个 model
//      model: Project,

//      // 指向的列名
//      key: 'id',

//      // 声明什么时候去检查外键约束（PostgreSQL）
//      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//    }
//  }
// })

const app = express();

app.get('/', function (req, res) {
  User.findOne({
    where: {id: 1},
    attributes: ['id', ['lastName', 'ln']], // 返回的数据， 第一个是字段名，第二个是 as 名
    // include: [
    //  { model: Users, required: true}
  // ],
  }).then(function(user) {
    res.send(user)
  })
})
 
app.listen(9000)