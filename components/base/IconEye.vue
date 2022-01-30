<script>
export default {
  data() {
    return {
      minX: 34,
      maxX: 66,
      minY: 44,
      maxY: 55,
      xPos: 50,
      yPos: 50,
    }
  },

  beforeMount() {
    this.vw = document.documentElement.clientWidth
    this.vh = document.documentElement.clientHeight
  },

  mounted() {
    if (window.matchMedia('(any-hover: hover)').matches) {
      this.closeEyeOnHover()
      this.init()
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.addEventListener('mousemove', this.eyeFollowMouse)
            window.addEventListener('resize', this.onResize)
            document
              .querySelector('.eye__outer')
              .addEventListener('mouseenter', this.closeEyeOnHover)

            document
              .querySelector('.eye__outer')
              .addEventListener('mouseleave', this.openEyeOnLeave)

            document.addEventListener('scroll', this.init)
          } else {
            document.removeEventListener('mousemove', this.eyeFollowMouse)
            window.removeEventListener('resize', this.onResize)
            document.removeEventListener('mouseleave', this.openEyeOnLeave)
            document.removeEventListener('mouseenter', this.closeEyeOnHover)
            document.removeEventListener('scroll', this.init)
            clearTimeout(this.randomEyeClose)
          }
        })
      })

      observer.observe(document.querySelector('#hero'))
    }

    this.randomEyeClose()
  },

  methods: {
    init() {
      const eye = document.querySelector('.eye__inner').getBoundingClientRect()
      this.eyePosX = eye.x
      this.eyePosY = eye.y
    },

    onResize(e) {
      this.vw = e.target.innerWidth
      this.vh = e.target.innerHeight

      this.eyePosX = document
        .querySelector('.eye__inner')
        .getBoundingClientRect().x

      this.eyePosY = document
        .querySelector('.eye__inner')
        .getBoundingClientRect().y
    },

    eyeFollowMouse(event) {
      this.eyeXPercent = this.eyePosX / this.vw
      this.eyeYPercent = this.eyePosY / this.vh
      this.x = Math.round((event.x * 50) / (this.vw * this.eyeXPercent))
      this.y = Math.round((event.y * 50) / (this.vh * this.eyeYPercent))

      if (this.x < this.minX) {
        this.xPos = this.minX
      } else if (this.x > this.maxX) {
        this.xPos = this.maxX
      } else {
        this.xPos = this.x
      }

      if (this.y < this.minY) {
        this.yPos = this.minY
      } else if (this.y > this.maxY) {
        this.yPos = this.maxY
      } else {
        this.yPos = this.y
      }

      document.querySelector('.eye__inner').style.left = this.xPos + '%'
      document.querySelector('.eye__inner').style.top = this.yPos + '%'
    },

    closeEyeOnHover() {
      document.querySelector('.eyelid').classList.add('eyelid--close')
    },

    openEyeOnLeave() {
      document.querySelector('.eyelid').classList.remove('eyelid--close')
    },

    randomEyeClose() {
      const min = 5
      const max = 10
      const rand = Math.floor(Math.random() * (max - min + 1) + min) // Generate Random number between 5 - 10

      document.querySelector('.eyelid').classList.add('eyelid--close')
      setTimeout(() => {
        document.querySelector('.eyelid').classList.remove('eyelid--close')
      }, 200)

      setTimeout(this.randomEyeClose, rand * 1000)
    },
  },
}
</script>

<template>
  <span class="eye__outer">
    <span class="eyelid"></span>
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.7904 1.88146C46.7521 -0.627149 43.2479 -0.627155 42.2097 1.88145L36.4333 15.8382C35.7505 17.488 33.8269 18.1982 32.2584 17.3796L18.9891 10.4543C16.6041 9.20957 13.9197 11.4943 14.714 14.093L19.1334 28.5508C19.6558 30.2598 18.6323 32.058 16.912 32.4536L2.35866 35.8003C-0.25718 36.4018 -0.865684 39.9023 1.38957 41.3751L13.9368 49.5689C15.42 50.5374 15.7755 52.5823 14.7083 54.007L5.68056 66.0597C4.0579 68.226 5.80999 71.3043 8.4709 70.962L23.275 69.0579C25.025 68.8328 26.5931 70.1675 26.6784 71.9547L27.4005 87.0738C27.5303 89.7913 30.8231 91.007 32.6446 89.0099L42.7786 77.8988C43.9765 76.5853 46.0235 76.5853 47.2214 77.8988L57.3554 89.0099C59.1769 91.007 62.4698 89.7913 62.5995 87.0738L63.3216 71.9547C63.4069 70.1675 64.975 68.8328 66.725 69.0579L81.5291 70.962C84.19 71.3043 85.9421 68.226 84.3195 66.0597L75.2917 54.007C74.2245 52.5823 74.58 50.5374 76.0632 49.5689L88.6104 41.3751C90.8657 39.9023 90.2572 36.4018 87.6414 35.8003L73.088 32.4536C71.3677 32.058 70.3442 30.2598 70.8666 28.5508L75.286 14.093C76.0803 11.4944 73.3959 9.20957 71.0109 10.4543L57.7416 17.3796C56.1731 18.1982 54.2495 17.488 53.5667 15.8382L47.7904 1.88146ZM30.638 36.1417C35.1329 34.0679 40.0379 32.9952 45.003 33C49.9672 32.9956 54.8712 34.0686 59.365 36.1424C63.8588 38.2162 67.8316 41.2397 71 44.997C67.8328 48.7561 63.8603 51.7811 59.3664 53.856C54.8724 55.9309 49.9678 57.0045 45.003 57C40.0372 57.0053 35.1315 55.9322 30.6364 53.8573C26.1413 51.7824 22.1679 48.7569 19 44.997C22.1693 41.2392 26.1431 38.2155 30.638 36.1417Z"
        fill="currentColor"
      />
    </svg>

    <span ref="eye" class="eye__inner"></span>
  </span>
</template>

<style scoped>
.eye__outer {
  display: block;
  position: relative;
  width: var(--eye-size);
}

.eye__outer > svg {
  height: 100%;
  width: 100%;
}

.eye__inner {
  border: 2px solid currentColor;
  border-width: min(0.06em, 3px);
  border-radius: 50%;
  height: 32%;
  width: 32%;
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: -2;
}

.eyelid {
  position: absolute;
  /* transform: translateX(-50%); */
  width: 58%;
  height: 30%;
  top: 34%;
  left: 50%;
  border-radius: 0 0 50% 50%;
  background-color: currentColor;
  z-index: -1;
  transform: translateX(-50%) scaleY(0);
  transform-origin: center top;
  transition: transform 0.2s cubic-bezier(0.08, 0.82, 0.61, 0.96);
}

.eyelid--close {
  transform: translateX(-50%) scaleY(1) scaleX(1.02);
}

.eye__inner::after,
.eye__inner::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.eye__inner::after {
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  background-color: currentColor;
  clip-path: circle(34% at 50% 50%);
}

.eye__inner::before {
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: var(--af-color-chefs-hat);
  clip-path: circle(14% at 36% 32%);
}
</style>
