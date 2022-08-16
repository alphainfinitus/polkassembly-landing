import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/polkassembly-landing/', //TODO: REMOVE FOR PA BUILD
  plugins: [react()]
})
