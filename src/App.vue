<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Portada</router-link>
        </li>
        <li>
          <router-link to="/introduccion">Introducción</router-link>
        </li>
        <li :class="{ 'submenu-visible': showComputo1 }" @click="toggleComputo1" tabindex="0" class="nav__computo1">
          Computo 1
          <ul>
            <li>
              <router-link to="/computo1/sumario">Sumario de contenidos</router-link>
            </li>
            <li>
              <router-link to="/computo1/tareas">Tareas ex-aulas</router-link>
            </li>
            <li :class="{ 'submenu-visible': showInvestigaciones }" @click="toggleInvestigaciones" tabindex="0" class="nav__investigaciones submenu-visible">
              Investigaciones
              <ul>
                <li>
                  <router-link to="/computo1/investigaciones">Investigaciones</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li :class="{ 'submenu-visible': showComputo2 }" @click="toggleComputo2" tabindex="0" class="nav__computo2">
  Computo 2
          <ul>
            <li>
               <router-link :to="{path: '/computo2/sumario2'}">Sumario de contenidos</router-link>
            </li>
            <li>
              <router-link :to="{path: '/computo2/tareas2'}">Tareas ex-aulas</router-link>
            </li>
            <li :class="{ 'submenu-visible': showInvestigaciones }" @click="toggleInvestigaciones" tabindex="0" class="nav__investigaciones submenu-visible">
      Investigaciones
            <ul>
              <li>
                <router-link :to="{path: '/computo2/investigaciones2'}">Investigaciones</router-link>
              </li>
            </ul>
          </li>
        </ul>
        </li>
        <li :class="{ 'submenu-visible': showComputo2 }" @click="toggleComputo2" tabindex="0" class="nav__computo2">
  Computo 3
          <ul>
            <li>
               <router-link :to="{path: '/computo3/sumario3'}">Sumario de contenidos</router-link>
            </li>
            <li>
              <router-link :to="{path: '/computo3/tareas3'}">Tareas ex-aulas</router-link>
            </li>
            <li :class="{ 'submenu-visible': showInvestigaciones }" @click="toggleInvestigaciones" tabindex="0" class="nav__investigaciones submenu-visible">
      Investigaciones
            <ul>
              <li>
                <router-link :to="{path: '/computo3/investigaciones3'}">Investigaciones</router-link>
              </li>
            </ul>
          </li>
          <li :class="{ 'submenu-visible': showComputo2 }" @click="toggleComputo2" tabindex="0" class="nav__computo3"></li>
    
  </ul>
</li>


      </ul>      
    </nav>

    <router-view></router-view>
  </div>
</template>


<script setup>
import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Portada from './components/Portada.vue'
import Introduccion from './components/Introduccion.vue'
import Sumario from './components/Sumario.vue'
import Tareas from './components/Tareas.vue'
import Investigaciones from './components/Investigaciones.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Portada },
    { path: '/introduccion', component: Introduccion },
    {
      path: '/computo1',
      component: {
        template: '<router-view></router-view>'
      },
      children: [
        { path: 'sumario', component: Sumario },
        { path: 'tareas', component: Tareas },
        { path: 'investigaciones', component: Investigaciones }
      ]
    },
    {
      path: '/computo2',
      component: {
        template: '<router-view></router-view>'
      },
      children: [
        { path: 'sumario', component: Sumario },
        { path: 'tareas', component: Tareas },
        { path: 'investigaciones', component: Investigaciones }
      ]
    }
  ]
})

const data = {
  showComputo1: false,
  showInvestigaciones: false,
  showComputo2: false
}

const methods = {
  toggleComputo1() {
    this.showComputo1 = !this.showComputo1
  },
  toggleInvestigaciones() {
    this.showInvestigaciones = !this.showInvestigaciones
  },
  toggleComputo2() {
    this.showComputo2 = !this.showComputo2
  }
}
</script>

<style scoped>
nav {
  background-color: #4c228f;
  color: #fff;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}

nav li {
  margin-right: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 1rem;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #4c228f;
}

nav li:hover > ul,
.nav__computo1:focus > ul,
.nav__computo2:focus > ul,
.nav .submenu-visible > ul {
  display: inherit;
}

nav ul ul li {
  display: block;
  width: 100%;
  margin: 0;
  text-align: left;
}

nav ul ul a {
  padding: 0.5rem 1rem;
}

.content {
  margin-top: 50px;
}

.nav__computo1 > ul,
.nav__computo2 > ul,
.nav__investigaciones > ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #4c228f;
}

.nav__computo1:hover > ul,
.nav__computo2:hover > ul {
  display: block;
}

nav .submenu-visible > ul {
  display: block;
}

nav ul ul {
  display: none;
}
</style>
