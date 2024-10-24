import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            activeProfile: null,
            // userList: null,
            searchTokens: [],
            userList: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: "Bret",
                    email: 'Sincere@april.biz',
                    phone: '1-770-736-8031 x56442',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: 'Shanna@melissa.tv',
                    phone: '010-692-6593 x09125',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                    username: "Samantha",
                    email: "Nathan@yesenia.net",
                    phone: '1-463-123-4447',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 4,
                    name: "Patricia Lebsack",
                    username: "Karianne",
                    email: 'Julianne.OConner@kory.org',
                    phone: '493-170-9623 x156',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 5,
                    name: "Patricia Lebsack",
                    username: "Kariana",
                    email: 'Julianne.OConner@kory.org',
                    phone: '493-170-9623 x156',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 6,
                    name: "Patricia Lebsack",
                    username: "Kariand",
                    email: 'Julianne.OConner@kory.org',
                    phone: '493-170-9623 x156',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
            ]
        }
    },
    mutations: {
        setActiveProfile(state, userId) {
            const user = state.userList.find(user => user.id === userId)

            state.activeProfile = user
        },
        setSearchTokens(state, tokens) {
            state.searchTokens = tokens
        }
    },
    actions: {
        setActiveProfile(state, userId) {
            this.commit('setActiveProfile', userId)
        },
        setSearchTokens(state, tokens) {
            this.commit('setSearchTokens', tokens)
        }
    }
})

export default store