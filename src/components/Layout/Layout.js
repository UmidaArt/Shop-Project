import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Announcement from "../Announcement";

const Layout = ({children}) => {
    return (
        <div>
            <Announcement/>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;