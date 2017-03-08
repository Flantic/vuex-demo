export default {
    state: {
        moduleAdata: 'this is moduleA data'
    },
    getters: {
        dataMosaic: state => {
            return state.moduleAdata + '这是getters拼接的内容'
        }
    },
    mutations: {

    },
    actions: {

    }
}