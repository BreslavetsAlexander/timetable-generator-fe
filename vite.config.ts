import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envVariables = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: envVariables.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
