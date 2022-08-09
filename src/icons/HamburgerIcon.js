import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M26 16a2 2 0 01-2 2H8a2 2 0 010-4h16a2 2 0 012 2z"></path>
      <path d="M26 8a2 2 0 01-2 2H8a2 2 0 010-4h16a2 2 0 012 2z"></path>
      <path d="M26 24a2 2 0 01-2 2H8a2 2 0 010-4h16a2 2 0 012 2z"></path>
    </svg>
  );
}

export default Icon;
