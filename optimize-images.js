// optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const mediaDir = path.join(process.cwd(), "public");

async function convertImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertImages(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const output = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

      // Convertir a WebP
      await sharp(fullPath).webp({ quality: 80 }).toFile(output);
      // Eliminar archivo original
      fs.unlinkSync(fullPath);

      console.log(`🖼️ ${entry.name} → ${path.basename(output)}`);
    }
  }
}

(async () => {
  console.log("🚀 Optimizando imágenes...");
  await convertImages(mediaDir);
  console.log("✅ Optimización de imágenes completa.");
})();
