import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    const isHomePage = location.pathname === '/';
    const handleDownloadResume = () => {
        const resumePdfUrl = 'public/SITESH_JAVA_1YR.pdf';
        const a = document.createElement('a');
        a.href = resumePdfUrl;
        a.download = 'SITESH_RESUME.pdf'; 
        a.click();
    };
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50" >
            <nav className="flex justify-center md:justify-between md:items-center py-4 px-8 md:px-16">
                <div className='hidden md:block'>
                    <div className="grid grid-cols-1 ">
                        {/* <img className="place-self-center h-14 w-14 " src="/static/images/onestudio.png" alt="logo" /> */}
                        {/* <a href="mailto:sitesh.raulo.pj@gmail.com" className="text-white hover:text-[#121211] hover:bg-[#e3f551] rounded-3xl bg-[#252525] bg-opacity-50 px-4 py-1 flex items-center justify-center">
                            sitesh.raulo.pj@gmail.com
                        </a> */}
                    </div>

                </div>


                {isContactPage && (
                    <ul className="flex gap-1">
                        <li>
                            <Link to="/" className="text-[#8d8b8b] bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#b0b1ac] rounded-2xl flex items-center justify-center">
                                Home
                            </Link>
                        </li>
                    </ul>
                )}

                {isHomePage && (
                    <ul className="flex gap-2">
                        <li>
                            <button onClick={handleDownloadResume} className="text-[#8d8b8b] text-sm md:text-md bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#b0b1ac] rounded-2xl flex items-center justify-center">
                                Download Resume
                            </button>
                        </li>
                        <li>
                            <Link to="/contact" className="text-[#8d8b8b] bg-[#252525] text-sm md:text-md px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#b0b1ac] rounded-2xl flex items-center justify-center">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header >

    );
}

export default Header;
