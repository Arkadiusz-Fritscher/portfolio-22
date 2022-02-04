<template>
  <div class="wrapper flex items-center justify-between">
    <div>
      <nuxt-link v-if="prevProject" :to="prevProject.path">{{
        prevProject.title
      }}</nuxt-link>
      <nuxt-link v-else to="/">Back to Start</nuxt-link>
    </div>

    <div>
      <nuxt-link v-if="nextProject" :to="nextProject.path">{{
        nextProject.title
      }}</nuxt-link>
      <nuxt-link v-else to="/">Back to Start</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: Array
    };
  },

  async fetch() {
    this.projects = await this.$content()
      .only(['title', 'path'])
      .surround(this.$route.path)
      .fetch();
  },

  //   fetchOnServer: false,

  computed: {
    nextProject() {
      return this.projects[1] ? this.projects[1] : false;
    },
    prevProject() {
      return this.projects[0] ? this.projects[0] : false;
    }
  },

  watch: {
    $route(to, from) {
      this.$fetch();
      console.log(this.projects);
    }
  }
};
</script>

<style scoped></style>
