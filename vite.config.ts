import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api" : {
        target: "http://ec2-3-113-2-184.ap-northeast-1.compute.amazonaws.com",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
