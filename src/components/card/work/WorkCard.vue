<template>
  <section>
    <time>{{ props.workDescriptions.periodOfWork }}</time>
    <h4><a :href="props.workDescriptions.companyLink">{{ props.workDescriptions.companyName }}</a></h4>
    <h5>{{ props.workDescriptions.position }}</h5>
    <p>{{ props.workDescriptions.experienceDescription }}</p>
  </section>
  <WorkProgressBar />
</template>

<script setup>
import WorkProgressBar from "@/components/card/work/WorkProgressBar.vue";

const props = defineProps({workDescriptions: Object});
</script>

<style scoped>

</style>