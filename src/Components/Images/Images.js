import Image from "react-bootstrap/Image";

import "./Images.scss";

const Images = ({ image }) => {
  const ImagesObj = {
    Best1: { src: "/images/bwst-1.png", id: "image1" },
    Best2: { src: "/images/best-2.png", id: "image2" },
    Best3: { src: "/images/best-3.png", id: "image3" },
    Best4: { src: "/images/our-2.png", id: "image4" },
    //
    Best5: { src: "/images/our-2.png", id: "image5" },
    Best6: { src: "/images/our-2.png", id: "image6" },
    Best7: { src: "/images/our-2.png", id: "image7" },
    Best8: { src: "/images/our-2.png", id: "image8" },
    Best9: { src: "/images/our-2.png", id: "image9" },
    Best10: { src: "/images/our-2.png", id: "image10" },
    //
    About: { src: "/images/our-1.png", id: "image11" },
    Products: { src: "/images/for-your.png", id: "image12" },
  };

  const selectedImage = image ? ImagesObj[image] : null;

  if (!(image && selectedImage)) {
    return null;
  }

  return (
    <div className="section-image" key={selectedImage.id}>
      {selectedImage && <Image src={selectedImage.src} fluid />}
    </div>
  );
};

export default Images;
