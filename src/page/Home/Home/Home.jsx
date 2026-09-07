import React from 'react';
import Banner from '../Bannner/Banner';
import Brands from '../Brands/Brands';
import Reveiws from '../Reveiws/Reveiws';
import Work from '../Work/Work';

const reviewsPromise=fetch('/reviews.json')
.then(res=>res.json())
const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Work></Work>
            <Brands></Brands>
            <Reveiws reviewsPromise={reviewsPromise}></Reveiws>
        </div>
    );
};

export default Home;