import { useState, useEffect } from "react";

export function useImageSize(src: string) {
    const [size, setSize] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSize({ width: img.naturalWidth, height: img.naturalHeight });
    }, [src]);

    return size;
}