import React from 'react'

function BroadTime({timezone,timeLocation}) {
    return (
        <div className="timer py-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title ">{timeLocation}</h3>
            <div className="timer__current">{timezone}</div>
        </div>
    )
}

export default BroadTime