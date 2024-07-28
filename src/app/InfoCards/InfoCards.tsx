import React from 'react';
import InfoCard from "@/app/InfoCard";

function InfoCards() {
    const cards = [
        {
            src: "/ext-design-icon.png",
            alt: "Exterior Design Icon",
            title: "Exterior Design",
            text: 'The yacht features a striking profile with elegant lines, expansive windows, and multiple decks. The exterior spaces are designed for both relaxation and entertainment, offering panoramic views and luxurious amenities.'
        },
        {
            src: "/int-design-icon.png",
            alt: "Interior Design Icon",
            title: "Interior Design",
            text: 'The interiors of the "Elysian Dream" are a testament to bespoke craftsmanship, featuring custom furnishings, high-end materials, and state-of-the-art technology. Every space is designed to provide the utmost comfort and luxury.'
        },
        {
            src: "/engineering.png",
            alt: "Engineering Icon",
            title: "Engineering",
            text: 'Powered by advanced propulsion systems, the yacht offers superior performance, stability, and efficiency, ensuring a smooth and enjoyable voyage.'
        }
    ];

    return (
        <div className="grid grid-cols-3 px-24 gap-x-8 h-fit">
            {cards.map((card, index) => (
                <InfoCard key={index} src={card.src} title={card.title} text={card.text} alt={card.alt} />
            ))}
        </div>
    );
}

export default InfoCards;
