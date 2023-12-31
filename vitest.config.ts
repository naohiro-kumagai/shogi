/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
  resolve: {
    alias: {
      '@': __dirname + '/',
      '~': __dirname + '/',
    },
  },
})