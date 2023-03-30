/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '~~': path.resolve(__dirname, '.'),
      '~': path.resolve(__dirname, '.')
    }
  }
})
