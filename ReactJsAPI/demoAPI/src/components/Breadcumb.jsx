import React, { useEffect, useState } from 'react'
import './Breadcumb.css'
import imgUnderHeader from './../assets/images/under-header.png'
import { useLocation } from 'react-router'

function Breadcumb() {
    const [locationText, setLocationText] = useState('')
    let location = useLocation()

    const underPath = location.pathname == '/' ? 'true' : `Home  ${ ' > ' + location.pathname.split("/")[1]}`;
    // const underPath = location.pathname.split("/").length > 1 ? `Home ${ '> ' + location.pathname.split("/")[1]}` : '';
    useEffect(() => {
        console.log('location', location.pathname);
        setLocationText(location.pathname == '/' ? 'Home' : location.pathname.split("/")[1])
    }, [location]);
    return (
        <>
            {underPath == "true" ? <></> : <div className='container under-header' style={{ backgroundImage: `url('${imgUnderHeader}')` }}>
                <span>{locationText}</span>
                <p>{underPath}</p>
            </div>}
        </>
    )
}

export default Breadcumb
