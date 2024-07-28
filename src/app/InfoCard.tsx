import React from 'react';
import Image from "next/image";

function InfoCard({src, title, text, alt}:{src: string; title: string; text: string; alt: string}) {
    return (
        <div>
            <Image src={src} width={50} height={50} alt={alt}/>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
        </div>
    );
}

export default InfoCard;