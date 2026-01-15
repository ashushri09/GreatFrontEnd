import "./App.css";
import accordianData from "../data/accordianData";
import Accordian from "./Components/Accordian";
import useProductVariants from "./hooks/useProductVariants";
import ProductVariants from "./Components/ProductVariants";
import ProductGallery from "./Components/ProductGallery";
import ProductRating from "./Components/ProductRating";
import ProductPurchase from "./Components/ProductPurchase";
import useProductData from "./hooks/useProductData";

const PRODUCT_ID = "voyager-hoodie";

const App = () => {
  const { inventoryDetails, productImageData, productReviews, productData } =
    useProductData(PRODUCT_ID);

  const {
    availableColors,
    availableSizes,
    selectedColor,
    selectedSize,
    selectedVariant,
    setSelectedColor,
    setSelectedSize,
  } = useProductVariants(inventoryDetails);

  return (
    <div className="rounded-md bg-white flex flex-col gap-12 px-4 py-12 lg:flex-row lg:gap-8">
      <ProductGallery imageData={productImageData} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="text-neutral-900 text-3xl font-semibold">
              {productData.name}
            </div>
            <div className="flex flex-col gap-3">
              {selectedVariant && (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-end">
                    <p className="font-medium text-3xl text-neutral-600">
                      ${selectedVariant.sale_price}
                    </p>
                    <p className="text-neutral-400 text-lg font-medium actualPrice line-through">
                      ${selectedVariant.list_price}
                    </p>
                  </div>
                  <span className="bg-amber-50 px-2.5 py-1 inline-flex self-start text-amber-700 border rounded-2xl border-amber-200">
                    {selectedVariant.discount_percentage}% off
                  </span>
                </div>
              )}
              <ProductRating reviews={productReviews} />
            </div>
          </div>
          <p className="text-neutral-600 text-base leading-relaxed">
            {productData.description}
          </p>
          <div className="flex flex-col gap-8">
            <ProductVariants
              availableColors={availableColors}
              availableSizes={availableSizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              setSelectedColor={setSelectedColor}
              setSelectedSize={setSelectedSize}
            />
          </div>
          <ProductPurchase stock={selectedVariant.stock} />
          <div className="bg-indigo-700 flex justify-center items-center py-3 rounded-sm">
            <button
              className="text-white"
              onClick={() => {
                console.log("Add to cart button");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 divide-y">
          {accordianData.map((data) => {
            return (
              <Accordian key={data.id} title={data.title} items={data.items} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
