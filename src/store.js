import { createStore } from "vuex";
import useGetUsers from './composables/useGetUsers';

const store = createStore({
    state() {
        return {
            activeProfile: null,
            fetchError: null,
            searchStatus: 'waiting',
            searchTokens: [],
            userList: null,
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
        },
        setFetchError(state, errorCode) {
            state.fetchError = errorCode
        },
        setSearchStatus(state, status) {
            state.searchStatus = status
        }
    },
    actions: {
        setActiveProfile(store, userId) {
            this.commit('setActiveProfile', userId)
        },
        setSearchTokens(store, tokens) {
            if (!tokens.length) {
                this.commit('setSearchStatus', 'waiting')
            }

            this.commit('setSearchTokens', tokens)
        },
        removeActiveProfile(store) {
            this.commit('removeActiveProfile')
        },
        removeUserList() {
            this.commit('setSearchStatus', 'waiting')
            this.commit('setUserList', null)
        },
        async getUserList(store) {
            this.commit('setSearchStatus', 'searching')

            const [userList, errorCode] = await useGetUsers(this.state.searchTokens)

            if (errorCode) {
                this.commit('setFetchError', errorCode)
            } else {
                this.commit('setUserList', userList)
            }

            this.commit('setSearchStatus', 'finished')
        }
    }
})

export default store