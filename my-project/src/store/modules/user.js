// import { loginByUsername, logout, getUserInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'

// const user = {
//   state: {
//     isLogin: false,
//     userId: '',
//     user: '',
//     status: '',
//     code: '',
//     token: getToken(),
//     name: '',
//     avatar: '',
//     introduction: '',
//     roles: [],
//     setting: {
//       articlePlatform: []
//     }
//   },

//   mutations: {
//     SET_USERID: (state, userId) => {
//       state.userId = userId
//     },
//     SET_CODE: (state, code) => {
//       state.code = code
//     },
//     SET_TOKEN: (state, token) => {
//       state.token = token
//     },
//     SET_INTRODUCTION: (state, introduction) => {
//       state.introduction = introduction
//     },
//     SET_SETTING: (state, setting) => {
//       state.setting = setting
//     },
//     SET_STATUS: (state, status) => {
//       state.status = status
//     },
//     SET_NAME: (state, name) => {
//       state.name = name
//     },
//     SET_AVATAR: (state, avatar) => {
//       state.avatar = avatar
//     },
//     SET_ROLES: (state, roles) => {
//       state.roles = roles
//     },
//     SET_LOGIN: (state, isLogin) => {
//       state.isLogin = isLogin
//     }
//   },

//   actions: {
//     SetLogin({commit},isLogin){
//       commit('SET_LOGIN',isLogin)
//     },
//     // 用户名登录
//     LoginByUsername({ commit }, userInfo) {
//       userInfo.email = userInfo.email.trim()
//       return new Promise((resolve, reject) => {
//         loginByUsername(userInfo).then(response => {
//           let d = response.data
//           if( d.code-0 == 0 ){
//             commit('SET_USERID', d['data']['uid'])
//             if(d.data['second_auth']==0){
//               commit('SET_LOGIN', true)
//               commit('SET_TOKEN', d['data']['token'])
//               setToken(d['data']['token'])
//               resolve(d)
//             }else{
//               resolve(d)
//             }
            
//           }else{
//             removeToken()
//             reject(d)
//           }
//         }).catch(error => {
//           removeToken()
//           reject(error)
//         })
//       })
//     },
//     LoginTow({commit},userInfo){
//       return new Promise((resolve, reject) => {
//         loginSecondAuth(userInfo).then(res => {
//           if(res.data.code==0){
//             commit('SET_LOGIN', true)
//             commit('SET_TOKEN', res.data['data']['token'])
//             setToken(res.data['data']['token'])
//             resolve(res.data.data)
//           }else{
//             removeToken()
//             reject(res.data)
//           }
//         }).catch(error => {
//           removeToken()
//           reject(error)
//         })
//       })
//     },

//     // 获取用户信息
//     GetUserInfo({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         getUserInfo().then(res => {
//           if(res.data.code==0){
//             const d=res.data.data;
//             d['roles'] = []
//             commit('SET_ROLES', d.roles)
//             commit('SET_NAME', d.email)
//             commit('SET_LOGIN', true)
//             resolve(d)
//           }else{
//             commit('SET_LOGIN', false)
//             removeToken()
//             reject(res.data)  
//           }
//         }).catch(error => {
//           commit('SET_LOGIN', false)
//           removeToken()
//           reject(error)
//         })
//       })
//     },

//     // 第三方验证登录
//     // LoginByThirdparty({ commit, state }, code) {
//     //   return new Promise((resolve, reject) => {
//     //     commit('SET_CODE', code)
//     //     loginByThirdparty(state.status, state.email, state.code).then(response => {
//     //       ('SET_TOKEN', response.data.token)
//     //       setToken(response.data.token)
//     //       resolve()
//     //     }).catch(error => {
//     //       reject(error)
//     //     })
//     //   })
//     // },

//     // 登出
//     LogOut({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         logout(state.token).then(() => {
//           commit('SET_TOKEN', '')
//           commit('SET_ROLES', [])
//           commit('SET_LOGIN', false)
//           removeToken()
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 前端 登出
//     FedLogOut({ commit }) {
//       return new Promise(resolve => {
//         commit('SET_TOKEN', '')
//         removeToken()
//         resolve()
//       })
//     },

//     // 动态修改权限
//     ChangeRoles({ commit }, role) {
//       return new Promise(resolve => {
//         commit('SET_TOKEN', role)
//         setToken(role)
//         getUserInfo(role).then(response => {
//           const data = response.data
//           commit('SET_ROLES', data.roles)
//           commit('SET_NAME', data.name)
//           commit('SET_AVATAR', data.avatar)
//           commit('SET_INTRODUCTION', data.introduction)
//           resolve()
//         })
//       })
//     }
//   }
// }

// export default user
