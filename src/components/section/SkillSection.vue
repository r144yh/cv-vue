<template>
  <section class="" id="skills">
    <section class="">
      <h3><span>Hard</span>skills</h3>
      <div v-for="skill in hardSkills" class="">
        <SkillCard :skill-description="skill" />
      </div>
    </section>
    <section class="">
      <h3><span>Soft</span>skills</h3>
      <div v-for="skill in softSkills" class="">
        <SkillCard :skill-description="skill" />
      </div>
    </section>
  </section>
</template>

<script setup>
import {getHardSkillsDescription, getSoftSkillsDescription} from "@/components/card/skill/skillsDescription.js";
import SkillCard from "@/components/card/skill/SkillCard.vue";

const hardSkills = getHardSkillsDescription();
const softSkills = getSoftSkillsDescription();
</script>

<style scoped>

</style>