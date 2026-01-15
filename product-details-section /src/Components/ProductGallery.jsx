import ImageContainer from "./ImageContainer";
import { useState } from "react";

const ProductGallery = ({ imageData }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const onImageClick = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <img
        className="rounded-lg h-[400px] w-full lg:h-[800px]"
        src={imageData[selectedImageIndex].image_url}
        alt="Voyger hoodie"
      />

      {/* Scroll = constrained parent + overflowing child */}

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-4 w-max ">
          {imageData.map((data, index) => (
            <ImageContainer
              key={`${data.product_id}-${index}`}
              imgSrc={data.image_url}
              imageIndex={index}
              isSelectedImage={selectedImageIndex === index}
              onClickFunction={onImageClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
