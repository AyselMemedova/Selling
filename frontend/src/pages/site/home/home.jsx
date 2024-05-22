import React, { useContext } from "react";
import { Helmet } from "react-helmet";
// import Leader from "../../../components/leaderShip/leader";
import Section1 from "../../../components/section1/Section1";
import Basket from "../../../components/section2_basket/Basket";
import MainContext from "../../../context/context";

const Home = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
      <Section1 />
      <Basket data={data}/>
      

      </div>
    </>
  );
};

export default Home;
