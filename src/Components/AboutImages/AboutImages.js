import Image from "react-bootstrap/Image";

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
    <div>
      {selectedImage && (
        <div key={selectedImage.id}>
          <Image src={selectedImage.src} fluid />
        </div>
      )}
    </div>
  );
};

export default AboutImages;
