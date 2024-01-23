import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const navigator = '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'

const browser = process.env.BROWSER = navigator

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@models': path.resolve(__dirname, './src/models'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  },
  server: {
    open: browser,
  }
})
