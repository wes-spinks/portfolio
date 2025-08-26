import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
    build: {
            base: '/',
            watch: false,
        },
	publicDir: './public',
        resolve: {
                alias: {
                        $lib: './src/lib',
                },
        },
    }

  if (command !== 'serve') {
     config.base = '/portfolio/'
  }

  return config
});
