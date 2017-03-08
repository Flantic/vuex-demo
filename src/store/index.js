import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //放数据的地方,可通过mapState映射
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    //放对数据重复操作的方法的地方,可通过mapGetters映射
    getters: {
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})