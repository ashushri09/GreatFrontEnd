import { useMemo } from "react";
import StarRating from "./StarRating";

const ProductRating = ({ reviews }) => {
  const reviewCount = reviews.length;

  const averageRating = useMemo(() => {
    if (reviewCount === 0) return 0;

    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviewCount;
  }, [reviews, reviewCount]);

  return (
    <div className="flex gap-2 items-center">
      <p className="font-normal text-xl text-neutral-900">
        {averageRating.toFixed(1)}
      </p>

      <StarRating rating={averageRating} />

      <button
        className="text-indigo-700 text-sm font-medium"
        onClick={() => console.log("See all reviews clicked")}
      >
        {reviewCount > 0
          ? `See all ${reviewCount} reviews`
          : "No reviews yet. Be the first"}
      </button>
    </div>
  );
};

export default ProductRating;
