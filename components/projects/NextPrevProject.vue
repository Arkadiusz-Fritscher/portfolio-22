<template>
  <div class="project__browse wrapper flex items-center justify-between">
    <div>
      <BaseProjectBrowsButton
        v-if="prevProject"
        left
        text="Previews Project"
        :url="prevProject.path"
        :subtitle="prevProject.title"
      />

      <BaseProjectBrowsButton
        v-else
        left
        text="Back"
        url="/#projects"
        subtitle="Back to start"
      />
    </div>

    <div>
      <BaseProjectBrowsButton
        v-if="nextProject"
        text="Next Project"
        :url="nextProject.path"
        :subtitle="nextProject.title"
      />

      <BaseProjectBrowsButton v-else text="End" url="/#projects" />
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
    $route() {
      this.$fetch();
    }
  }
};
</script>

<style scoped>
.project__browse {
  padding-top: var(--af-space-3-y);
  padding-bottom: var(--af-space-3-y);
}
a {
  padding: 1rem 0.25rem;
}
</style>
