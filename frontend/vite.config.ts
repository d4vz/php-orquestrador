import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	root: path.resolve(__dirname),
	// base: "/assets/",
	build: {
		outDir: path.resolve(__dirname, "../public/assets"),
		emptyOutDir: true,
		manifest: true,
		rollupOptions: {
			input: path.resolve(__dirname, "index.html"),
		},
	},
	server: {
		port: 5173,
		strictPort: true,
	},
});
