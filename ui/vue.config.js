const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      allowedHosts: "auto",
      host: 'localhost',
      proxy: {
          "^/api": {
              target: "http://localhost:8181",
              changeOrigin: true,
              logLevel: "debug",
              pathRewrite: { "^/api": "" },
          }
      }
  },
})
