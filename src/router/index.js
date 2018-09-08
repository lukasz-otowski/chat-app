import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
        path:'/chat',
        name:'chat',
        component:chat,
        //expect to have props passed to the new component
        props:true,
        beforeEnter: (to, from, next) => {
            if(to.params.name){
                next()
            }else{
                next({ name: 'welcome'})
            }
        }
    }
  ]
})
