import sharp from "sharp";
import fs from "fs";

export async function getImageSize(imagePath: string) {
    const buffer = fs.readFileSync(imagePath);
    const metadata = await sharp(buffer).metadata();
    return { width: metadata.width || 100, height: metadata.height || 100 };
}
