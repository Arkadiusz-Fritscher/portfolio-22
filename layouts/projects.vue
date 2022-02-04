<script>
import CustomCursor from '@/mixins/CustomCursor';
export default {
  mixins: [CustomCursor]
};
</script>

<template>
  <section class="relative">
    <div class="cursor"></div>
    <Nuxt />
    <ProjectsNextPrevProject />
    <TheFooter />
  </section>
</template>
