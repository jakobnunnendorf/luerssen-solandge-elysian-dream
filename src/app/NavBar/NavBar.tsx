import React from 'react';
import Image from 'next/image'

function NavBar() {
    return (
        <nav className="flex justify-center bg-[#A37C45] w-full h-20 text-white ">
            <div className="flex w-4/5  items-center">
                <Image src="/logo.png" width={80} height={80} alt="test"/>
                <ul className="flex items-center justify-center gap-8 w-full ">
                   <li>Home</li>
                   <li>Gallery</li>
                   <li>Specifications</li>
                   <li>Amenities</li>
                   <li>Availability</li>
                   <li>Contact</li>
                </ul>
                <ul className="flex gap-4 px-4">
                    <li className=" h-6 w-6"><Image src="/Instagram.png" width={80} height={80} alt="test"/></li>
                    <li className=" h-6 w-6"><Image src="/Twitter.png" width={80} height={80} alt="test"/></li>
                    <li className=" h-6 w-6"><Image src="/Facebook.png" width={80} height={80} alt="test"/></li>
                    <li className=" h-6 w-6"><Image src="/Youtube.png" width={80} height={80} alt="test"/></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;