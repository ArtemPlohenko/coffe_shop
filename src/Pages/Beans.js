import { Image } from "react-bootstrap";

import Banner from "../Components/Banner/Banner";
import Section from "../Components/Sections/Section";

const beansPageProps = {
  bannerBeans: { imageUrl: "/images/banner/coffee-shop.jpg", mainTitle: "OurCoffee" },
  section: {
    images: [
      { id: 1, src: "/images/best-1.png" },
      { id: 2, src: "/images/best-2.png" },
      { id: 3, src: "/images/best-3.png" },
      { id: 4, src: "/images/our-2.png" },
      { id: 5, src: "/images/our-2.png" },
      { id: 6, src: "/images/our-2.png" },
      { id: 7, src: "/images/our-2.png" },
      { id: 8, src: "/images/our-2.png" },
      { id: 9, src: "/images/our-2.png" },
      { id: 10, src: "/images/our-2.png" },
      { id: 11, src: "/images/our-1.png" },
      { id: 12, src: "/images/for-your.png" },
    ],
    isBeans: true,
    title: "aboutIt",
    country: [
      { country: "Brazil" },
      { country: "Kenya" },
      { country: "Columbia" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
      { country: "Brazil" },
    ],
    text: [
      {
        id: 1,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 2,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 3,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 4,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 5,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 6,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 7,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 8,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 9,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 10,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 11,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 12,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        id: 13,
        label: `<strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
    ],
    price: [
      { id: 1, price: "10.73$" },
      { id: 2, price: "15.99$" },
      { id: 3, price: "6.99$" },
      { id: 4, price: "1.99$" },
      { id: 5, price: "2.99$" },
      { id: 6, price: "3.99$" },
      { id: 7, price: "4.99$" },
      { id: 8, price: "5.99$" },
      { id: 9, price: "6.99$" },
      { id: 10, price: "7.99$" },
      { id: 11, price: "8.99$" },
      { id: 12, price: "9.99$" },
      { id: 13, price: "10.99$" },
    ],
  },
};

const Beans = () => {
  return (
    <>
      <Banner {...beansPageProps.bannerBeans} />
      <Section {...beansPageProps.section}>
        <div className="info">
          <Image src="/images/our-2.png" />
        </div>
      </Section>
    </>
  );
};

export default Beans;
