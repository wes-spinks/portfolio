import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
            base: '/spinks.work/',
            assetsDir: 'spinks.work/assets',
            watch: false,
        },
	publicDir: './public',
        resolve: {
                alias: {
                        $lib: './src/lib',
                },
        },
});
