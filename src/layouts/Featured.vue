<template>
  <section class="grid grid-cols-2 gap-10">
    <div>
      <p class="font-bold">{{ props.mainArticle.author }}</p>
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="(article, index) in props.sideArticles"
        :key="article.author"
        class="flex flex-col"
      >
        <div
          class="grid grid-cols-3 h-36 overflow-hidden space-x-5 cursor-pointer"
          @click="$router.push(`/${encodeURIComponent(article.url)}`)"
        >
          <img
            :src="article.urlToImage"
            :alt="article.title"
            class="object-cover w-full h-full"
          />

          <div class="col-span-2">
            <p class="font-thin">há {{ timeSince(article.publishedAt) }}</p>
            <p class="font-bold">
              {{ article.title }}
            </p>
          </div>
        </div>
        <hr v-if="index !== sideArticles.length - 1" class="border-2 mt-4" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article'

const timeSince = (date: string) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  )
  let interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + ` ano${interval === 1 ? '' : 's'}`
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ` m${interval === 1 ? 'ês' : 'eses'}`
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ` dia${interval === 1 ? '' : 's'}`
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ` hora${interval === 1 ? '' : 's'}`
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ` minuto${interval === 1 ? '' : 's'}`
  }
  return Math.floor(seconds) + ' segundos'
}

const props = defineProps<{
  mainArticle: Article
  sideArticles: Article[]
}>()
</script>
