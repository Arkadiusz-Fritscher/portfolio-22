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
    <TheFooter />
  </section>
</template>
