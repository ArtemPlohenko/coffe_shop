import Image from "react-bootstrap/Image";

const AboutImages = ({ showImages }) => {
  const images = [
    { src: "images/our-1.png", id: "image1" },
    { src: "images/our-2.png", id: "image2" },
  ];

  const selectedImage = showImages ? images[0] : null;

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
