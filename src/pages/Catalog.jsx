import React from "react";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import { SectionBody } from "../components/Section";

const Catalog = () => {
  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter">
          <div
            className="catalog__filter__close"
            // onClick={() => showHideFilter()}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              danh mục sản phẩm
            </div>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {productData.getProducts(12).map((item, index) => (
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
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
