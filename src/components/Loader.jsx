import React from 'react'

import './css/Loader.css'

const Loader = () =>{
    return(
        <div className='loader'>
            <div className='loader_center'>

                <div className='loader_dot'>loading...</div>
                <div className='loader_dot'>loading...</div>
                <div className='loader_dot'>loading...</div>
                
            </div>
        </div>
    )
}

export default Loader;