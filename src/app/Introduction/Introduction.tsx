import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function Feature({ feature }: { feature: string }) {
    return (
        <div className="flex justify-left  gap-x-2 items-center text-lg">
            <figure className="h-4 w-4">
                <Image src="/bullet.png" width={15} height={15} alt="check mark" />
            </figure>
            <p>{feature}</p>
        </div>
    );
}

function Introduction() {
    const features = [
        "Sleek Design",
        "Multiple Decks",
        "Luxurious Interiors",
        "Spacious Accommodations",
        "Advanced Technology",
        "Entertainment and Leisure",
        "Gourmet Dining",
        "Water Toys and Tenders",
        "Professional Crew"
    ];

    return (
        <div className="flex h-screen gap-8 p-24 ">
            <figure className="relative h-full flex-shrink-0 ">
                <Image
                    src="/designer.png" alt="Designer"
                    width={502} height={680}
                    className="h-full w-full" />
            </figure>
            <div className="flex flex-col col-span-2 w-full py-2 gap-8 h-full">
                <div className="flex flex-col gap-5">
                    <h2 className="text-5xl font-serif">
                        Brief Introduction to the <span className="text-[#A37C45]">Luxury Yacht</span>
                    </h2>
                    <p>
                        The &quot;Elysian Dream&quot; embodies the pinnacle of opulence and elegance on the water.
                        This exquisite yacht offers unparalleled comfort and sophistication,
                        ensuring an unforgettable yachting experience. With state-of-the-art amenities, bespoke
                        interiors, and a timeless design, the &quot;Elysian Dream&quot; is your sanctuary on the high seas.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-serif py-2 pb-5">Key Features and Highlights</h2>
                    <ul className="grid grid-cols-2 gap-y-5 gap-x-28 w-full">
                        {features.map((feature, index) => (
                            <li key={index}><Feature feature={feature} /></li>
                        ))}
                    </ul>
                </div>
                <div className="pt-4">
                    <Link href="/" >
                        <div className="flex justify-center items-center bg-[#A37C45] w-44 h-14 px-4 py-2  rounded-sm ">
                            <p className="font-serif text-white text-center text-lg">Read more</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
