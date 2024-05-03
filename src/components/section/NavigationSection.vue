<template>
  <nav aria-label="CV navigation" class="navigation">
    <div>
      <a href="#" class="logo">[ ]</a>
    </div>

    <ul class="nav-section">
      <li>
        <a href="#about" class="nav">About me</a>
      </li>
      
      <li>
        <a href="#skills" class="nav">Skills</a>
      </li>
      
      <li>
        <a href="#work" class="nav">Work Experience</a>
      </li>

      <li>
        <a href="#education" class="nav">Education</a>
      </li>

      <li>
        <a href="#contacts" class="nav">Contacts</a>
      </li>
    </ul>

    <div>
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </div>
<!--    <div>
      <a href="" download="FrontDev_SalovaNatalia_CV.pdf">Download CV</a>
    </div>-->
  </nav>
  <!--todo mobile-->
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/styles/components/navigation';
</style>