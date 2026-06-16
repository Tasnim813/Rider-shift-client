import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Reveiws from '../Reveiws/Reveiws';
const  reveiwsPromise= fetch('/reviews.json')
.then(res=>res.json())
const Home = () => {
    return (
        <div>
           <Banner ></Banner>
           <Brand></Brand>
           <Reveiws reveiwsPromise={reveiwsPromise}></Reveiws>
        </div>
    );
};

export default Home;