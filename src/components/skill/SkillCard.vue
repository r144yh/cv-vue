<template>
  <section class="">
    <p class="">
      {{ props.skillDescription }}
    </p>
  </section>
</template>

<script setup>
const props = defineProps({skillDescription: String})
</script>

<style scoped>

</style>