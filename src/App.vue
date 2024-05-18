<template>
  <div id="main-page">
    <div class="d-flex justify-start justify-space-between mt-0 border" id="nav">
      <div class="justify-start ml-2">
        <div class="text-white font-weight-bold text-h5 text-center mb-0">
          <span>DOSIFY</span>
          <VIcon icon="mdi-needle" color="yellow"></VIcon>
        </div>
        <p class="text-caption mt-0 text-success font-weight-medium">Towards vaccinated India</p>
      </div>
      <!-- <div class="text-center"> -->
      <v-list-item v-for="item in navItems" :key="item" class="ml-5 mr-5 mt-1 nav-item"
        @click="router.push({ name: item.route })" height="40">{{ item.name }}</v-list-item>
      <!-- </div> -->

    </div>
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import router from '@/router';
const navItems = [
  {
    name: 'Certificates',
    route: 'certificates'
  },
  {
    name: 'Add doctor',
    route: 'adddoctor'
  },
  {
    name: 'Add Vaccination Centre',
    route: 'addcentre'
  },
  {
    name: 'Book Appointment',
    route: 'appointment'
  },
  {
    name: 'Register/sign in',
    route: 'register'
  }
]
console.log(router.currentRoute)
</script>
<style scoped>
#nav {
  background-color: #017E7E;
  /* border-radius: 20px;/ */
  padding: 3px;
  font-weight: 500;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
}

.nav-item:hover {
  color: #c8bf40
}
</style>
