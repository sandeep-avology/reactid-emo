import React from "react";
import HeroBanner from "./hero-bnr/HeroBanner";
import Partition from "./partition/Partition.JSX";


const Home = () => {
    return (
        <div className="main ">
            <HeroBanner />
            <Partition />
        </div>
    );
};
export default Home;