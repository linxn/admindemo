const Mock = require('mockjs')
import userAPI from './user'
// 例子
Mock.mock('/user/userInfo','get',require('./json/userInfo'));

//user
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/getInfo/, 'get', userAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)

export default Mock
