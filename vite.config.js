// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'pages': '/src/pages',
      'routes': '/src/routes',
      'services': '/src/services',
      'reportWebVitals': '/src/reportWebVitals.js' // Đặt lại đường dẫn chính xác
    },
  }
  
});
