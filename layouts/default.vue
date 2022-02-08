<script>
import CustomCursor from '@/mixins/CustomCursor';
export default {
  mixins: [CustomCursor],

  data() {
    return {
      activeClassName:
        this.$router.options.linkExactActiveClass || 'nuxt-link-exact-active',
      currentIndex: 0
    };
  },

  mounted() {
    this.setRealVH();

    this.setActiveNavLink();
  },

  methods: {
    setRealVH() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    },

    setActiveNavLink() {
      const hashLinks = Array.from(
        document.querySelectorAll('[data-element="nav__menu"]  a')
      ).filter((link) => link.hash);

      const hashSections = hashLinks.map((link) =>
        document.querySelectorAll(link.hash)
      );

      hashSections.forEach((section, i) =>
        this.createObserver(hashLinks, i, section[0])
      );
    },

    createObserver(links, i, section) {
      const observe = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            console.log(entry.target);

            if (entry.isIntersecting) {
              links[i].classList.add(this.activeClassName);
            } else {
              links[i].classList.remove(this.activeClassName);
            }
          });
        },
        {
          rootMargin: '-50% 0px 0px 0px'
        }
      );
      observe.observe(section);
    }
  }
};
</script>

<template>
  <section class="relative">
    <div class="cursor"></div>
    <TheNavbar />
    <Nuxt />
    <TheFooter />
  </section>
</template>

<style></style>
