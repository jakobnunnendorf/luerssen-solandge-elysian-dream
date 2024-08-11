import React from 'react';
import Image from 'next/image'

function Background() {
    return (
        <div className=" flex px-24 gap-x-8 my-36 ">
            <div className=" flex-grow ">
                <div className=" flex flex-col h-full gap-y-8">
                    <div className=" flex-grow">
                        <h2 className="text-4xl font-serif pb-5"><span className="text-[#A37C45]">Brief History</span> and
                        Background</h2>
                        <p className="text-gray-600">The &quot;Elysian Dream&quot; is a luxurious motor yacht inspired by
                            the legendary Lürssen Solandge. Commissioned by a discerning owner with a vision for
                            unparalleled elegance and comfort, the yacht was conceived to offer a unique and opulent
                            yachting experience. It embodies the pinnacle of luxury, reflecting the finest in nautical
                            design and craftsmanship.</p>
                    </div>
                    <div className=" flex-grow">
                        <h3 className="text-xl font-serif text-gold pb-3">Design, Construction, and Launch</h3>
                        <p className="text-gray-600">
                            Designed by the acclaimed Lürssen shipyard, the &quot;Elysian Dream&quot; represents a
                            seamless
                            blend of
                            innovation and tradition. The design process focused on creating a vessel that balances
                            sleek,
                            contemporary aesthetics with timeless elegance. Construction began with meticulous attention
                            to
                            detail, using the highest quality materials and the latest technologies. The yacht was
                            launched
                            in [Year], making a grand debut as a marvel of modern yacht engineering.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative  flex-shrink-0">
                <Image src="/overview.png" alt="" width={591} height={531}/>
                <div className="border border-gold rotate-3 absolute h-full w-full top-0 -z-50"></div>
            </div>
        </div>
    );
}

export default Background;