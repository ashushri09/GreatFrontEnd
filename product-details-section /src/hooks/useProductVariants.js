import { useEffect, useMemo, useState } from "react";

const useProductVariants = (inventory) => {
  const inventoryDetailsByColor = useMemo(() => {
    return inventory.reduce((acc, item) => {
      if (!acc[item.color]) {
        acc[item.color] = {};
      }

      acc[item.color][item.size] = {
        sku: item.sku,
        stock: item.stock,
        sale_price: item.sale_price,
        list_price: item.list_price,
        discount_percentage: item.discount_percentage,
      };

      return acc;
    }, {});
  }, [inventory]);

  const availableColors = Object.keys(inventoryDetailsByColor);

  const [selectedColor, setSelectedColor] = useState(
    availableColors[0] ?? null
  );

  const availableSizes = selectedColor
    ? Object.keys(inventoryDetailsByColor[selectedColor])
    : [];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0] ?? null);

  useEffect(() => {
    if (!availableSizes.includes(selectedSize)) {
      setSelectedSize(availableSizes[0] ?? null);
    }
  }, [availableSizes, selectedSize]);

  const selectedVariant =
    selectedColor && selectedSize
      ? inventoryDetailsByColor[selectedColor][selectedSize]
      : null;

  return {
    inventoryDetailsByColor,
    availableColors,
    availableSizes,
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize,
    selectedVariant,
  };
};

export default useProductVariants;
