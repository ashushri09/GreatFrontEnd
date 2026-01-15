import { useState } from "react";

const ProductPurchase = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const isOutOfStock = quantity >= stock;

  return (
    <div className="flex flex-col gap-4 items-start">
      <p className="text-neutral-500 text-sm font-normal">Quantity</p>

      <div className="relative inline-flex flex-col items-center">
        {isOutOfStock && (
          <div className="absolute -top-10 flex flex-col items-center">
            <div className="bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
              Insufficient stock
            </div>
            <div
              className="w-0 h-0 
              border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent border-t-black"
            />
          </div>
        )}

        <div className="inline-flex p-[2px] gap-3 bg-neutral-50 rounded-md border border-neutral-200">
          <button
            className="p-2 text-neutral-600 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={quantity === 1}
            onClick={() => setQuantity((q) => q - 1)}
          >
            −
          </button>

          <p className="px-3 py-[8px] text-neutral-600">{quantity}</p>

          <button
            className="p-2 text-neutral-600 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={quantity >= stock}
            onClick={() =>
              setQuantity((oldQuantity) => {
                const newQuantity = oldQuantity + 1;
                return newQuantity;
              })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchase;
