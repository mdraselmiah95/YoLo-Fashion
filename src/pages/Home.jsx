import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

import heroSliderDate from "../assets/fake-data/hero-slider";
import Section, { SectionBody } from "../components/Section";

import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import { Link } from "react-router-dom";

const Home = () => {
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
          {policy.map((item, index) => (
            <Link key={index} to="/policy">
              <PolicyCard
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            </Link>
          ))}
        </SectionBody>
      </Section>

      {/* policy section end*/}
    </Helmet>
  );
};

export default Home;
