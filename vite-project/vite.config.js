import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Anjalbhujel/test.git
git push -u origin main