import { useState } from "react";

const Accordian = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerClicked = () => {
    console.log("header is clicked");
    setIsOpen((open) => {
      return !open;
    });
  };

  return (
    <div className="">
      <button className="w-full flex justify-between" onClick={headerClicked}>
        <p className="text-neutral-600 font-medium text-lg">{title}</p>
        <div className="text-neutral-400">{isOpen ? "-" : "+"}</div>
      </button>
      {isOpen && (
        <ul className="ml-4 list-disc ">
          {items.map((item, index) => {
            return (
              <li
                className="font-normal text-base text-neutral-600"
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Accordian;
