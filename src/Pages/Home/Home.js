import React from 'react';
import Banner from './Banner/Banner';
import EmployeeCount from './EmployeeCount/EmployeeCount';
import News from './News/News';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <News></News>
            <EmployeeCount></EmployeeCount>
        </div>
    );
};

export default Home;