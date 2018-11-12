import Cookies from 'js-cookie'

const exchange = {
  state: {
    coinCurrency: {},      // 法币价格
    stateQuery:{},
    available:''
  },
  mutations: {
    SET_CoinCurrency: (state, coinCurrency) => {
      state.coinCurrency = coinCurrency
    },
    SET_StateQuery: (state, stateQuery) => {
      state.stateQuery = stateQuery
    },
    SET_Available: (state, available) => {
      state.available = available
    }
  },
  actions: {
    setCoinCurrency({ commit }, coinCurrency) {
      commit('SET_CoinCurrency', coinCurrency)
    },
    setStateQuery({ commit }, stateQuery) {
      commit('SET_StateQuery', stateQuery)
    },
    setAvailable({ commit }, available) {
      commit('SET_Available', available)
    }
  }
}

export default exchange
