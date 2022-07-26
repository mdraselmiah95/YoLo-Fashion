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
import ProductCard from "../components/ProductCard";

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
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* best selling section end*/}

      {/* new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* new arrival section end*/}
    </Helmet>
  );
};

export default Home;
