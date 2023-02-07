<template>
  <div v-if="articles.length > 0">
    
    <Featured :main-article="articles[0]" :side-articles="sideArticles"/>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'
import { fetchData } from '@/utils/Methods'
import Featured from '@/layouts/Featured.vue'
import type { Article } from '@/types/Article';

const articles = ref<Article[]>([])

const sideArticles = computed(() => articles.value.slice(1, 4))

console.log(sideArticles)

onBeforeMount(async () => {
  const articlesResult = await fetchData()
  articles.value = [...articlesResult]
})
</script>
