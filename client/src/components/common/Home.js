import React from 'react'
import note1 from './note1.png'
export default function Home()
{
    return(
       <div>
            <div className="col-xs-1 text-center mt-5">
                <h2 className="mb-5">Welcome To The Notes Application!!!</h2>
                <img src={note1} alt="man holding sign"/>
            </div>
        </div>
    )
}