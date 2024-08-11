import React from 'react';
import Image from "next/image";

function Interior() {
    return (
        <div className="text-white  bg-[#0A1928] flex">
            <div className="w-[652px] flex-shrink-0 inline-block ">
                <Image src="/interior.png" height={553} width={652} alt="Test"/>
            </div>
            <div className=" flex-grow h-full p-8 w-full">
                <h3 className="text-3xl">Interior Design - Elysian Dream</h3>
                <p>The interior design of the &quot;Elysian Dream&quot; has been meticulously crafted by Nautical
                    Elegance Interiors, renowned for their ability to blend opulence with functionality. Each space
                    aboard this luxury yacht reflects a sophisticated, modern aesthetic, using high-end materials and
                    bespoke furnishings to create an environment of unparalleled comfort and elegance.</p>
                <h4 className="text-2xl pt-4">Main Salon</h4>
                <p>The lavish main salon is designed as a sanctuary of relaxation and sophistication. Plush seating
                    arrangements, adorned with luxurious fabrics and elegant décor, provide a welcoming ambiance. Large
                    windows offer breathtaking ocean views, while soft, ambient lighting enhances the cozy atmosphere.
                    Every detail, from the choice of high-end materials to the placement of decorative elements, has
                    been thoughtfully considered to exude refined elegance.</p>
            </div>
        </div>
    );
}

export default Interior;