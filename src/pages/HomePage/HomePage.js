import React from 'react';
import Products from "../Products";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Catalog from "../../components/Catalog";

const HomePage = () => {
    return (
        <div>
            <Announcement/>
            <Header/>
            <Slider/>
            {/*<Genres/>*/}
            <Catalog/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default HomePage;