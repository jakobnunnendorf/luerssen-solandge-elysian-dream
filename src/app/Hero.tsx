import React from 'react';
import Image from "next/image";

function Hero() {
    return (
        <div className="h-[634px] flex justify-center items-center w-full">
            <figure className="absolute top-0 flex justify-center items-center h-[634px] w-full">
                <Image
                    fill
                    src="/luerssen-bg.jpg"
                    alt="A stunning luxury motor yacht named 'Elysian Dream' inspired by the Lürssen Solandge. The yacht is cruising on clear blue waters, showcasing its sleek and modern design."
                    className="z-0"
                />
                <div className="absolute top-0 w-full h-full bg-[#091928] opacity-70 z-10"></div>
            </figure>
            <div className="z-20 text-white text-center">
                <h1 className=" text-7xl  font-serif">Lürssen <span className="text-[#E4CE9C]">Solandge</span>
                </h1> {/*TODO: add Lora font*/}
                <h2 className="text-3xl">Where luxury meets the horizon</h2>
            </div>
        </div>
    )
}

export default Hero;