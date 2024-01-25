import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";
import ProductsGroup from "../Components/ProductsGroup/ProductsGroup";
import { useEffect, useState } from "react";

// const homePageProps = {
//   bannerHome: { imageUrl: "./images/banner/banner.jpg", mainTitle: "Home" },
//   section: { title: "aboutUs", text: "home", isHome: true },
//   productsGroup: {
//     title: "title",
//     additionalClass: "custom-class",
//     products: [
//       { id: 1, src: "/images/best-1.png" },
//       { id: 2, src: "/images/best-2.png" },
//       { id: 3, src: "/images/best-3.png" },
//     ],
//   }
// }

const Home = () => {
  const [homePageProps, setHomePageProps] = useState({});

  useEffect(() => {
    fetch("https://44dc9e6ee70244fa83ffb9c2954bf319.api.mockbin.io/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // or response.text() if the data is not JSON
      })
      .then((data) => {
        setHomePageProps(data.home);
        console.log(data); // Process your data here
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Banner {...homePageProps.bannerHome} />
      <Section {...homePageProps.section} />
      <ProductsGroup {...homePageProps.productsGroup} />
    </>
  );
};

export default Home;
