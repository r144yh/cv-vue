<template>
  <section id="skills" class="">
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
import {getHardSkillsDescription, getSoftSkillsDescription} from "@/components/skill/skillsDescription.js";
import SkillCard from "@/components/skill/SkillCard.vue";

const hardSkills = getHardSkillsDescription();
const softSkills = getSoftSkillsDescription();
</script>

<style scoped>

</style>