import React from "react";

const Apicard = ({ title, description, img, url }) => {
  return (
    <div className="Card bg-[#fafafa] shadow-md rounded flex flex-col px-[15px] py-[30px]">
      <div className="cardHeader flex">
        <img className="w-[70px] rounded-[50%] shadow-sm" alt="Hexullu APIs" src={img} />
      </div>
      <div className="cardBody flex flex-col py-[20px]">
        <h3 className="text-xl font-bold text-[#009688] mb-[10px]">{title}</h3>
        <p className="text-[#333333]">{description}</p>
      </div>
      <div className="cardFooter">
        <a
          className="px-[20px] py-[8px] bg-[#009688] text-[#fff] rounded hover:shadow-md"
          target="_blank"
          rel="noreferrer"
          href={url}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Apicard;
