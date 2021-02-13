import React, {useEffect} from 'react'
import { Redirect } from 'react-router'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

const FallThrough: React.FC = () => {
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);

    useEffect(() => {
        setBodyText({
            bannerText: "Error 404",
            headerText: ""
        });
    }, []);

    const url = "" + document.location.href.split('/').pop();
    if (url !== "404") return <Redirect to="/404" />;

    return (
        <div className="FallThrough">
            <p>Error 404</p>
            <p>Page not found</p>
        </div>
    );
}

export default FallThrough;