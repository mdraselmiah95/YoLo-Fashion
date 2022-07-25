import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Grid from "../components/Grid";

import heroSliderDate from "../assets/fake-data/hero-slider";
import Section, { SectionBody, SectionTitle } from "../components/Section";

import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

const Home = () => {
  console.log(productData);
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderDate}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section start*/}

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* policy section end*/}

      {/* best selling section */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}></Grid>
        </SectionBody>
      </Section>
      {/* best selling section end*/}
    </Helmet>
  );
};

export default Home;
