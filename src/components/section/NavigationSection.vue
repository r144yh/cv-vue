<template>
  <nav aria-label="CV navigation" class="navigation">
    <ul class="nav-section">
      <li>
        <a href="#" class="logo"></a>
      </li>
      
      <li>
        <a href="#about">About me</a>
      </li>
      
      <li>
        <a href="#skills">Skills</a>
      </li>
      
      <li>
        <a href="#work">Work Experience</a>
      </li>

      <li>
        <a href="#education">Education</a>
      </li>

      <li>
        <a href="#contacts">Contacts</a>
      </li>
    </ul>

    <div>
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </div>
    <div>
      <a href="" download="FrontDev_SalovaNatalia_CV.pdf">Download CV</a>
    </div>
  </nav>
  <!--todo mobile-->
</template>

<script setup>

</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
}

.nav-section {
  display: flex;
}
</style>