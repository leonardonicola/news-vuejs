<template>
  <div class="flex flex-col gap-5" v-if="data">
    <img src="https://img.olhardigital.com.br/wp-content/uploads/2023/01/iPhone-14-1024x576.jpg" alt="" class="w-36 h-36"/>
    <BodyArticle v-for="child in data.content.child" :parent="child" />
  </div>
</template>
<script setup lang="ts">
import BodyArticle from '@/components/BodyArticle.vue'
import { ref, onBeforeMount } from 'vue'
const data = ref()

onBeforeMount(async () => data.value = await fetchData())

const fetchData = async () => {
  const result = await fetch(
    'https://crawler-news.onrender.com/https%3A%2F%2Folhardigital.com.br%2F2023%2F02%2F03%2Fpro%2Fqueda-de-vendas-apple-registra-primeiro-prejuizo-de-2023%2F'
  )
  return await result.json()
}
</script>
