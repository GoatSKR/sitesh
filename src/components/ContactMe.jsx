import React, { useEffect } from 'react';
export default function ContactMe() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="p-8 h-screen bg-black" >
            
            <div className="visme_d"
                data-title="Sitesh Portfolio Form"
                data-url="n08o78x4-sitesh-portfolio-form?fullPage=true"
                data-domain="forms"
                data-full-page="true"
                data-min-height="100vh"
                data-form-id="17361">
            </div>
        </div>
    )
}