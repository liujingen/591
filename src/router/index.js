import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/list'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'list',
		component: list,
		meta: {
		  keepAlive: true // 需要被缓存
		}      
    },
    {
		path: '/detail/:houseId',
		name: 'detail',
		component: detail
    },    
  ]
})
