<template>
  <section class="">
    <p class="" v-for="item in props.responsibilityItems">
      {{ item }}
    </p>
  </section>
</template>

<script setup>
const props = defineProps({responsibilityItems: Array})
</script>

<style scoped>

</style>