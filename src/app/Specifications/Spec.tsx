import React from 'react';

function Spec({title, specList}:{title:string; specList:[string, string][]}) {
    return (
        <div className="p-2">
            <h3 className="text-xl">{title}</h3>
            <ul>
                {specList.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Spec;