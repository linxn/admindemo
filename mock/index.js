const Mock = require('mockjs')
import userAPI from './user'
// 例子
Mock.mock('/user/userInfo','get',require('./json/userInfo'));

//user
Mock.mock(/\/user\/login/, 'post', userAPI.login)

export default Mock
