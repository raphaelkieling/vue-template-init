import Menu from '@/shared/menu';


// initial state
const state = {
    applicationTitle: 'Egsys Template',
    menu: Menu,
    loading: {
        active: false,
        message: 'Carregando'
    }
}

const getters = {}
const actions = {}
const mutations = {
    loading(state, { active, message = 'Carregando' }) {
        state.loading.active = active;
        state.loading.message = message;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}