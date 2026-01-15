const ProductVariants = ({
  availableColors,
  availableSizes,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-normal text-sm text-neutral-500">Available Colors</p>
        <div className="flex gap-4">
          {availableColors.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                }}
                className={`w-[38px] h-[38px] rounded-full flex items-center justify-center
                              ${
                                isSelected
                                  ? "ring-2 ring-blue-500 ring-offset-2"
                                  : ""
                              }`}
                style={{ backgroundColor: color }}
              >
                {isSelected && (
                  <svg
                    className="w-7 h-7 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.828a1 1 0 011.414-1.414L9 12.707l6.293-6.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <p className="font-normal text-sm text-neutral-500">Available Sizes</p>
        <div className="flex flex-row flex-wrap gap-4">
          {availableSizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                className={`px-5 py-4 border rounded ${
                  isSelected ? "border-indigo-600" : "border-neutral-200"
                }`}
                onClick={() => {
                  console.log("is selected value is", isSelected);
                  setSelectedSize(size);
                }}
              >
                {size.toLocaleUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductVariants;
