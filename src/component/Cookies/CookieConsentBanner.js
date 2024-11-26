import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

const CookieConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(!Cookies.get('session'));

    const handleAcceptCookies = () => {
        const expiryTime = new Date(Date.now() + 60000);
        Cookies.set('session', true, {
            expires: 7,
            secure: true,
            sameSite: 'strict',
            path: '/'
        });
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }




    console.log("showBanner", showBanner);

    return (
        <div className="cookie-banner">
            <p>This website uses cookies to improve your experience.</p>
            <button onClick={handleAcceptCookies}>Accept</button>
        </div>
    );
};

export default CookieConsentBanner;
