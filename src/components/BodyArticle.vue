<template>
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
    <BodyArticle v-for="child in props.parent.child" :parent="child" />
  </p>

  <strong v-if="hasChildren() && props.parent.tag === 'strong'">
    <BodyArticle v-for="child in props.parent.child" :parent="child" />
  </strong>

  <ul v-if="hasChildren() && props.parent.tag === 'ul'" class="pl-10">
    <li v-for="child in props.parent.child" class="list-disc">
      <BodyArticle :parent="child" />
    </li>
  </ul>

  <a
    v-if="hasChildren() && props.parent.tag === 'a'"
    :href="props.parent.attr.href"
    target="_blank"
    class="text-blue-600"
  >
    <BodyArticle v-for="child in props.parent.child" :parent="child" />
  </a>

  <object
    v-if="props.parent.tag === 'img'"
    :data="props.parent.attr.src "
    :alt="props.parent.attr.alt.join(' ')"
    class="w-36 h-36"
    ></object>

  <template v-if="hasChildren() && !tags.includes(props.parent.tag)">
    <BodyArticle v-for="child in props.parent.child" :parent="child" />
  </template>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps(['parent'])
onMounted(() =>
  document.querySelectorAll('*:empty').forEach((elem) => elem.remove())
)
const tags = ['a', 'p', 'ul', 'strong', 'img']

const hasChildren = () => {
  return props.parent.child && props.parent.child?.length > 0
}

if (props.parent.tag === 'img') {
  console.log(props.parent)
}
</script>

<style>
span > :has(p) > :has(strong) {
  padding-bottom: 0.8rem;
}
*:is(span) > :is(p, ul) {
  padding-bottom: 1.2rem;
}
</style>
