import React, { use } from 'react';
import Image, { ImageProps } from 'next/image';
import { useImageSize } from '@/hooks/useImageSize';

interface AppImageProps extends ImageProps {
    src: string;
    alt: string;
}

const AppImage: React.FC<AppImageProps> = ({ src, alt, ...props }) => {
    const imageSize = useImageSize(src);

    return (
        <Image
            src={src}
            alt={alt || 'image'}
            width={imageSize?.width || 0}
            height={imageSize?.height || 0}
            {...props} 
        />
    );
};

export default AppImage;
