<template>
  <header>
    <NavigationSection />
    <WelcomeSection />
  </header>

  <main>
    <AboutSection />
    <SkillSection />
    <WorkSection />
    <EducationSection />
  </main>

  <footer>
    <ContactSection />
  </footer>
</template>

<script setup>
import NavigationSection from "@/components/section/NavigationSection.vue";
import WelcomeSection from "@/components/section/WelcomeSection.vue";
import AboutSection from "@/components/section/AboutSection.vue";
import SkillSection from "@/components/section/SkillSection.vue";
import WorkSection from "@/components/section/WorkSection.vue";
import EducationSection from "@/components/section/EducationSection.vue";
import ContactSection from "@/components/section/ContactSection.vue";
</script>