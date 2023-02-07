<template>
  <img
    v-if="props.parent.tag === 'img'"
    :src="props.parent.attr.src"
    :alt="
      Array.isArray(props.parent.attr.alt) && props.parent.attr.alt.join(' ')
    "
    class="w-96 h-96 object-cover mx-auto"
  />

  <span
    v-if="
      props.parent.node === 'text' &&
      props.parent.text.toLowerCase() !== 'publicidade' &&
      !props.parent.text.match(/[\t\n]/g)
    "
  >
    {{ props.parent.text }}
  </span>

  <p v-if="hasChildren() && props.parent.tag === 'p'">
    <BodyArticle
      v-for="child in props.parent.child"
      :parent="child"
      :key="child"
    />
  </p>

  <strong v-if="hasChildren() && props.parent.tag === 'strong'">
    <BodyArticle
      v-for="child in props.parent.child"
      :parent="child"
      :key="child"
    />
  </strong>

  <ul v-if="hasChildren() && props.parent.tag === 'ul'" class="pl-10">
    <li v-for="child in props.parent.child" :key="child" class="list-disc">
      <BodyArticle :parent="child" />
    </li>
  </ul>

  <a
    v-if="hasChildren() && props.parent.tag === 'a'"
    :href="props.parent.attr.href"
    target="_blank"
    class="text-blue-600"
  >
    <BodyArticle
      v-for="child in props.parent.child"
      :parent="child"
      :key="child"
    />
  </a>

  <template v-if="hasChildren() && !tags.includes(props.parent.tag)">
    <BodyArticle
      v-for="child in props.parent.child"
      :parent="child"
      :key="child"
    />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps(['parent'])
const tags = ['a', 'p', 'ul', 'strong', 'img']

const hasChildren = () => {
  return props.parent.child && props.parent.child?.length > 0
}

onMounted(() =>
  document
    .querySelectorAll('*:empty :not(img)')
    .forEach((elem) => elem.remove())
)
</script>

<style>
span > :has(p) > :has(strong) {
  padding-bottom: 0.8rem;
}
*:is(span) > :is(p, ul) {
  padding-bottom: 1.2rem;
}
img + * {
  text-align: center;
}

* {
  text-align: justify;
}
</style>
