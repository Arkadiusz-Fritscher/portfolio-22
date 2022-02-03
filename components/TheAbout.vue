<script>
export default {
  data() {
    return {
      memes: {
        plumber: require('@/assets/memes/plumber.webp'),
        selfTaught: require('@/assets/memes/tired.gif'),
        toddler: require('@/assets/memes/toddlers.gif')
      }
    };
  },

  mounted() {
    this.memeElements();
  },

  methods: {
    memeElements() {
      const memeElements = document.querySelectorAll('.easteregg');

      memeElements.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
          const meme = e.target.dataset.meme;
          const memeElement = document.querySelector('.meme');

          memeElement.style.backgroundImage = `url(${this.memes[meme]})`;

          element.addEventListener('mousemove', (event) => {
            this.x = event.pageX;
            this.y = event.pageY;

            memeElement.style.top = this.y - 10 + 'px';
            memeElement.style.left = this.x + 10 + 'px';
            memeElement.style.display = 'block';
          });

          element.addEventListener('mouseleave', () => {
            memeElement.style.display = 'none';
          });
        });
      });
    },

    displayMemes() {}
  }
};
</script>

<template>
  <section id="about" class="wrapper">
    <span class="meme"></span>
    <div
      class="about--content flex flex-col tablet:ml-auto tablet:w-11/12 tablet:flex-row tablet:flex-wrap"
    >
      <div class="space--right about--text about--text tablet:order-2">
        <p class="max-w-prose text-base text-grey-heather">
          Hallo, mein name ist Arkadiusz Fritscher, ich bin ein Self taght
          Frontent Entwickler aus der Nähne von Mainz. Neben meinem Hauptberuf
          als
          <span class="easteregg" data-meme="plumber">Anlagenmechaniker</span>,
          Ehemann und Vater von
          <span class="easteregg" data-meme="toddler"
            >zwei kleinen Jungs habe</span
          >
          ich mir in meiner
          <span class="easteregg" data-meme="selfTaught"
            >Freizeit das Programmieren im Selbststudium beigebracht</span
          >
          und tue dies weiterhin täglich. Mein Ziel ist es fest als Frontend
          Entwickler an spannenden Projekten zu arbeiten, neue dinge zu lernen
          und das Leben von Menschen durch Digitalisierung ein wenig angenehmer
          zu machen.
        </p>
      </div>

      <div
        class="space--left my-10 ml-auto flex w-5/6 tablet:order-1 tablet:my-0"
      >
        <span class="star">
          <svg
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.486 11.8624C10.2314 10.0435 9.7223 7.96758 8.95861 5.63464C8.58656 4.52748 8.40053 3.66746 8.40053 3.05457C8.40053 2.06603 8.6453 1.31475 9.13485 0.800712C9.62439 0.266904 10.1531 0 10.721 0C11.3476 0 11.935 0.257019 12.4833 0.771056C13.0316 1.28509 13.3057 2.03638 13.3057 3.02491C13.3057 3.61803 13.0218 4.72519 12.4539 6.34638C11.8469 8.04666 11.4749 9.88533 11.3378 11.8624C12.5714 11.0123 13.8736 9.77659 15.2443 8.1554C17.0067 6.07948 18.4949 5.04152 19.7089 5.04152C20.3356 5.04152 20.8741 5.24911 21.3244 5.66429C21.7748 6.05971 22 6.6034 22 7.29537C22 8.28391 21.6279 9.03519 20.8838 9.54923C20.1593 10.0633 19.004 10.4686 17.4179 10.7651C15.3814 11.1605 13.5113 11.7734 11.8077 12.6038C12.8064 13.1376 14.2652 13.5824 16.1842 13.9383C18.632 14.393 20.2083 14.9565 20.9132 15.6287C21.6377 16.2811 22 17.0225 22 17.8529C22 18.4065 21.7846 18.9008 21.3538 19.3357C20.923 19.7509 20.3845 19.9585 19.7383 19.9585C18.4459 19.9585 16.9479 18.9996 15.2443 17.0818C13.5995 15.2432 12.2973 13.9976 11.3378 13.3452C11.4944 15.4211 11.9644 17.4674 12.7477 19.484C13.1589 20.5516 13.3645 21.3721 13.3645 21.9454C13.3645 22.8351 13.1197 23.5666 12.6302 24.14C12.1602 24.7133 11.5923 25 10.9266 25C10.3195 25 9.75167 24.7331 9.22296 24.1993C8.71384 23.6655 8.45928 22.9241 8.45928 21.9751C8.45928 21.4215 8.66489 20.5714 9.0761 19.4247C9.83979 17.2104 10.3097 15.1839 10.486 13.3452C9.05652 14.2546 7.56831 15.6979 6.02136 17.675C4.8073 19.2171 3.62261 19.9881 2.46729 19.9881C1.78193 19.9881 1.19448 19.7904 0.70494 19.395C0.23498 18.9996 0 18.446 0 17.7343C0 15.8956 1.59591 14.7193 4.78772 14.2052C7.39208 13.7703 9.16422 13.2365 10.1041 12.6038C8.32221 11.7141 6.52069 11.1111 4.6996 10.7948C1.62528 10.2412 0.0881175 9.0945 0.0881175 7.35469C0.0881175 6.72202 0.323097 6.18822 0.793057 5.75326C1.2826 5.31831 1.83089 5.10083 2.43792 5.10083C3.59324 5.10083 4.90521 5.96085 6.37383 7.6809C6.98086 8.39264 7.54873 9.00554 8.07744 9.51957L10.486 11.8624Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p class="subtitle">Offen für Jobangebote</p>
      </div>

      <div class="link--wrapper space--right tablet:order-3 tablet:ml-auto">
        <BaseLinkButton text="Contact me" url="/" />
      </div>
    </div>

    <div class="about--portrait"></div>
  </section>
</template>

<style scoped>
#about {
  padding-bottom: var(--af-space-3-y);
}

.link--wrapper {
  flex: 0 0 70%;
}

.about--content {
  margin-bottom: var(--af-space-4-y);
}

.about--portrait {
  height: 60vh;
  width: 100%;
  background-color: yellowgreen;
  background-image: url('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

@media screen(tablet) {
  .about--text {
    padding-bottom: var(--af-space-1-y);
  }
}

@media (pointer: fine) {
  .easteregg {
    text-decoration: underline;
  }

  .easteregg:hover {
    cursor: help;
  }

  .meme {
    height: 200px;
    aspect-ratio: 16 / 9;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    z-index: 30;
    transform-origin: bottom left;
    display: none;
    transform: translateY(-100%);
  }
}
</style>
