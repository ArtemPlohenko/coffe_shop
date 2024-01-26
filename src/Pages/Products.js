import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";
import { useEffect, useState } from "react";

// const productsPageProps = {
//   bannerProducts: { imageUrl: "./images/banner/coffee-shop-2.jpg", mainTitle: "ForYourPleasure" },
//   section: { className: "text-center", image: "Products", title: "aboutOurGoods", text: "products" },
//   productsGroup: {
//     products: [
//       { id: 1, src: "/images/our-2.png" },
//       { id: 2, src: "/images/best-3.png" },
//       { id: 3, src: "/images/best-3.png" },
//       { id: 4, src: "/images/best-3.png" },
//       { id: 5, src: "/images/best-3.png" },
//       { id: 6, src: "/images/best-3.png" },
//     ],
//     additionalClass: "second-prodects",
//   },
// };

const Products = () => {
  const [productsPageProps, setProductsPageProps] = useState({});

  useEffect(() => {
    fetch("https://486fe35abc97409c8cfff47ab7430e6f.api.mockbin.io/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // or response.text() if the data is not JSON
      })
      .then((data) => {
        setProductsPageProps(data.products);
        console.log(data); // Process your data here
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Banner {...productsPageProps.bannerProducts} />
      <Section {...productsPageProps.section} />
      <ProductsGroup {...productsPageProps.productsGroup} />
    </>
  );
};

export default Products;
