import React from 'react';
import Image from "next/image";

function SunDeck() {
    return (
        <div className="flex py-32 px-24 gap-20 ">
            <div className="w-[652px] flex-shrink-0 inline-block relative">
                <Image src="/sun deck.png" height={524} width={502} alt="Test" className="z-10 relative" />
                <div className="h-[524px] w-[502px] border rotate-3 absolute top-0 z-0 border-[#A37C45]"/>
            </div>
            <div className="flex flex-col justify-around py-4 ">
                <h2 className="text-4xl">Dining Area</h2>
                <p>The sophisticated dining area is perfect for both formal and casual dining experiences. A beautifully
                    set table, surrounded by plush seating, creates an inviting space for guests to enjoy gourmet meals.
                    The use of sleek wood accents and sophisticated finishes adds to the luxurious feel, while large
                    windows allow for stunning ocean views, making every dining experience unique and memorable.</p>
                <h3 className="text-3xl">Master Suite</h3>
                <p>The master suite is a private haven of luxury, featuring a king-sized bed with sumptuous bedding and
                    elegant décor. Large windows offer panoramic ocean views, creating a serene and tranquil atmosphere.
                    The room is designed with high-end materials, including plush carpets and bespoke furnishings,
                    ensuring a comfortable and restful retreat. Soft ambient lighting further enhances the warm and
                    inviting ambiance.</p>
            </div>
        </div>
    );
}

export default SunDeck;