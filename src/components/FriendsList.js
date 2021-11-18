import React from 'react';

const Friends = ({prop}) => {

    return (
        <div className="mt-2">
            {prop.map(item => {
                return(
                    <div key={item.id} className="d-flex gap-3 align-items-center mb-2">
                        <img src={item.img} alt={item.id} className="round-sm" width="72px" height="72px"/>
                        <div>
                            <p className="fw-600 mb-0">{item.name}</p>
                            <p className="text-secondary mb-1 fs-12">{item.friends}</p>
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}

export default Friends
