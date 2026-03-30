import React from "react";

const PrimaryBtn = ({ type, id, children, className } :{ type?: "submit" | "reset" | "button" | undefined; id?: string; children: React.ReactNode | string; className?: string }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-gray-200 bg-[#912064] font-medium px-3 py-1.5 rounded  gap-x-1 hover:bg-[#912064]/70 ease-out duration-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;