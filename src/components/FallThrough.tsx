import React from 'react'
import { Redirect } from 'react-router'

const FallThrough: React.FC = () => {
    const url = "" + document.location.href.split('/').pop();

    if (url !== "404") return <Redirect to="/404" />

    return (
        <div className="FallThrough">
            <p>Error 404</p>
            <p>Page not found</p>
        </div>
    );
}

export default FallThrough;