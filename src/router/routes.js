/* 
  所有路由配置的数组模块
*/
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News,
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: Detail,
          },
        ]
      },
      {
        path: '',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]