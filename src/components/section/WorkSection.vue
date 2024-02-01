<template>
  <h3><strong>Work</strong> Experience</h3>
  <section>
    <WorkCard :work-descriptions="currentWork"/>
    <div>
      <IconTS />
      <IconVue />
      <IconReact />
      <IconWebpack />
      <IconJest />
      <IconSass />
      <IconFigma />
      <IconBootstrap />
    </div>
  </section>
  <section>
    <WorkCard :work-descriptions="secondWork"/>
    <IconTS/>
    <IconJs />
    <IconVue />
    <IconNode />
    <IconBootstrap />
    <IconSass />
  </section>
  <section>
    <WorkCard :work-descriptions="firstWork"/>
    <IconHtml />
    <IconCss />
    <IconJs />
    <IconVue />
    <IconBootstrap />
  </section>
</template>

<script setup>
import {
	getCurrentWorkDescription,
	getFirstWorkDescription,
	getSecondWorkDescription
} from "@/components/work/workDescription.js";
import WorkCard from "@/components/work/WorkCard.vue";
import IconTS from "@/components/icons/IconTs.vue";
import IconJs from "@/components/icons/IconJs.vue";
import IconVue from "@/components/icons/IconVue.vue";
import IconReact from "@/components/icons/IconReact.vue";
import IconWebpack from "@/components/icons/IconWebpack.vue";
import IconJest from "@/components/icons/IconJest.vue";
import IconSass from "@/components/icons/IconSass.vue";
import IconFigma from "@/components/icons/IconFigma.vue";
import IconNode from "@/components/icons/IconNode.vue";
import IconBootstrap from "@/components/icons/IconBootstrap.vue";
import IconHtml from "@/components/icons/IconHtml.vue";
import IconCss from "@/components/icons/IconCss.vue";

const firstWork = getFirstWorkDescription();
const secondWork = getSecondWorkDescription();
const currentWork = getCurrentWorkDescription();
</script>

<style scoped>

</style>