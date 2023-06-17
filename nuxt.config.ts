// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  devServer: {
    port: 4000,
  },
  sourcemap: {
    client: true,
    server: true,
  },
  telemetry: false ,

})
