import React from 'react'
import PropTypes from 'prop-types'

function Breadcrumbs({children}){
    const arr = Array.from(children);
    return(
        <section className="bg-blue-100">
            <div className="tw-container py-8 md:py-16">
          
            </div>
        </section>
    );
}

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired
}

export default Breadcrumbs