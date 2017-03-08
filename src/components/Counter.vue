<template>
    <span>
        <div>{{ count }}</div>
        <div>{{doneTodos}}</div>
    </span>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
    mounted(){
        console.log(this)
    },
    name:'counter',
    data(){
        return{
            data:22222
        }
    },
    methods:{

    },
    //mapState里的所有方法都接收一个state对象作为参数
    //mapState可以接收一个数组,计算属性与state子节点同名时可用 ['count']
    computed: {
        localComputed () { /* ... */ },
        //使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            count:(state) => state.count,
            //别名
            countAlias: 'count',
            //需要调用组件本身作用域不能为箭头函数
            countPlusLocalState (state) {
                return state.count + this.localCount
            }
        }),
        //都同名的时候,直接数组传名字
        //如果你想将一个 getter 属性另取一个名字，使用对象形式：
        //mapGetters({
        //    映射 this.doneCount 为 store.getters.doneTodosCount
        //    doneCount: 'doneTodosCount'
        //})
        ...mapGetters([
            'doneTodos'
        // ...
        ])
    }
    
}
</script>

<style>
</style>