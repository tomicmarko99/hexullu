import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Accordion = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;
  return (
    <div className="bg-[#fafafa] border border-gray-100 border-t-0 w-full">
      <div className="p-4 text-xl relative w-full font-medium">
        <div className="w-5/6 text-[#333333]">{question}</div>
        <button
          aria-label="question-expand-arrow"
          onClick={() => setExpand(!expand)}
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
        >
          {expand ? <AiOutlineUp className="w-5" /> : <AiOutlineDown className="w-5" />}
        </button>
      </div>
      <div className={ansClass}>{answer}</div>
    </div>
  );
};

export default Accordion;
