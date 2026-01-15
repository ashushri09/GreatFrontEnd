import Inventory from "../../data/inventory.json";
import ProductImage from "../../data/product-images.json";
import ProductInfo from "../../data/product-info.json";
import ProductReviews from "../../data/product-reviews.json";
import Products from "../../data/products.json";

const useProductData = (PRODUCT_ID) => {
  const inventoryDetails = Inventory.filter((item) => {
    return item.product_id === PRODUCT_ID;
  });

  const productImageData = ProductImage.filter((item) => {
    return item.product_id === PRODUCT_ID;
  });

  const productInfo = ProductInfo.filter((item) => {
    return item.product_id === PRODUCT_ID;
  });

  const productReviews = ProductReviews.filter((item) => {
    return item.product_id === PRODUCT_ID;
  });

  const productData = Products.find((item) => {
    return item.product_id === PRODUCT_ID;
  });

  return {
    inventoryDetails,
    productImageData,
    productInfo,
    productReviews,
    productData,
  };
};

export default useProductData;
