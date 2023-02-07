<template>
  <div class="flex flex-col gap-5" v-if="data">
    <BodyArticle v-for="child in data.content.child" :parent="child" />
  </div>
</template>
<script setup lang="ts">
import BodyArticle from '@/components/BodyArticle.vue'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const data = ref()
const route = useRoute()

onBeforeMount(async () => (data.value = await fetchData()))

const fetchData = async () => {
  const result = await fetch(
    `https://crawler-news.onrender.com/${encodeURIComponent(
      route.params.url.toString()
    )}`
  )
  return await result.json()
}
</script>
