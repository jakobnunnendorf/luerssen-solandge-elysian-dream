import React from 'react';

function Spec({title, specList}:{title:string; specList:[string, string][]}) {
    return (
        <div className="p-2">
            <h3 className="text-xl">{title}</h3>
            <ul>
                {specList.map((item:any)=><li key={item.id}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Spec;