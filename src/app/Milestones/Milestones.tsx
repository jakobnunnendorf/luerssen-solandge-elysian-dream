import React from 'react';
import InfoCard from "@/app/InfoCard";

function Milestones() {
    const cards = [
        {
            src: "/ext-design-icon.png",
            alt: "Concept Approval Icon",
            title: "Concept Approval",
            text: 'The initial concept for "Elysian Dream" was approved in 2017, marking the beginning of a journey towards creating a unique luxury yacht.'
        },
        {
            src: "/ext-design-icon.png",
            alt: "Construction Commencement Icon",
            title: "Construction Commencement",
            text: 'Construction commenced in 2017, with Lürssen’s expert team overseeing every aspect of the build.'
        },
        {
            src: "/ext-design-icon.png",
            alt: "Launch And Sea Trials Icon",
            title: "Launch And Sea Trials",
            text: 'The yacht was successfully launched in 2017 and underwent rigorous sea trials to ensure optimal performance and safety.'
        },
        {
            src: "/ext-design-icon.png",
            alt: "Awards And Recognition Icon",
            title: "Awards And Recognition",
            text: 'Since its debut, "Elysian Dream" has received numerous accolades for its design and craftsmanship, solidifying its reputation as a leading luxury yacht.'
        },
        {
            src: "/ext-design-icon.png",
            alt: "Voyages And Expeditions Icon",
            title: "Voyages And Expeditions",
            text: 'The yacht has embarked on several notable voyages, showcasing its capabilities and providing unforgettable experiences to its guests.'
        }
    ];

    return (
        <div className=" p-16">
            <h2 className="text-4xl text-center p-8 font-serif">Key Milestones and Achievements</h2>
            <ul className=" grid grid-cols-3 w-fit mx-auto gap-5 h-fit">
            {cards.map((card, index) => (
                <li key={index}><InfoCard src={card.src} title={card.title} text={card.text} alt={card.alt} /></li>
            ))}
            </ul>
        </div>
    );
}

export default Milestones;
