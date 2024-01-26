import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";
import { useEffect, useState } from "react";

// const productsPageProps = {
//   bannerProducts: { imageUrl: "./images/banner/coffee-shop-2.jpg", mainTitle: "ForYourPleasure" },
//   section: { className: "text-center", image: "Products", title: "aboutOurGoods", text: "products" },
//   productsGroup: {
//     products: [
//       { id: 1, src: "/images/our-2.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "1.99$" },
//       { id: 2, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "2.99$" },
//       { id: 3, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "3.99$" },
//       { id: 4, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "4.99$" },
//       { id: 5, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "5.99$" },
//       { id: 6, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$" },
//     ],
//     additionalClass: "second-prodects",
//   },
// };

const Products = () => {
  const [productsPageProps, setProductsPageProps] = useState({});

  useEffect(() => {
    fetch("https://f53e40021f214a38b8a8740aed4c542a.api.mockbin.io/")
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
