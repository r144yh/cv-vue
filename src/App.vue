<template>
  <header>
    <NavigationSection />
    <WelcomeSection />
  </header>

  <main>
    <AboutSection />
    <SkillSection />
  </main>
</template>

<script setup>

import NavigationSection from "@/components/section/NavigationSection.vue";
import WelcomeSection from "@/components/section/WelcomeSection.vue";
import AboutSection from "@/components/section/AboutSection.vue";
import SkillSection from "@/components/section/SkillSection.vue";
</script>