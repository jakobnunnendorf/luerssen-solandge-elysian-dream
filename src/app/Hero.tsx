import React from 'react';
import Image from "next/image";

function Hero() {
    return (
        <figure className="relative h-fit w-full ">
            <Image
                src="/luerssen-bg.jpg"
                alt="A stunning luxury motor yacht named 'Elysian Dream' inspired by the Lürssen Solandge. The yacht is cruising on clear blue waters, showcasing its sleek and modern design."
                width={1440} height={634}
                className="z-0"
            />
            <div className="absolute top-0 w-full h-full bg-[#091928] opacity-70 z-10"></div>
        </figure>
    );
}

export default Hero;