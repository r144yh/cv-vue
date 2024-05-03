<template>
  <header>
    <NavigationSection />
  </header>

  <main>
<!--    <WelcomeSection />-->
<!--    <AboutSection />
    <SkillSection />
    <WorkSection />
    <EducationSection />-->
  </main>

<!--  <footer>
    <ContactSection />
    <p>&copy; {{ copyPasteText.toUpperCase() }}</p>
  </footer>-->
</template>

<script setup>
import NavigationSection from "@/components/section/NavigationSection.vue";
import WelcomeSection from "@/components/section/WelcomeSection.vue";
import AboutSection from "@/components/section/AboutSection.vue";
import SkillSection from "@/components/section/SkillSection.vue";
import WorkSection from "@/components/section/WorkSection.vue";
import EducationSection from "@/components/section/EducationSection.vue";
import ContactSection from "@/components/section/ContactSection.vue";

const copyPasteText = `${new Date().getFullYear()} Frontend Developer - Natalia Salova` //todo i18n
</script>

<style scoped>

header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
}

</style>