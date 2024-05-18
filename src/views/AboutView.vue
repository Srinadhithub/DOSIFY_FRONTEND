<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ datastore.name }}</h2>
    <VBtn color="success">text</VBtn>
  </div>
</template>
<script setup>
import { useDataStore } from '@/stores/dataStore'
const datastore = useDataStore()
</script>