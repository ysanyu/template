
const state = {
  test: ''
}

const mutations = {
  SET_TEST: (state, test) => {
    state.test = test
  }
}

const actions = {
  setTest({ commit }, test) {
    return new Promise((resolve) => {
      commit('SET_TEST', test)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}

