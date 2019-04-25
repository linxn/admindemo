const Mock = require('mockjs');
// 例子
Mock.mock('/user/userInfo','get',require('./json/userInfo'));
