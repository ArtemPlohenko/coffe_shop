import Image from "react-bootstrap/Image";

import "./AboutImages.scss";

const AboutImages = ({ image }) => {
  const Images = {
    aboutUs: { src: "images/our-1.png", id: "image1" },
    aboutOurBeans: { src: "images/our-2.png", id: "image2" },
  };

  const selectedImage = Images[image];

  if (!(image && selectedImage)) {
    return null;
  }

  return (
    <>
      {selectedImage && (
        <div className="section-image" key={selectedImage.id}>
          <Image src={selectedImage.src} fluid />
        </div>
      )}
    </>
  );
};

export default AboutImages;
