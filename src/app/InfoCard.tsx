import React from 'react';
import Image from "next/image";

function InfoCard({src, title, text, alt}:{src: string; title: string; text: string; alt: string}) {
    return (
        <div className="w-96 h-80 px-9 py-3.5 hover:bg-[#E4CE9C] border border-[#E4CE9C]">
            <figure className="mb-5 p-2 bg-[#091928]/10 w-fit h-fit"><Image  src={src} width={50} height={50} alt={alt}/></figure>
            <h2 className="pb-3 text-2xl font-serif">{title}</h2>
            <p className="text-sm text-slate-700">
                {text}
            </p>
        </div>
    );
}

export default InfoCard;