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
//       { id: 1, src: "/images/best-1.png", title: "Solimo Coffee Beans 2 kg", price: "10.73$" },
//       { id: 2, src: "/images/best-2.png", title: "Presto Coffee Beans 1 kg", price: "15.99$" },
//       { id: 3, src: "/images/best-3.png", title: "AROMISTICO Coffee 1 kg", price: "6.99$" },
//     ],
//   }
// }

const Home = () => {
  const [homePageProps, setHomePageProps] = useState({});

  useEffect(() => {
    fetch("https://fce4348dffef4799b0c7f57dc12b60b0.api.mockbin.io/")
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
