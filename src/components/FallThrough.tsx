import React from 'react'
import { Redirect } from 'react-router'

const FallThrough: React.FC = () => {
    const url = "" + document.location.href.split('/').pop();

    let retjsx;
    switch (url){
        case "":
            retjsx = <Redirect to="/home" />;
            break;
        
        case "?home":
            retjsx = <Redirect to="/home" />;
            break;
        
        case "?about":
            retjsx = <Redirect to="/about" />;
            break;
        
        case "?post":
            retjsx = <Redirect to="/post" />;
            break;
        
        default:
            retjsx = <Redirect to="/404.html" />
            break;
    }
    
    // if (validUrls.includes(url)) return <Redirect to={url} />
    // else return (
    return retjsx;
}

export default FallThrough;