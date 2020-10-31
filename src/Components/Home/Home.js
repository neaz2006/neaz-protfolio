import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WorkSection from '../WorkSection/WorkSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WorkSection></WorkSection>
            <Blog></Blog>
            <Footer/>
        </div>
    );
};

export default Home;