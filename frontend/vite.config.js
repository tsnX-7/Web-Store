import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default defineConfig({
  plugins: [react(), alias({
    entries: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  })],
  server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});