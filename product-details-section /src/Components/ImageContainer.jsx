const ImageContainer = ({
  imgSrc,
  imageIndex,
  onClickFunction,
  isSelectedImage,
}) => {
  return (
    <div className="w-20 h-[120px] rounded-lg flex-shrink-0 lg:w-[160px]lg:h-[190px]">
      <img
        className={`rounded-lg border-2 ${
          isSelectedImage ? "border-indigo-600" : "border-transparent"
        }`}
        src={imgSrc}
        onClick={() => onClickFunction(imageIndex)}
      />
    </div>
  );
};

export default ImageContainer;
