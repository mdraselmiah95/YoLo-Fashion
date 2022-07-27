import React from "react";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import { SectionBody } from "../components/Section";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";

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
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    // onChange={(input) =>
                    //   filterSelect("CATEGORY", input.checked, item)
                    // }
                    // checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    // onChange={(input) =>
                    //   filterSelect("COLOR", input.checked, item)
                    // }
                    // checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>
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
    </Helmet>
  );
};

export default Catalog;
