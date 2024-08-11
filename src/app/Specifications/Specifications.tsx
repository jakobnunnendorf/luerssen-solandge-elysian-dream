import React from 'react';
import Spec from './Spec';

function Specifications() {
    return (
        <div className="flex justify-center">
            <ul className="flex flex-col w-4/5 gap-5">
                {specifications.map((item, index) => (
                    <li key={index}>
                        <Spec title={item.title} specList={item.specList} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Specifications;

const specifications: { title: string; specList: [string, string][] }[] = [
    {
        title: "General Specifications",
        specList: []
    },
    {
        title: "Performance",
        specList: []
    },
    {
        title: "Capacities",
        specList: [
            ["Fuel Capacity", "250,000 Liters (66,043 Gallons)"],
            ["Fresh Water Capacity", "40,000 Liters (10,566 Gallons)"],
            ["Holding Tank Capacity", "30,000 Liters (7,925 Gallons)"]
        ]
    },
    {
        title: "Accommodation",
        specList: []
    },
    {
        title: "Interior Features",
        specList: []
    },
    {
        title: "Exterior Features",
        specList: []
    },
    {
        title: "Tenders And Toys",
        specList: []
    },
    {
        title: "Navigation And Communication",
        specList: []
    },
    {
        title: "Safety And Security",
        specList: []
    },
    {
        title: "Additional Features",
        specList: []
    }
];
