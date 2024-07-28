import React from 'react';
import Image from 'next/image'

function Availability() {
    return (
        <div className="relative grid grid-cols-2 bg-[#091928] text-white rborder h-[388px]">
            <div className="flex flex-col items-center justify-center gborder text-center ">
                <h2 className="text-7xl font-serif">Availability</h2>
                <h3 className="text-3xl">Booking calendar with availability</h3>
            </div>
            <div className="bborder flex justify-center items-center relative">
                <Image src="/calendar.jpg" width={397} height={456} alt="calendar" className="absolute shadow-2xl" />
            </div>
        </div>
    );
}

export default Availability;