import { copyFile } from "node:fs/promises";

// GitHub Pages has no SPA fallback. Serving a copy of index.html as 404.html
// lets the client-side router handle direct hits to /about, /tech, etc.
await copyFile("dist/index.html", "dist/404.html");
console.log("Copied dist/index.html to dist/404.html");
