<template>
  <aside class="--vh fixed hidden tablet:block top-0">
    <ul class="flex gap-x-1 float-right pb-6">
      <li>
        <a class="link--hover" href="mailto:fritscher.dev@gmail.com">email</a>
      </li>
      <li>
        <a href="http://linkedin.com">linkedin</a>
      </li>
      <li>
        <a href="https://github.com/Arkadiusz-Fritscher">github</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  writing-mode: vertical-rl;
  right: calc(var(--external-gutter) / 2);
}

ul a {
  padding: 1rem 0.5rem;
  font-size: var(--af-text-caption);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--af-color-grey-heather);
}

.link--hover::before {
  /* top: 0; */
  left: 0;
  right: 0;
}
</style>
