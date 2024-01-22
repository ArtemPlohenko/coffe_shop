// AboutImages.jsx

import React from "react";
import Image from "react-bootstrap/Image";
import "./AboutImages.scss";

const AboutImages = ({ image }) => {
  const Images = {
    aboutUs: { src: "/images/our-1.png", id: "image1" },
    aboutOurCoffee: { src: "/images/our-2.png", id: "image2" },
    aboutOurBeans: { src: "/images/for-your.png", id: "image3" },
  };

  // Динамічний вибір зображення на основі переданого prop
  const selectedImage = image ? Images[image] : null;

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="section-image" key={selectedImage.id}>
      <Image src={selectedImage.src} fluid />
    </div>
  );
};

export default AboutImages;
