/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Slider from "infinite-react-carousel";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import TrendingCard from "./TrendingCard";
import ProductOne from "../../img/productSix.jpg";
import ProductTwo from "../../img/productFive.jpg";
import ProductThree from "../../img/actress_2805025..jpg";
import ProductFour from "../../img/actress_2805026..jpg";
import ProductFive from "../../img/poojahegde16012021_01..jpg";
import ProductSix from "../../img/productFour.jpg";

const Trending = () => {
  const [media, setMedia] = useState("");

  return (
    <section css={styles} className="trending" id="trending">
      <Title titleText="TRENDING" overlayTitle="Trending" />
      <Container>
        <Slider
          onResize={(e) => setMedia(e.target.innerWidth)}
          dots={true}
          slidesToShow={media < 750 ? 1 : media > 750 && media < 1360 ? 2 : 3}
          centerMode={media > 750 && media < 1360 ? true : false}
          centerPadding={media > 750 && media < 1360 ? 0 : 50}
          autoplayScroll={1}
          autoplay={true}
          autoplaySpeed={2200}
          arrows={false}
          className="slider"
        >
          <TrendingCard cardImg={ProductOne} price="Rs.1899" discount="Rs.301" />
          <TrendingCard cardImg={ProductTwo} price="Rs.1199" discount="Rs.701" />
          <TrendingCard cardImg={ProductThree} price="Rs.799" discount="Rs.401" />
          <TrendingCard cardImg={ProductFour} price="Rs.1399" discount="Rs.601" />
          <TrendingCard cardImg={ProductFive} price="Rs.999" discount="Rs.601"/>
          <TrendingCard cardImg={ProductSix} price="Rs.1699" discount="Rs.501" />
        </Slider>
      </Container>
    </section>
  );
};

const styles = css`
  padding: 100px 0;
  width: 100%;
  .container {
    padding: 30px 0 0 0;
    .slider {
      width: 100%;
    }
  }
`;

export default Trending;
