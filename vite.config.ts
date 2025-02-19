// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isGithubPages = mode === 'github'
  
  return {
    base: isGithubPages ? "/Merrill_Reid/" : "/",
    plugins: [react()]
  }
})