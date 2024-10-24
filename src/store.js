import { createStore } from "vuex";
import useGetUsers from './composables/useGetUsers';

const store = createStore({
    state() {
        return {
            activeProfile: null,
            // userList: null,
            searchTokens: [],
            userList: null
        }
    },
    mutations: {
        setActiveProfile(state, userId) {
            const user = state.userList.find(user => user.id === userId)
            state.activeProfile = user
        },
        setSearchTokens(state, tokens) {
            state.searchTokens = tokens
        },
        removeActiveProfile(state) {
            state.activeProfile = null
        },
        setUserList(state, userList) {
            state.userList = userList
        }
    },
    actions: {
        setActiveProfile(store, userId) {
            this.commit('setActiveProfile', userId)
        },
        setSearchTokens(store, tokens) {
            this.commit('setSearchTokens', tokens)
        },
        removeActiveProfile(store) {
            this.commit('removeActiveProfile')
        },
        removeUserList() {
            this.commit('setUserList', null)
        },
        async getUserList(store) {
            const userList = await useGetUsers(this.state.searchTokens)
            this.commit('setUserList', userList)
        }
    }
})

export default store