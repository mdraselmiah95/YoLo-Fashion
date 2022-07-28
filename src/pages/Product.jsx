import React from "react";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>{/* <ProductView product={product} /> */}</SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
      </Section>
    </Helmet>
  );
};

export default Product;
