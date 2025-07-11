import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 enables network access (0.0.0.0)
    port: 5173, // 👈 you can change the port if needed
  },
});
