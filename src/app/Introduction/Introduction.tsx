import React from 'react';
import Image from 'next/image'
import Link from "next/link";

function Introduction() {
    return (
        <div className=" flex px-24 gap-x-8 h-fit">
            <div className=" relative">
                <Image src="/designer.png" alt="" width={502} height={680}/>
            </div>
            <div className="col-span-2 w-full h-4/5">
                <div>
                    <h2 className="text-4xl">Brief Introduction to the Luxury Yacht</h2>
                    <p className="">The "Elysian Dream" embodies the pinnacle of opulence and elegance on the water.
                        This exquisite yacht offers unparalleled comfort and sophistication,
                        ensuring an unforgettable yachting experience. With state-of-the-art amenities, bespoke
                        interiors,
                        and a timeless design, the "Elysian Dream" is your sanctuary on the high seas.</p>
                </div>
                <div>
                    <h2>Key Features and Highlights</h2>
                    <ul>
                        <li>Sleek Design</li>
                        <li>Multiple Decks</li>
                        <li>Luxurious Interiors</li>
                        <li>Spacious Accommodations</li>
                        <li>Advanced Technology</li>
                        <li>Entertainment and Leisure</li>
                        <li>Gourmet Dining</li>
                        <li>Water Toys and Tenders</li>
                        <li>Professional Crew</li>
                    </ul>
                </div>
                <div>
                    <Link href="/">Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default Introduction;