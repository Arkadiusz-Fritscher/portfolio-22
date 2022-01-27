<template>
  <nav class="fixed top-0 inset-x-0 z-30">
    <div class="wrapper h-16 flex items-center justify-between">
      <a href="#hero">Logo</a>

      <!-- Tablet / Desktop Navigation -->
      <ul class="hidden sm:flex">
        <li>
          <nuxt-link class="nav__link" to="#projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__link" to="#about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__link" to="#contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  --nav-gutter: clamp(0.625rem, 0.424rem + 0.826vw, 1.25rem);
}

.nav__link {
  position: relative;
  padding: var(--nav-gutter);
}

.nav__link::before {
  content: '';
  display: block;
  position: absolute;
  bottom: calc(var(--nav-gutter) - 3px);
  left: calc(var(--nav-gutter) - 1px);
  right: calc(var(--nav-gutter) - 1px);
  height: 0.0625rem;
  transform: scaleX(0);
  transform-origin: right center;
  background-color: currentColor;
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.nav__link:hover::before {
  transform: scaleX(1);
  transition-delay: 0.2s;
  transform-origin: left center;

  /* content: '';
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 0.0625rem;
  transform: scaleX(0);
  transform-origin: left center;
  background-color: currentColor;
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1); */
}

.link--active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: calc(var(--nav-gutter) - 3px);
  left: calc(var(--nav-gutter) - 1px);
  right: calc(var(--nav-gutter) - 1px);
  height: 0.0625rem;
  transform: scaleX(1);
  transform-origin: left center;
  background-color: currentColor;
  transition-delay: 0.2s;
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.link--active:hover::after {
  transform: scaleX(0);
  transform-origin: right center;
}
</style>
