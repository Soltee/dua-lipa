import Home from './pages/Home.vue'
import Videos from './pages/Videos.vue'
import News from './pages/News.vue'
import Musics from './pages/Musics.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/musics',
      name: 'musics',
      component: Musics
    }
  ];
export default routes;