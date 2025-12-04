import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// 后端服务器地址配置
// const API_SERVER = 'http://81.71.91.63:7000'
const API_SERVER = 'http://localhost:7000'  // 本地测试用

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    host: '0.0.0.0',  // 允许外部访问
    port: 3000,
    proxy: {
      '/api': {
        target: API_SERVER,
        changeOrigin: true,
        secure: false,
        ws: true, // WebSocket支持
      },
      '/health': {
        target: API_SERVER,
        changeOrigin: true,
      },
    },
  },
})
