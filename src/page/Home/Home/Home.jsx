import React from 'react';
import Banner from '../Bannner/Banner';
import Brands from '../Brands/Brands';
import Reveiws from '../Reveiws/Reveiws';

const reviewsPromise=fetch('/reviews.json')
.then(res=>res.json())
const Home = () => {
    return (
        <div>
            This is Home
            <Banner></Banner>
            <Brands></Brands>
            <Reveiws reviewsPromise={reviewsPromise}></Reveiws>
        </div>
    );
};

export default Home;