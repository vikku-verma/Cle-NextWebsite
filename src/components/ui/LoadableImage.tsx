"use client";

import { useState, ImgHTMLAttributes } from "react";

interface LoadableImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export function LoadableImage({ src, fallbackSrc, alt, ...props }: LoadableImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => {
                if (fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
}
