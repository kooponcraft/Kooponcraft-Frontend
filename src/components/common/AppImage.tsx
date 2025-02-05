import { useImageSize } from '@/hooks/UseImageSize'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface AppImageProps extends ImageProps {
    src: string;
    alt: string;
}

const AppImage: React.FC<AppImageProps> = ({ src, alt, width, height, ...props }) => {
    const imgSize = useImageSize(src)

    return (
        <Image 
            src={src}
            alt={alt}
            width={width || (imgSize?.width || 100)}
            height={height || (imgSize?.height || 100)}
            {...props} 
        />
    )
}

export default AppImage