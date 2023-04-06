import React from 'react';

const MySection = ({children, id, title, desc}) => {
    return ( 
        <section className={`my-section ${id}`} id={id}>

            {title && <h2 className='section-title'>{title}</h2>}

            {desc && <p className='section-desc'>{desc}</p>}

            {children}

        </section>
    );
}
 
export default MySection;