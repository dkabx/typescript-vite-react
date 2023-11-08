import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') },
      {
        find: 'components',
        replacement: path.resolve(__dirname, './src/components/'),
      },
      { find: 'routes', replacement: path.resolve(__dirname, './src/routes/') },
      {
        find: 'reduxModules',
        replacement: path.resolve(__dirname, './src/redux-modules'),
      },
      { find: 'theme', replacement: path.resolve(__dirname, './src/theme/') },
      { find: 'views', replacement: path.resolve(__dirname, './src/views/') },
      {
        find: 'layouts',
        replacement: path.resolve(__dirname, './src/layouts/'),
      },
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets/') },
      {
        find: 'constants',
        replacement: path.resolve(__dirname, './src/constants/'),
      },
      { find: 'types', replacement: path.resolve(__dirname, './src/types/') },
      {
        find: 'utilities',
        replacement: path.resolve(__dirname, './src/utilities/'),
      },
      { find: 'apis', replacement: path.resolve(__dirname, './src/apis/') },
      { find: 'lib', replacement: path.resolve(__dirname, './src/lib/') },
      {
        find: 'service',
        replacement: path.resolve(__dirname, './src/Services/'),
      },
      {
        find: 'routeWrapper',
        replacement: path.resolve(__dirname, './src/route-wrapper/'),
      },
    ],
  },
  plugins: [react(), eslint()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
});
