// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  aos: {
    // Global settings:
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 100,
    duration: 400,
    easing: "ease-out-sine",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  alias: {
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/firebase.js',
  ],
  

  modules: ["nuxt-aos", "@pinia/nuxt"],
});
