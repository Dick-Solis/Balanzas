import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as emotion from '@emotion/babel-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...emotion,
      // Puedes agregar configuraciones adicionales según sea necesario
    },
  ],
});
