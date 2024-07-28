import React from 'react';
import Image from 'next/image'

function Background() {
    return (
        <div className=" flex px-24 gap-x-8 h-fit">
            <div className="col-span-2 w-full h-4/5">
                <div>
                    <h2 className="text-4xl">Brief History and Background</h2>
                    <p className="">The &quot;Elysian Dream&quot; is a luxurious motor yacht inspired by
                        the legendary Lürssen Solandge. Commissioned by a discerning owner with a vision for
                        unparalleled elegance and comfort, the yacht was conceived to offer a unique and opulent
                        yachting experience. It embodies the pinnacle of luxury, reflecting the finest in nautical
                        design and craftsmanship.</p>
                    <h3 className="text-3xl">Design, Construction, and Launch</h3>
                    <p>
                        Designed by the acclaimed Lürssen shipyard, the &quot;Elysian Dream&quot; represents a seamless blend of
                        innovation and tradition. The design process focused on creating a vessel that balances sleek,
                        contemporary aesthetics with timeless elegance. Construction began with meticulous attention to
                        detail, using the highest quality materials and the latest technologies. The yacht was launched
                        in [Year], making a grand debut as a marvel of modern yacht engineering.
                    </p>
                </div>
            </div>
            <div className=" relative ">
                <Image src="/overview.png" alt="" width={591} height={531}/>
            </div>
        </div>
    );
}

export default Background;