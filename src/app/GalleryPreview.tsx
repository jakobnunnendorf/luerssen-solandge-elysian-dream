import React from 'react';
import Image from "next/image";

function GalleryPreview() {
    return (
        <div className="grid place-content-center pt-20">
            <h2 className="text-4xl text-center pb-12">Gallery</h2>
            <Image src="/gallery.png" alt="Test" height={1240} width={1065} />
        </div>
    );
}

export default GalleryPreview;