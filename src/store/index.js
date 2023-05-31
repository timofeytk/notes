import { createStore } from 'vuex'

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: 'timur', admin: true },
      { id: 2, name: 'nina', admin: true },
      { id: 3, name: 'alex', admin: false }
    ]
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }) {
      setTimeout(() => {
        const fakeUser = {
          id: 231341,
          name: 'vovan',
          admin: false
        }
        commit('setUser', fakeUser)
      }, 1000)
    }
  },
  getters: {
    getUser(state) {
      return state.user
    },
    isUserLogged(state) {
      return state.user ? true : false
    },
    getAllUsers(state) {
      return state.users
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin)
    },
    getUserById: state => id => state.users.find(user => user.id == id),
    getUsersCount(state, getters) {
      const suffix = 'Кол-во пользователей:'
      return `${suffix} ${getters.getAllUsers.length}`
    }
  }
})
