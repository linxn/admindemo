import { login, getInfo, logout } from '@/api/login'
import { setToken, getToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登陆
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          console.log('modules\\user.js login data: ')
          console.log(data)
          if (data.code === 20000) {
            commit('SET_TOKEN', data.data.token)
            console.log('modules\\user.js state.token: ')
            console.log('modules\\user.js login response: ')
            console.log(response)
            setToken(data.data.token)
            resolve(data) // 成功回调
          } else {
            reject(data.code)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        console.log('modules\\user.js start set roles')
        console.log('modules\\user.js state.token: ' + state.token)
        getInfo(state.token).then(response => {
          const data = response.data.data
          console.log('modules\\user.js roles data')
          console.log(data)
          if (data.roles && data.roles.length > 0) {
            commit('SET_ROLES', data.roles)
            console.log('modules\\user.js had set roles: ' + state.roles)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          console.log('modules\\user.js get roles reject: ' + error)
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
