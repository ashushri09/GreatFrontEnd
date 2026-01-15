const FullStar = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
  </svg>
);

const HalfStar = ({ className }) => (
  <svg viewBox="0 0 20 20" className={className}>
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half)"
      stroke="currentColor"
      d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"
    />
  </svg>
);

const EmptyStar = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
  </svg>
);

const roundToHalf = (value) => {
  return Math.round(value * 2) / 2;
};

const StarRating = ({ rating, max = 5 }) => {
  const roundedRating = roundToHalf(rating);

  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;

        if (roundedRating >= starValue) {
          return <FullStar key={index} className="w-5 h-5" />;
        }

        if (roundedRating + 0.5 === starValue) {
          return <HalfStar key={index} className="w-5 h-5" />;
        }

        return <EmptyStar key={index} className="w-5 h-5 text-neutral-300" />;
      })}
    </div>
  );
};

export default StarRating;
