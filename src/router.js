import { createRouter, createWebHistory } from 'vue-router'
import Portada from './components/Portada.vue'
import Introduccion from './components/Introduccion.vue'
import Investigaciones from './components/Investigaciones.vue'
import Investigaciones2 from './components/Investigaciones2.vue'
import Sumario from './components/Sumario.vue'
import Sumario2 from './components/Sumario2.vue'
import Tareas from './components/Tareas.vue'
import Tareas2 from './components/Tareas2.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Portada },
    { path: '/introduccion', component: Introduccion },
    { path: '/computo1/investigaciones', component: Investigaciones },
    { path: '/computo2/investigaciones2', component: Investigaciones2 },
    { path: '/computo2/sumario2', component: Sumario2 },
    { path: '/computo1/sumario', component: Sumario },
    { path: '/computo1/tareas', component: Tareas },
    { path: '/computo2/tareas2', component: Tareas2 } // nueva ruta para el componente Tareas
  ]
})

export default router
